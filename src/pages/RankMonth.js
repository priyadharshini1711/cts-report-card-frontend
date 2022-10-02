import { getMonth } from "../services/month";
import { useEffect, useState } from "react";
import DropDown from "../components/DropDown";
import RankMonthTable from "../components/RankMonthTable";

export default function RankMonth() {

    const [month, setMonth] = useState([])

    const [monthId, setMonthId] = useState(1)

    async function getData() {
        setMonth(await getMonth())
    }

    const onMonthSelect = (id) => {
        setMonthId(id)
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
        <div class="">
            <div className="w-full">
                <div className="flex flex-row justify-center gap-x-3 py-3">
                    <DropDown title={'Select Month'} options={month} onMenuItemClick={onMonthSelect} active={monthId} />
                    <div className="mt-1">Event Month : {getSelectedMonth()}</div>
                </div>
                <RankMonthTable monthId={monthId} />
            </div>
        </div>
    )

}