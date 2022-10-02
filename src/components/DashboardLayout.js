import DashboardEvent from './DashboardEvents'
import DashboardCollegeEvent from './DashboardCollegeEvent'
import DashboardStudent from './DashboardStudent'
import DashboardMonthStar from './DashboardMonthStar'

export default function DashboardLayout() {

    return (
        <div className="px-5 py-5">
            <h3 className="text-lg font-medium leading-6 text-gray-900 pb-3">Events</h3>
            <div className="grid grid-cols-2 gap-4">
                <DashboardEvent />
                <div>
                    <DashboardCollegeEvent />
                </div>
            </div>
            <div className="grid grid-cols-1 gap-4">
                <div>
                    <h3 className="text-lg font-medium leading-6 text-gray-900">Students</h3>
                    <DashboardStudent />
                </div>
            </div>
            <div className="grid grid-cols-1 gap-4 mt-5">
                <h3 className="text-lg font-medium leading-6 text-gray-900">CTS Selected Mentors</h3>
                <DashboardMonthStar />
            </div>
        </div>
    )
}