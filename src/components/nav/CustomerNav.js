import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const CustomerNav = () => {
    const navigate = useNavigate()

    return (
        <ul className="navbar">
            <a href="/">
            <img 
              src="https://previews.dropbox.com/p/thumb/ABzWOHQts_u9FL3p96_YoNSNGvItls5j-iUoEyS6fquRoikMl6gVwZs6joxmFruH3HUh4PCZnf7np_EMxHDav5rYPJJzB1LRil2t7S6yz2TlftwyCdAqKUU41O_bbPNdy5VPO3pcToJygVABTVbK7fcumVWzmYL56OKD0hy2KrhzuDMZsTFnxDCQbnVapsajI9iTwSIYFIzpZ8DLdlIaA7hQ3shtLYDCSqOSNm7dHeZLCkxLLpluFErS9EP8xyYYyQ4xXSF19PEHh7JJGIAJIn_vmCPPxD3H95i3fn7HjdoH1e8At55ObCbrYFkLv_hpyVBwshBTLwF055WLNdVi7YVtewxRSJjLqccHAd0DTv9QGagj0hMxDtA-7bt4E2zlHsM/p.png"
              alt="Nashville Walking Club"
              className="logo-img"
            />
            </a>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/meetups">Meet-Ups</Link>
            </li>
            
            {
                localStorage.getItem("walk_user")
                    ? <li className="navbar__item navbar__logout">
                        <Link className="navbar__link" to="" onClick={() => {
                            localStorage.removeItem("walk_user")
                            navigate("/", {replace: true})
                        }}>Logout</Link>
                    </li>
                    : ""
            }
        </ul>
    )
}

