import { useEffect, useState } from "react";
import { Suggestion } from "./Suggestion";


import "./Suggestions.css";

export const SuggestionList = () => {
  const [suggestions, setSuggestions] = useState([]);
  const [filtered, setFiltered] = useState([]);
 


  const localWalkerUser = localStorage.getItem("walker_user");
  const walkerUserObject = JSON.parse(localWalkerUser);

  useEffect(() => {
    fetch(`http://localhost:8088/suggestions?_expand=user`)
      .then((res) => res.json())
      .then((suggestionArray) => {
        setSuggestions(suggestionArray);
      });
  }, []);

  useEffect(() => {
    const mySuggestions = suggestions.filter(
      (suggestion) => suggestion.userId === walkerUserObject.id
    );
    setFiltered(mySuggestions);
  }, [suggestions]);

  const handleDeleteButton = (event, suggestionId) => {
    fetch(`http://localhost:8088/suggestions/${suggestionId}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        fetch(`http://localhost:8088/suggestions?_expand=user`)
          .then((res) => res.json())
          .then((suggestionArray) => {
            setSuggestions(suggestionArray);
          });
      });
  };


  // const handleApproveButton = (event) => {
  //   event.preventDefault()
  

  //     return fetch(`http://localhost:8088/suggestions/${suggestionObj.id}`, {
  //       method: "PUT",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(leaderApproval),
  //     })
  //     .then(response => response.json())
     
  //       .then(() => {
  //               navigate("/meetups");
  //             });
   

  return (
    <article className="suggestion-header">
      <h2> Your Suggested Meet-Ups</h2>

      <article className="suggestions" key="suggestion">
        {filtered.map((suggestion) => {
          return (
            <section
              className="suggestion-box"
              key={`usersuggestion--${suggestion.id}`}
            >
              <img
                src={suggestion.meetupImg}
                alt={suggestion.meetupName}
                className="suggestion-img"
              />
              <div className="suggest-walkName">
                Walk Name: {suggestion.walkName}
              </div>
              <div className="suggest-address">
                Address: {suggestion.address}
              </div>
              <button
                onClick={(event) => handleDeleteButton(event, suggestion.id)}
                          className="btn btn-deny"

              >
                Delete
              </button>
            </section>
          );
        })}
      </article>

      {walkerUserObject.leader ? (
      <article className="suggestion-header">
          <h2> All Suggested Meet-Ups</h2>
          <article className="suggestions" key="suggestion">
          {
            suggestions.map((suggestion) => <Suggestion 
            suggestionObj={suggestion} 
            deleteObj= {handleDeleteButton}
          
            />
          )
          }
        </article>
        </article>
      ) : (
        ""
      )}
    </article>
  );
};
