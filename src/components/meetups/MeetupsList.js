import { Link } from "react-router-dom";


export const MeetupsList = ({
    areaChoiceArray,
    filteredAreasArray
}) => {
    

return (
   
    <div
    id="meetups-container"
    className={areaChoiceArray}
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
      
      <footer className="footer-container">
        <Link to="webcal://p115-caldav.icloud.com/published/2/MTM1MjU1OTMwNTEzNTI1NewWrp0tyU7Oz-MVzhotICb73f-VycAtzje771VKrD6qpxceAMMJVnlUTGwUR6x6eDodF6i9kM8yvQHIPKtTSPE" className="footer-link">
          Subscribe to Our Calendar</Link>
      <Link className="social_link footer_link" to="https://www.instagram.com/nashvillewalkingclub/">
        <img
          className="social_img"
          src="https://www.pngkey.com/png/full/1-19361_watercolor-instagram-icon-png-instagram-logo-white-on.png"
          alt="Instagram"
        />
      </Link>

      </footer>
    </div>
    
  )
}

/*{
    areaChoiceId, 
    areaArray, 
    filteredAreaArray}

    */