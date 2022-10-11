import { HomeIcon, UsersIcon, AcademicCapIcon, CalendarIcon, ViewBoardsIcon, TableIcon, ViewListIcon } from "@heroicons/react/outline";

export const sidebar_menu = [
    { name: 'Dashboard', href: '/', icon: HomeIcon, current: true },
    { name: 'Students', href: '/student', icon: UsersIcon, current: false },
    { name: 'Colleges', href: '/college', icon: AcademicCapIcon, current: false },    
    { name: 'Months', href: '/month', icon: ViewBoardsIcon, current: false },
    { name: 'Events', href: '/event', icon: CalendarIcon, current: false },
    { name: 'College Events', href: '/college-events', icon: ViewListIcon, current: false },
    { name: 'Rank Table', href: '/rank_table', icon: TableIcon, current: false },
]

export const MODE = {
    CREATE: 'create',
    EDIT: 'edit'
}

export const tabs = [
    { name: 'Event'},
    { name: 'Month'},
    { name: 'Overall'},
  ]