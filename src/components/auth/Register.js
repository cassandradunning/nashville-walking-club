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
                    localStorage.setItem("walker_user", JSON.stringify({
                        id: createdUser.id,
                        leader: createdUser.isLeader
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
            <img src="https://i.postimg.cc/QM9nDvq2/NWC-logo.png"
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

