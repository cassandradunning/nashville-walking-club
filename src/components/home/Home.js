import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
    <div> 
      <img
    src="https://i.postimg.cc/pd979jDV/NWC-Homepage.png"
    alt="Nashville Walking Club"
    className="home-img"/>
  </div>
     <br></br>
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
       
    </>
  );
};
