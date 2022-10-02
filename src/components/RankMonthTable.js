import { getMonthRank, getMonthToppers, getMonthCoordinators, getMonthStars } from "../services/rankTable"
import { useEffect, useState } from "react";


export default function RankMonthTable({ monthId }) {

    const [rank, setRank] = useState([])

    const [actual, setActual] = useState([])

    const [computed, setComputed] = useState([])

    async function getData() {
        let value1 = await getMonthRank(monthId)
        let value2 = await getMonthToppers(monthId)
        let value3 = await getMonthCoordinators(monthId)
        let data = []
        value1.forEach((item) => {
            let obj = item
            let event_topped = value2.find((topper) => topper.student_id === item.student_id)
            if (event_topped) {
                obj["topped"] = event_topped.event_topper
            } else {
                obj["topped"] = 0
            }
            let event_coordinator = value3.find((topper) => topper.student_id === item.student_id)
            if (event_coordinator) {
                obj["coordinated"] = event_coordinator.event_coordinator
            } else {
                obj["coordinated"] = 0
            }
            obj["total"] = obj.month_mark + (10 * obj.topped) + (10 * obj.coordinated)
            data.push(obj)
        })

        data = data.sort((a, b) => b.total - a.total);

        setRank(data)

        setComputed(data.slice(0,10))

        setActual(await getMonthStars(monthId, 10))

    }

    useEffect(() => {
        getData()
    }, [monthId])

    const getMatch = () => {
        if (actual && computed){
            let computed_names = []
            computed.forEach((item) => {
                computed_names.push(item.name)
            })
            let total = actual.length
            let match = 0
            actual.forEach((item) => {
                if(computed_names.includes(item.name))
                match+=1
            })
            let match_percent = (match / total) * 100
            return Math.round(match_percent) + " %"
        }
        return "0 %"
    }

    return (
        <div>
            <div class="px-4 sm:px-6 lg:px-8">
                <div class="mt-2 flex flex-col">
                    <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                            <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                                <table class="min-w-full divide-y divide-gray-300">
                                    <thead class="bg-gray-50">
                                        <tr class="divide-x divide-gray-200">
                                            <th scope="col" class="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pl-6">Id</th>
                                            <th scope="col" class="px-4 py-3.5 text-left text-sm font-semibold text-gray-900">Name</th>
                                            <th scope="col" class="px-4 py-3.5 text-left text-sm font-semibold text-gray-900">Mark</th>
                                            <th scope="col" class="px-4 py-3.5 text-left text-sm font-semibold text-gray-900">Event Coordinated</th>
                                            <th scope="col" class="px-4 py-3.5 text-left text-sm font-semibold text-gray-900">Event Topped</th>
                                        </tr>
                                    </thead>
                                    <tbody class="divide-y divide-gray-200 bg-white">
                                        {rank && rank.map((item) => {
                                            return (
                                                <tr class="divide-x divide-gray-200">
                                                    <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-6">{item.student_id}</td>
                                                    <td class="whitespace-nowrap p-4 text-sm text-gray-500">{item.name}</td>
                                                    <td class="whitespace-nowrap p-4 text-sm text-gray-500">{item.month_mark}</td>
                                                    <td class="whitespace-nowrap p-4 text-sm text-gray-500">{item.coordinated}</td>
                                                    <td class="whitespace-nowrap p-4 text-sm text-gray-500">{item.topped}</td>
                                                </tr>)
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="px-4 sm:px-6 lg:px-8 py-2">
                <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-1 max-w-md">
                    <div key="Match" className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
                        <dt className="truncate text-sm font-medium text-gray-500">Match</dt>
                        <dd className="mt-1 text-3xl font-semibold tracking-tight text-green-500">{getMatch()}</dd>
                    </div>
                </dl>
            </div>

            <div className="px-4  sm:px-6 lg:px-8 py-2">
                <h2 className="text-sm font-medium text-gray-500">Actual</h2>
                <ul className="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
                    {actual && actual.map((item) => (
                        <li key={item.id} className="col-span-1 flex rounded-md shadow-sm">
                            <div className="flex flex-1 items-center justify-between truncate rounded-r-md border-t border-r border-b border-gray-200 bg-white">
                                <div className="flex-1 truncate px-4 py-2 text-sm">
                                    <p className="text-gray-500">{item.name}</p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="px-4  sm:px-6 lg:px-8 py-2">
                <h2 className="text-sm font-medium text-gray-500">Computed</h2>
                <ul className="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
                    {computed && computed.map((item) => (
                        <li key={item.id} className="col-span-1 flex rounded-md shadow-sm">
                            <div className="flex flex-1 items-center justify-between truncate rounded-r-md border-t border-r border-b border-gray-200 bg-white">
                                <div className="flex-1 truncate px-4 py-2 text-sm">
                                    <p className="text-gray-500">{item.name}</p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )

}