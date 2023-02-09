import { useEffect, useState } from "react";
// import { AllSuggestions } from "./AllSuggestions";

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

  return (
    <>
      <h2> Your Suggested Meet-Ups</h2>

      <article className="suggestions" key="suggestion">
        {filtered.map((suggestion) => {
          return (
            <section
              className="suggestion-box"
              key={`usersuggestion--${suggestion.id}`}
            >
              <div className="suggest-walkName">
                Walk Name: {suggestion.walkName}
              </div>
              <div className="suggest-address">
                Address: {suggestion.address}
              </div>
              <button
                onClick={(event) => handleDeleteButton(event, suggestion.id)}
              >
                Delete
              </button>
            </section>
          );
        })}
      </article>

      {walkerUserObject.leader ? (
        <article>
          <h2> All Suggested Meet-Ups</h2>

          {suggestions.map((suggestion) => {
            return (
              <section
                className="allsuggestion-box"
                key={`suggestion--${suggestion.id}`}
              >
                <div className="suggest-userName">
                  Suggested by: {suggestion?.user?.fullName}{" "}
                </div>
                <div className="suggest-walkName">
                  Walk Name: {suggestion.walkName}{" "}
                </div>
                <div className="suggest-address">
                  Address: {suggestion.address}{" "}
                </div>
              </section>
            );
          })}
        </article>
      ) : (
        ""
      )}
    </>
  );
};
