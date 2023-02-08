import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const SuggestionForm = () => {
  const [userNames, setUserNames] = useState([]);
  const [areaOfTowns, setAreaOfTowns] = useState([]);
  const [userSuggestions, setUserSuggestions] = useState({
    userName: 0,
    walkName: "",
    address: "",
    areaOfTownId: 0,
  });

  const navigate = useNavigate();

  const localWalkerUser = localStorage.getItem("walker_user");
  const walkerUserObject = JSON.parse(localWalkerUser);

  useEffect(() => {
    fetch("http://localhost:8088/users")
      .then((res) => res.json())
      .then((userNamesdata) => {
        setUserNames(userNamesdata);
      });

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
      <form className="suggestion-form" >
        <h2 className="suggestion-form-title">
          Have a great walking route? Send in a suggestion!
        </h2>

        {/* <fieldset id="form-bar">
          <select
            className="form-box"
            value={userSuggestions.userName}
            id="user-select"
            onChange={(event) => {
              setUserSuggestions(parseInt(event.target.value));
            }}
          >
            <option value="0">Select Your Name</option>
            {userNames.map((userName) => {
              return (
                <option key={userName.id} value={userName.id}>
                  {userName.fullName}
                </option>
              );
            })}
          </select>
        </fieldset> */}

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
            <label htmlFor="address">Address Route </label>
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
            <div>Area Of Town </div>
            {areaOfTowns.map((areaChoiceObj) => {
              return (
                <div key={areaChoiceObj.id} className="radio">
                  <label>
                    <input
                      type="radio"
                      value={areaChoiceObj.id}
                      checked={
                        userSuggestions.areaOfTownId === areaChoiceObj.id
                      }
                      onChange={(event) => {
                        const copy = { ...userSuggestions };
                        copy.areaOfTownId = parseInt(event.target.value);
                        setUserSuggestions(copy);
                      }}
                    />
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

      <br></br>
      <footer className="footer-container">
        <Link
          to="webcal://p115-caldav.icloud.com/published/2/MTM1MjU1OTMwNTEzNTI1NewWrp0tyU7Oz-MVzhotICb73f-VycAtzje771VKrD6qpxceAMMJVnlUTGwUR6x6eDodF6i9kM8yvQHIPKtTSPE"
          className="footer-link"
        >
          Subscribe to Our Calendar
        </Link>
        <Link
          className="social_link footer_link"
          to="https://www.instagram.com/nashvillewalkingclub/"
        >
          <img
            className="social_img"
            src="https://www.pngkey.com/png/full/1-19361_watercolor-instagram-icon-png-instagram-logo-white-on.png"
            alt="Instagram"
          />
        </Link>
      </footer>
    </>
  );
};
