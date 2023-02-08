import "./NavBar.css"
import { EmployeeNav } from "./EmployeeNav"
import { CustomerNav } from "./CustomerNav"

export const NavBar = () => {

    const localWalkUser = localStorage.getItem("walker_user")
    const walkUserObject = JSON.parse(localWalkUser)

    if (walkUserObject.leader) {
        // return employee views
        return <EmployeeNav />
    }
    else{
        // return customer views
        return <CustomerNav />
    }
}

