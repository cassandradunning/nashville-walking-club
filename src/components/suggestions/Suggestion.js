// import { useNavigate } from "react-router-dom";
// import { useState } from "react";

export const Suggestion = ({ suggestionObj, deleteObj }) => {
  //   const [leaderApproval, setLeaderApproval] = useState({
  //   userName: 0,
  //   meetupName: "",
  //   address: "",
  //   areaOfTownId: 0,
  //   meetupImg: "",
  //   date: ","
  // });

//   const localWalkerUser = localStorage.getItem("walker_user");
//   const walkerUserObject = JSON.parse(localWalkerUser);

//   const navigate = useNavigate();


//   const handleApproveButton = () => {
  
//     const updatedMeetupToAPI = {
//       id: walkerUserObject.id,
//       meetupName: leaderApproval.walkName,
//       meetupImg: leaderApproval.meetupImg,
//       address: leaderApproval.address,
//       areaOfTownId: leaderApproval.areaOfTownId,
//       date: leaderApproval.date,
//     };

//     fetch(`http://localhost:8088/meetups`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(updatedMeetupToAPI),
//     })
//     .then(response => response.json())
//     // .then(() => {
//     //   fetch(`http://localhost:8088/suggestions?_expand=${suggestionObj.id}`)
//     //   .then((response) => response.json())
//       .then(() => {
//               navigate("/meetups");
//             });
//     // .then((updatedArray) => {
//     //   setLeaderApproval(updatedArray)
//     // })
//   // })
// }

  return (
    <article
    className="suggestions" key="suggestion"
    >
      <section
              className="suggestion-box"
              key={`usersuggestion--${suggestionObj.id}`}
            >
      <img
        src={suggestionObj.meetupImg}
        alt={suggestionObj.meetupName}
        className="suggestion-img"
      />
      <div className="suggest-userName">
        Suggested by: {suggestionObj?.user?.fullName}
      </div>

      <div className="suggest-walkName">
        Walk Name: {suggestionObj.walkName}
      </div>
      <div className="suggest-address">Address: {suggestionObj.address}</div>

      {/* <button
        onClick={(event) => handleApproveButton(event)}
        className="btn btn-approve"
      >
        Approve
      </button> */}

      <button
        onClick={(event) => deleteObj(event, suggestionObj.id)}
        className="btn btn-deny"
      >
        Deny
      </button>
   
      </section>
    </article>
  );
};
