import { LeaderViews } from "./LeaderViews"
import { WalkerViews } from "./WalkerViews"

export const ApplicationViews = () => {

	const localWalkerUser = localStorage.getItem("walker_user")
    const walkerUserObject = JSON.parse(localWalkerUser)

    if (walkerUserObject.leader) {
        // return employee views
        return <LeaderViews />
    }
    else{
        // return customer views
        return <WalkerViews />
    }
}

