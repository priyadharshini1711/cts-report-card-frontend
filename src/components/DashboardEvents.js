import { useEffect, useState } from "react";
import { getEventsDashboard } from "../services/dashboard";

export default function DashboardEvent() {

    const [events, setEvents] = useState([])

    async function getData() {
        let value1 = await getEventsDashboard()

        setEvents(value1[0])

    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <div key="total_events" className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
                        <dt className="truncate text-sm font-medium text-gray-500">Total Events</dt>
                        <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">{events && events.overall_events}</dd>
                    </div>
                </div>
                <div>
                    <div key="total_events" className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
                        <dt className="truncate text-sm font-medium text-gray-500">Total Unique Events</dt>
                        <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">{events && events.unique_events}</dd>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-5">
                <div>
                    <div key="total_events" className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
                        <dt className="truncate text-sm font-medium text-gray-500">Online Events</dt>
                        <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">{events && events.online_events}</dd>
                    </div>
                </div>
                <div>
                    <div key="total_events" className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
                        <dt className="truncate text-sm font-medium text-gray-500">Offline Events</dt>
                        <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">{events && events.offline_events}</dd>
                    </div>
                </div>
            </div>
        </div>
    )
}