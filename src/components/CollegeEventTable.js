export default function CollegeEventTable({ collegeMonthEventId, eventDetail, eventStar, students }) {

  const getValue = (key, value) => {
    if (value !== null && value !== undefined) {
      if (key === 'mode') {
        return value === 10 ? "Offline" : "Online"
      }
      if (key === 'date') {
        let date = new Date(value)
        return date.toLocaleDateString('en-GB')
      }
      if (key === 'event_coordinators' || key === 'event_star') {
        let names = []
        value.forEach((item) => {
          names.push(item.label)
        })
        return names.join(", ")
      }
      return value.toString()
    } else {
      return ""
    }
  }

  const getKey = (key) => {
    return key.split("_").join(" ").toUpperCase()

  }

  const getEventStudents = (status) => {
    let ids = []
    if(eventStar)
    {
      ids = eventStar.filter((item) => item.type === status)
    }
    let value = ""
    if(ids){
      ids.forEach((item) => {
        value += item.student_name + ","
      })
    }
    return value.slice(0, -1);
  }

  return (
    <div className="border-2 border-t border-gray-200">
      <dl className="divide-y divide-gray-200">
        {/* {collegeMonthEventId} */}
        {eventDetail && Object.keys(eventDetail).map((key) => {
          return (<div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
            <dt className="text-sm font-medium text-gray-500">{getKey(key)}</dt>
            <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {getValue(key, eventDetail[key])}
            </dd>
          </div>)

        })

        }
        {eventDetail && <><div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
          <dt className="text-sm font-medium text-gray-500">EVENT COORDINATORS</dt>
          <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            {getEventStudents(10)}
          </dd>
        </div><div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
            <dt className="text-sm font-medium text-gray-500">EVENT STARS</dt>
            <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {getEventStudents(20)}
            </dd>
          </div></>}


      </dl>
    </div>
  )
}
