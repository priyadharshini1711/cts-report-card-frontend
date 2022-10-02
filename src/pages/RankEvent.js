import DropDown from "../components/DropDown";
import { useEffect, useState } from "react";
import { getAllEvents } from "../services/rankTable";
import RankEventTable from "../components/RankEventTable";



export default function RankEvent() {

  const [event, setEvent] = useState([])

  const [eventId, setEventId] = useState(790)

  async function getData() {
    setEvent(await getAllEvents())
  }

  const onEventSelect = (id) => {
    setEventId(id)
  }

  const getSelectedEvent = () => {
    const eventName = event.find(item => item.id === eventId)
    if (eventName)
      return eventName.name
    else
      return
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div class="">
      <div className="w-full">
        <div className="flex flex-row justify-center gap-x-3 py-3">
          <DropDown title={'Select Event'} options={event} onMenuItemClick={onEventSelect} active={eventId} />
          <div className="mt-1">Event Selected : {getSelectedEvent()}</div>
        </div>
        <RankEventTable college_month_event_id={eventId} />
      </div>
    </div>
  )

}