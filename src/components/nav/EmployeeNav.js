import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";

export const EmployeeNav = () => {
  const navigate = useNavigate();

  return (
    <ul className="navbar">
      <Link className="logo__link navbar__link" to="/">
        <img
          className="logo_img"
          src="https://i.postimg.cc/QM9nDvq2/NWC-logo.png"
          alt="Nashville Walking Club"
        />
      </Link>
      <li className="navbar__item active">
        <Link className="navbar__link" to="/meetups">
          Meet-Ups
        </Link>
      </li>
      <li className="navbar__item active">
                <Link className="navbar__link" to="/suggest_meetup">Suggest a Meet-up</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/suggestion_list">Suggested Meet-Ups</Link>
            </li>

      {localStorage.getItem("walker_user") ? (
        <li className="navbar__item navbar__logout">
          <Link
            className="navbar__link"
            to=""
            onClick={() => {
              localStorage.removeItem("walker_user");
              navigate("/", { replace: true });
            }}
          >
            Logout
          </Link>
        </li>
      ) : (
        ""
      )}
    </ul>
  );
};
