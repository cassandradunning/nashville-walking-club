import { Link } from "react-router-dom";


export const MeetupsList = ({
    areaChoiceArray,
    filteredAreasArray
}) => {
    

return (
   
    <div
    id="container-fluid"
    className="suggestions"
    // {areaChoiceArray}
    >
   {filteredAreasArray.map((areaOfTown) => {
        return (
          <div key={areaOfTown.id} className="meetup-card">
            <img
              src={areaOfTown.meetupImg}
              alt={areaOfTown.meetupName}
              className="meetup-img"
            />
            <div className="meetup-name">{areaOfTown.meetupName}</div>
      
        <div className="meetup-address">{areaOfTown.address}</div>
        <div className="meetup-date">{areaOfTown.date}</div>
          </div>
        )
      })} 
      
     
    </div>
    
  )
}

/*{
    areaChoiceId, 
    areaArray, 
    filteredAreaArray}

    */