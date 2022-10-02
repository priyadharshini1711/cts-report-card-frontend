/* This example requires Tailwind CSS v2.0+ */
import { useEffect, useState } from 'react'
import { getEventDetail, getEventStar } from '../services/eventDetail'
import { getStudent } from '../services/student'
import AddEditEventDetails from './AddEditEventDetails'
import CollegeEventTable from './CollegeEventTable'

export default function CollegeEventDetail({ collegeMonthEventId }) {

  const [eventDetail, setEventDetail] = useState([])
  const [eventStar, setEventStar] = useState()
  const [intialValues, setInitialValues] = useState({})
  const [open, setOpen] = useState(false)
  const [studentOptions, setStudentOptions] = useState([])
  const [student, setStudent] = useState([])



  useEffect(() => {
    (async () => {
      setEventDetail(await getEventDetail(collegeMonthEventId))
      setEventStar(await getEventStar(collegeMonthEventId))
      setStudent(await getStudent())
      let list = []
      student.forEach((item) => {
        list.push({ "value": item.id, "label": item.name })
      })
      setStudentOptions(list)
    })()
  }, [collegeMonthEventId])

  const toggleAddEditModal = () => {
    setOpen(!open)
  }

  const onEditClick = () => {
    setInitialValues({
      "college_month_event_id": eventDetail[0].college_month_event_id,
      "event_name": eventDetail[0].event_name,
      "objective": eventDetail[0].objective,
      "description": eventDetail[0].description,
      "place": eventDetail[0].place,
      "mode": eventDetail[0].mode,
      "date": eventDetail[0].date,
      // "event_stars": eventDetail[0].event_stars ? eventDetail[0].event_stars : []
    })
    toggleAddEditModal()
  }


  return (
    <div className='px-5'>
      {open && <AddEditEventDetails toggleAddEditModal={toggleAddEditModal} initialValues={intialValues} students={studentOptions} />}

      <div className='flex my-3 justify-end'>
        <button
          type="button"
          className="relative inline-flex px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mr-3"
          onClick={() => onEditClick()}
        >
          Edit
        </button>
      </div>
      <CollegeEventTable collegeMonthEventId={collegeMonthEventId} eventDetail={eventDetail[0]} eventStar={eventStar} students={studentOptions}/>
    </div>
  )
}
