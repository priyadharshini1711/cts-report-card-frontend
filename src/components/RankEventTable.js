import { useState } from "react"
import { useEffect } from "react"
import { getActualTopper, getComputedTopper, getEventRank } from "../services/rankTable"


export default function RankEventTable({ college_month_event_id }) {

    const [rank, setRank] = useState([])

    const [stats, setStats] = useState()

    async function getData() {
        setRank(await getEventRank(college_month_event_id))
        let actual = await getActualTopper(college_month_event_id)
        let computed = await getComputedTopper(college_month_event_id)
        let newStats = []
        let data = []
        actual.forEach((item) => {
            data.push(item.name)
        })
        newStats.push({ "name": "Actual", "member": data })
        data = []
        computed.forEach((item) => {
            data.push(item.name)
        })
        newStats.push({ "name": "Computed", "member": data })
        setStats(newStats)
    }

    useEffect(() => {
        getData()
    }, [college_month_event_id])

    useEffect(() => {
        setRank(rank)
    }, [rank])

    useEffect(() => {
        setStats(stats)
    }, [stats])

    const getMatch = () => {
        if (stats && stats[0] && stats[1]) {
            let actual_member = stats[0].member
            let computed_member = stats[1].member
            let total = actual_member.length
            let match = 0
            actual_member.forEach((item) => {
                if (computed_member.includes(item))
                    match += 1
            })
            let match_percent = (match / total) * 100
            return Math.round(match_percent) + " %"
        }
        return 0 + " %"
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
                                        </tr>
                                    </thead>
                                    <tbody class="divide-y divide-gray-200 bg-white">
                                        {rank && rank.map((item) => {
                                            return (
                                                <tr class="divide-x divide-gray-200">
                                                    <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-6">{item.id}</td>
                                                    <td class="whitespace-nowrap p-4 text-sm text-gray-500">{item.name}</td>
                                                    <td class="whitespace-nowrap p-4 text-sm text-gray-500">{item.mark}</td>
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
                    {stats && stats[0] && stats[0].member.map((item) => (
                        <li key={item} className="col-span-1 flex rounded-md shadow-sm">
                            <div className="flex flex-1 items-center justify-between truncate rounded-r-md border-t border-r border-b border-gray-200 bg-white">
                                <div className="flex-1 truncate px-4 py-2 text-sm">
                                    <p className="text-gray-500">{item}</p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="px-4  sm:px-6 lg:px-8 py-2">
                <h2 className="text-sm font-medium text-gray-500">Computed</h2>
                <ul className="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
                    {stats && stats[1] && stats[1].member.map((item) => (
                        <li key={item} className="col-span-1 flex rounded-md shadow-sm">
                            <div className="flex flex-1 items-center justify-between truncate rounded-r-md border-t border-r border-b border-gray-200 bg-white">
                                <div className="flex-1 truncate px-4 py-2 text-sm">
                                    <p className="text-gray-500">{item}</p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    )
}