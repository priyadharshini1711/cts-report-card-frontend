import { getOverallRank, getOverallCoordinators, getOverallToppers } from "../services/rankTable"
import { useEffect, useState } from "react";


export default function RankOverallTable() {

    const [rank, setRank] = useState([])

    async function getData() {
        let value1 = await getOverallRank()
        let value2 = await getOverallToppers()
        let value3 = await getOverallCoordinators()
        let data = []
        value1.forEach((item) => {
            let obj = item
            let event_topped = value2.find((topper) => topper.id === item.id)
            if (event_topped) {
                obj["topped"] = event_topped.event_topped
            } else {
                obj["topped"] = 0
            }
            let event_coordinator = value3.find((coordinator) => coordinator.id === item.id)
            if (event_coordinator) {
                obj["coordinated"] = event_coordinator.event_coordinated
            } else {
                obj["coordinated"] = 0
            }
            obj["total"] = obj.mark + (10 * obj.topped) + (10 * obj.coordinated)
            data.push(obj)
        })

        data = data.sort((a, b) => b.total - a.total);

        setRank(data)

    }

    useEffect(() => {
        getData()
    }, [])

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
                                            <th scope="col" class="px-4 py-3.5 text-left text-sm font-semibold text-gray-900">Grand Total</th>
                                        </tr>
                                    </thead>
                                    <tbody class="divide-y divide-gray-200 bg-white">
                                        {rank && rank.map((item) => {
                                            return (
                                                <tr class="divide-x divide-gray-200">
                                                    <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-6">{item.id}</td>
                                                    <td class="whitespace-nowrap p-4 text-sm text-gray-500">{item.name}</td>
                                                    <td class="whitespace-nowrap p-4 text-sm text-gray-500">{item.mark}</td>
                                                    <td class="whitespace-nowrap p-4 text-sm text-gray-500">{item.coordinated}</td>
                                                    <td class="whitespace-nowrap p-4 text-sm text-gray-500">{item.topped}</td>
                                                    <td class="whitespace-nowrap p-4 text-sm text-gray-500">{item.total}</td>
                                                </tr>)
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}