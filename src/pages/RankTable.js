import { useEffect } from "react";
import { useState } from "react";
import Header from "../components/Header";
import RankTableTab from "../components/RankTableTab";
import { sidebar_menu } from "../constants";
import RankEvent from "./RankEvent";
import RankMonth from "./RankMonth";
import RankOverall from "./RankOverall";
import { tabs } from '../constants';


export default function RankTable() {

  const [currentTab, setCurrentTab] = useState("Event")

  useEffect(() => {

  }, [currentTab])

  const onTabChange = (tab) => {
    setCurrentTab(tab)
  }

  const renderRankTable = () => {
    switch (currentTab) {
      case tabs[0].name:
        return <RankEvent />
      case tabs[1].name:
        return <RankMonth />
      case tabs[2].name:
        return <RankOverall />
      default:
        return <></>
    }
  }

  return (
    <main className="flex-1">
      <Header heading={sidebar_menu[6].name} />
      <RankTableTab onTabChange={onTabChange} currentTab={currentTab} />
      {renderRankTable()}
    </main>
  )
}