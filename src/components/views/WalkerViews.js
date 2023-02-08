import { Outlet, Route, Routes } from "react-router-dom"
import { AllMeetups } from "../meetups/AllMeetups"
import { Home } from "../home/Home"
import { SuggestionForm } from "../suggestions/SuggestionForm"
import { SuggestionList } from "../suggestions/SuggestionList"

export const WalkerViews = () => {
	return (
        <Routes>
            <Route path="/" element={
                <>

                    <Outlet />
                </>
            }>
                <Route index element={<Home />} />
                <Route path="meetups" element={<AllMeetups />} />
                <Route path="suggest_meetup" element={<SuggestionForm />} />
                <Route path="suggestion_list" element={<SuggestionList />} />


            </Route>
        </Routes>
    )
}






