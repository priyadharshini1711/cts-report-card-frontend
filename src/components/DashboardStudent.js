import {
    MenuIcon,
} from '@heroicons/react/outline'

import { useEffect, useState } from "react";
import { getHighestCoordinated, getHighestMark, getHighestNominated, getHighestTopped } from '../services/dashboard';


export default function DashboardStudent() {

    const [studentMark, setStudentMark] = useState([])

    const [studentCoordinated, setStudentCoordinated] = useState([])

    const [studentTopped, setStudentTopped] = useState([])

    const [studentNominated, setStudentNominated] = useState([])

    async function getData() {
        setStudentMark(await getHighestMark())
        setStudentCoordinated(await getHighestCoordinated())
        setStudentTopped(await getHighestTopped())
        setStudentNominated(await getHighestNominated())
    }

    useEffect(() => {
        getData()
    }, [])

    const students = [
        { name: 'Highest Marks', student: studentMark, previousStat: '70,946', change: '12%', changeType: 'increase' },
        { name: 'Highest Coordinated', student: studentCoordinated, previousStat: '56.14%', change: '2.02%', changeType: 'increase' },
        { name: 'Highest Topped', student: studentTopped, previousStat: '28.62%', change: '4.05%', changeType: 'increase' },
        { name: 'Highest Nominated', student: studentNominated, previousStat: '28.62%', change: '4.05%', changeType: 'increase' },
    ]

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    return (
        <dl className="mt-5 grid grid-cols-1 divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow md:grid-cols-4 md:divide-y-0 md:divide-x">
            {students.map((item) => (
                <div key={item.name} className="px-4 py-5 sm:p-6">
                    <dt className="text-base font-semibold text-gray-900">{item.name}</dt>
                    {item.student && item.student.map((student) => {
                        return (
                            <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
                                <div className="flex items-baseline text-xl font-semibold text-indigo-600">
                                    {student.name}
                                </div>

                                <div
                                    className={classNames(
                                        item.changeType === 'increase' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800',
                                        'inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium md:mt-2 lg:mt-0'
                                    )}
                                >
                                    {item.changeType === 'increase' ? (
                                        <MenuIcon
                                            className="-ml-1 mr-0.5 h-5 w-5 flex-shrink-0 self-center text-green-500"
                                            aria-hidden="true"
                                        />
                                    ) : (
                                        <MenuIcon
                                            className="-ml-1 mr-0.5 h-5 w-5 flex-shrink-0 self-center text-red-500"
                                            aria-hidden="true"
                                        />
                                    )}

                                    <span className="sr-only"> {item.changeType === 'increase' ? 'Increased' : 'Decreased'} by </span>
                                    {student.value}
                                </div>
                            </dd>
                        )
                    })}

                </div>
            ))}
        </dl>

    )
}