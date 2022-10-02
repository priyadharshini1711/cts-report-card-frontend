import { useEffect, useState } from "react";
import CollegeEventLayout from "../components/CollegeEventLayout";
import DropDown from "../components/DropDown";
import Header from "../components/Header";
import { sidebar_menu } from "../constants";
import { getCollege } from "../services/college";
import { getMonth } from "../services/month";

export default function CollegeEvents() {

    const [college, setCollege] = useState([])

    const [month, setMonth] = useState([])

    const [collegeId, setCollegeID] = useState(3)

    const [monthId, setMonthId] = useState(1)

    async function getData() {
        setCollege(await getCollege())
        setMonth(await getMonth())
    }

    const onCollegeItemClick = (id) => {
        setCollegeID(id)
    }


    const onMonthItemClick = (id) => {
        setMonthId(id)
    }

    const getSelectedCollege = () => {
        const collegeName = college.find(item => item.id === collegeId)
        if (collegeName)
            return collegeName.name
        else
            return
    }

    const getSelectedMonth = () => {
        const monthName = month.find(item => item.id === monthId)
        if (monthName)
            return monthName.name
        else
            return
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <main className="flex-1">
            <div className="">
                <Header heading={sidebar_menu[5].name} />
            </div>
            <div class="">
                <div className="w-full">
                    <div className="flex flex-row justify-center gap-x-3 py-3">
                    <DropDown title={'Select College'} options={college} onMenuItemClick={onCollegeItemClick} active={collegeId} />
                    <div className="mt-1">College Selected : {getSelectedCollege()}</div>

                    <DropDown title={'Select Month'} options={month} onMenuItemClick={onMonthItemClick} active={monthId} />
                    <div className="mt-1">Month Selected : {getSelectedMonth()}</div>

                    </div>
                    {/* <CollegeEventsTable events={mapCollegeEvents} /> */}
                    <CollegeEventLayout collegeId={collegeId} monthId={monthId}/>
                </div>
            </div>
        </main>
    )
}