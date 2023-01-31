import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./Login.css"

export const Register = (props) => {
    const [walker, setWalker] = useState({
        email: "",
        fullName: "",
        isLeader: false
    })
    let navigate = useNavigate()

    const registerNewUser = () => {
        return fetch("http://localhost:8088/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(walker)
        })
            .then(res => res.json())
            .then(createdUser => {
                if (createdUser.hasOwnProperty("id")) {
                    localStorage.setItem("walk_user", JSON.stringify({
                        id: createdUser.id,
                        staff: createdUser.isLeader
                    }))

                    navigate("/")
                }
            })
    }

    const handleRegister = (e) => {
        e.preventDefault()
        return fetch(`http://localhost:8088/users?email=${walker.email}`)
            .then(res => res.json())
            .then(response => {
                if (response.length > 0) {
                    // Duplicate email. No good.
                    window.alert("Account with that email address already exists")
                }
                else {
                    // Good email, create user.
                    registerNewUser()
                }
            })
    }

    const updatewalker = (evt) => {
        const copy = {...walker}
        copy[evt.target.id] = evt.target.value
        setWalker(copy)
    }

    return (
        <main style={{ textAlign: "center" }}>
            <form className="form--login" onSubmit={handleRegister}>
            <img src="https://previews.dropbox.com/p/thumb/ABzWOHQts_u9FL3p96_YoNSNGvItls5j-iUoEyS6fquRoikMl6gVwZs6joxmFruH3HUh4PCZnf7np_EMxHDav5rYPJJzB1LRil2t7S6yz2TlftwyCdAqKUU41O_bbPNdy5VPO3pcToJygVABTVbK7fcumVWzmYL56OKD0hy2KrhzuDMZsTFnxDCQbnVapsajI9iTwSIYFIzpZ8DLdlIaA7hQ3shtLYDCSqOSNm7dHeZLCkxLLpluFErS9EP8xyYYyQ4xXSF19PEHh7JJGIAJIn_vmCPPxD3H95i3fn7HjdoH1e8At55ObCbrYFkLv_hpyVBwshBTLwF055WLNdVi7YVtewxRSJjLqccHAd0DTv9QGagj0hMxDtA-7bt4E2zlHsM/p.png"
              alt="Nashville Walking Club"
              className="logo-img"/>
                <h2 className="h3 mb-3 font-weight-normal">Please Register to Become a Member of Nashville Walking Club</h2>
                <fieldset>
                    <label htmlFor="fullName"> Full Name </label>
                    <input onChange={updatewalker}
                           type="text" id="fullName" className="form-control"
                           placeholder="Enter your name" required autoFocus />
                </fieldset>
                <fieldset>
                    <label htmlFor="email"> Email address </label>
                    <input onChange={updatewalker}
                        type="email" id="email" className="form-control"
                        placeholder="Email address" required />
                </fieldset>
                <fieldset>
                    <input onChange={(evt) => {
                        const copy = {...walker}
                        copy.isLeader = evt.target.checked
                        setWalker(copy)
                    }}
                        type="checkbox" id="isLeader" />
                    <label htmlFor="email"> I am a Walk Leader </label>
                </fieldset>
                <fieldset>
                    <button type="submit"> Register </button>
                </fieldset>
            </form>
        </main>
    )
}

