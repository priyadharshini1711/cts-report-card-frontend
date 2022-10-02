import { useEffect, useState } from "react"
import { getCollegeEvents } from "../services/collegeEvents"
import CollegeEventDetail from "./CollegeEventDetail"
import CollegeEventSidebar from "./CollegeEventSidebar"

export default function CollegeEventLayout({ collegeId, monthId }) {

    const [eventList, setEventList] = useState([])
    const [collegeMonthEventId, setCollegeMonthEventId] = useState(790)

    const onEventItemClick = (college_month_event_id) => {
        setCollegeMonthEventId(college_month_event_id)
    }

    useEffect(() => {
        (async () => {
            setEventList(await getCollegeEvents(collegeId, monthId))
            if (eventList[0]) { setCollegeMonthEventId(eventList[0].id) }
        })()
    }, [collegeId, monthId])

    return (
        <div className="flex flex-row justify-items-center border-t-2">
            <div className="w-3/12 border-r-2 min-h-screen overflow-hidden">
                <CollegeEventSidebar eventList={eventList} onEventItemClick={onEventItemClick} />
            </div>
            <div className="w-full">
                <CollegeEventDetail collegeMonthEventId={collegeMonthEventId} />
            </div>
        </div>
    )
}