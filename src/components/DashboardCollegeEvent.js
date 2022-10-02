import { useEffect, useState } from "react";
import { getMSEC, getRMD, getRMKCET, getRMKEC, getSATHYABAMA, getSCSVMV, getSJCE, getSJIT, getSRM, getSSN, getSVCE, getVEC, getVIT, getVIT_UNIV } from "../services/dashboard";

export default function DashboardCollegeEvent() {
    const [collegeEvent, setCollegeEvent] = useState([])

    const getEventCount = (value) => {
        let sum = 0;
        value.forEach((element) => {
            for (let [key, value] of Object.entries(element)) {
                if (value !== "-1")
                    sum += 1
            }

        });
        sum -= value.length;
        return sum
    }

    async function getData() {
        let pair = []
        pair.push({ "name": "RMD ENGINEERING COLLEGE", "event": getEventCount(await getRMD()) })
        pair.push({ "name": "SCSVMV UNIVERSITY", "event": getEventCount(await getSCSVMV()) })
        pair.push({ "name": "VELAMMAL ENGINEERING COLLEGE", "event": getEventCount(await getVEC()) })
        pair.push({ "name": "RMK COLLEGE OF ENGINEERING AND TECHNOLOGY ", "event": getEventCount(await getRMKCET()) })
        pair.push({ "name": "ST JOSEPH'S INSTITUTE OF  TECHNOLOGY", "event": getEventCount(await getSJIT()) })
        pair.push({ "name": "SATHYABAMA UNIVERSITY", "event": getEventCount(await getSATHYABAMA()) })
        pair.push({ "name": "RRMK ENGINEERING COLLEGEMKEC", "event": getEventCount(await getRMKEC()) })
        pair.push({ "name": "SJST JOSEPH'S COLLEGE OF  ENGINEERINGCE", "event": getEventCount(await getSJCE()) })
        pair.push({ "name": "VELAMMAL INSTITUTE OF TECHNOLOGY", "event": getEventCount(await getVIT()) })
        pair.push({ "name": "MEENAKSHI SUNDARARAJAN ENGINEERING COLLEGE", "event": getEventCount(await getMSEC()) })
        pair.push({ "name": "SRM UNIVERSITY ", "event": getEventCount(await getSRM()) })
        pair.push({ "name": "SRI VENKATESWARA COLLEGE OF  ENGINEERING", "event": getEventCount(await getSVCE()) })
        pair.push({ "name": "SSN COLLEGE OF ENGINEERING ", "event": getEventCount(await getSSN()) })
        pair.push({ "name": "VIT UNIVERSITY", "event": getEventCount(await getVIT_UNIV()) })
        setCollegeEvent(pair)
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div className="flex flex-col">
            <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                    <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg table-height">
                        <table className="min-w-full divide-y divide-gray-300 overflow-auto">
                            <thead className="bg-gray-50">
                                <tr className="divide-x divide-gray-200">
                                    <th scope="col" className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                                        College Name
                                    </th>
                                    <th scope="col" className="px-4 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Events
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 bg-white">
                                {collegeEvent && collegeEvent.map((item) => (
                                    <tr key={item.name} className="divide-x divide-gray-200">
                                        <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-6">
                                            {item.name}
                                        </td>
                                        <td className="whitespace-nowrap p-4 text-sm text-gray-500">{item.event}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}