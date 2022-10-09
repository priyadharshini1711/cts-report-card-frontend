import { HomeIcon, UsersIcon, AcademicCapIcon, CalendarIcon, ViewBoardsIcon, TableIcon, ViewListIcon } from "@heroicons/react/outline";

export const sidebar_menu = [
    { name: 'Dashboard', href: 'https://cts-report-card.netlify.app/dashboard', icon: HomeIcon, current: true },
    { name: 'Students', href: 'https://cts-report-card.netlify.app/student', icon: UsersIcon, current: false },
    { name: 'Colleges', href: 'https://cts-report-card.netlify.app/college', icon: AcademicCapIcon, current: false },    
    { name: 'Months', href: 'https://cts-report-card.netlify.app/month', icon: ViewBoardsIcon, current: false },
    { name: 'Events', href: 'https://cts-report-card.netlify.app/event', icon: CalendarIcon, current: false },
    { name: 'College Events', href: 'https://cts-report-card.netlify.app/college-events', icon: ViewListIcon, current: false },
    { name: 'Rank Table', href: 'https://cts-report-card.netlify.app/rank_table', icon: TableIcon, current: false },
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