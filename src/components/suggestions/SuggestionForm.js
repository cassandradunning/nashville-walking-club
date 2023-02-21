import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const SuggestionForm = () => {
  const [areaOfTowns, setAreaOfTowns] = useState([]);
  const [userSuggestions, setUserSuggestions] = useState({
    userName: 0,
    walkName: "",
    address: "",
    areaOfTownId: 0,
    meetupImg:""
  });

  const navigate = useNavigate();

  const localWalkerUser = localStorage.getItem("walker_user");
  const walkerUserObject = JSON.parse(localWalkerUser);

  useEffect(() => {
    fetch("http://localhost:8088/areaOfTown")
      .then((res) => res.json())
      .then((areaOfTownsData) => {
        setAreaOfTowns(areaOfTownsData);
      });
  }, []);

  const handleSaveButtonClick = (event) => {
    event.preventDefault();

    const suggestionToSendToAPI = {
      userId: walkerUserObject.id,
      walkName: userSuggestions.walkName,
      meetupImg: userSuggestions.meetupImg,
      address: userSuggestions.address,
      areaOfTownId: userSuggestions.areaOfTownId,
    };

    return fetch(`http://localhost:8088/suggestions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(suggestionToSendToAPI),
    })
      .then((response) => response.json())
      .then(() => {})
      .then(() => {
        navigate("/suggestion_list");
      });
  };

  return (
    <>
      <form className="suggestion-form">
        <h2 className="suggestion-form-title">
          Have a great walking route? Send in a suggestion!
        </h2>

        <fieldset>
          <div className="form-group">
            <label htmlFor="walkName">Name of Walking Route </label>
            <input
              required
              id="walkName"
              type="text"
              className="form-control"
              placeholder="Walk Name"
              value={userSuggestions.walkName}
              onChange={(event) => {
                const copy = { ...userSuggestions };
                copy.walkName = event.target.value;
                // targets the value of the event
                setUserSuggestions(copy);
              }}
            />
          </div>
        </fieldset>

        <fieldset>
        <div className="form-group">
          <label htmlFor="meetupImg">Image of Location </label>
          <input
            required
            id="meetupImg"
            type="text"
            className="form-control"
            placeholder="https://www.example.com"
            value={userSuggestions.meetupImg} 
            onChange={(event) => {
              const copy = { ...userSuggestions }
              copy.meetupImg = event.target.value
              setUserSuggestions(copy);
            }}
          />
        </div>
      </fieldset>

        <fieldset>
          <div className="form-group">
            <label htmlFor="address">Address of Route </label>
            <input
              required
              id="address"
              type="text"
              className="form-control"
              placeholder="Address"
              value={userSuggestions.address}
              onChange={(event) => {
                const copy = { ...userSuggestions };
                copy.address = event.target.value;
                // updates the new state
                setUserSuggestions(copy);
              }}
            />
          </div>
        </fieldset>

        <fieldset>
          <div className="form-group">
            <div>Area of Town </div>
            {areaOfTowns.map((areaChoiceObj) => {
              return (
                <div key={areaChoiceObj.id} className="radio">
                  <label>
                    <input
                      type="radio"
                      className="radio-area"
                      value={areaChoiceObj.id}
                      checked={
                        userSuggestions.areaOfTownId === areaChoiceObj.id
                      }
                      onChange={(event) => {
                        const copy = { ...userSuggestions };
                        copy.areaOfTownId = parseInt(event.target.value);
                        setUserSuggestions(copy);
                      }} 
                    /> {' '}
                      {areaChoiceObj.areaName}
                  </label>
                </div>
              );
            })}
          </div>
        </fieldset>

        <button
          onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
      
    </>
  );
};
