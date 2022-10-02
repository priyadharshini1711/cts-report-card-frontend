import { sidebar_menu } from "../constants";
import Header from '../components/Header.js'
import DashboardLayout from "../components/DashboardLayout";

export default function Dashboard() {
    return (
        <main className="flex-1">
           <Header heading={sidebar_menu[0].name} />
           <DashboardLayout />
           
          </main>
    )
}