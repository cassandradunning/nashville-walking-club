import React, { useState } from "react"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import "./Login.css"

export const Login = () => {
    const [email, set] = useState("hpassfield7@netvibes.com")
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()

        return fetch(`http://localhost:8088/users?email=${email}`)
            .then(res => res.json())
            .then(foundUsers => {
                if (foundUsers.length === 1) {
                    const user = foundUsers[0]
                    localStorage.setItem("honey_user", JSON.stringify({
                        id: user.id,
                        staff: user.isStaff
                    }))

                    navigate("/")
                }
                else {
                    window.alert("Invalid login")
                }
            })
    }

    return (
        <main className="container--login">
            <section>
                <form className="form--login" onSubmit={handleLogin}>
                    <img src="https://previews.dropbox.com/p/thumb/ABzWOHQts_u9FL3p96_YoNSNGvItls5j-iUoEyS6fquRoikMl6gVwZs6joxmFruH3HUh4PCZnf7np_EMxHDav5rYPJJzB1LRil2t7S6yz2TlftwyCdAqKUU41O_bbPNdy5VPO3pcToJygVABTVbK7fcumVWzmYL56OKD0hy2KrhzuDMZsTFnxDCQbnVapsajI9iTwSIYFIzpZ8DLdlIaA7hQ3shtLYDCSqOSNm7dHeZLCkxLLpluFErS9EP8xyYYyQ4xXSF19PEHh7JJGIAJIn_vmCPPxD3H95i3fn7HjdoH1e8At55ObCbrYFkLv_hpyVBwshBTLwF055WLNdVi7YVtewxRSJjLqccHAd0DTv9QGagj0hMxDtA-7bt4E2zlHsM/p.png"
                    alt="Nashville Walking Club"
                    className="logo-img"/>
                    <h2>Please sign in</h2>
                    <fieldset>
                        <label htmlFor="inputEmail"> Email address </label>
                        <input type="email"
                            value={email}
                            onChange={evt => set(evt.target.value)}
                            className="form-control"
                            placeholder="Email address"
                            required autoFocus />
                    </fieldset>
                    <fieldset>
                        <button type="submit">
                            Sign in
                        </button>
                    </fieldset>
                </form>
            </section>
            <section className="link--register">
                <Link to="/register">Not a member yet?</Link>
            </section>
        </main>
    )
}

