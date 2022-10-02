
  export default function CollegeEventSidebar({eventList, onEventItemClick}) {
    return (
      <ul className="divide-y divide-gray-200">
        {eventList.length !== 0 && eventList.map((item, index) => (
          <button key={item.email} className={index === 0 ? "w-full py-4 flex" : "w-full py-4 flex boder-b"} onClick={() => {onEventItemClick(item.id)}}>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">{item.name}</p>
            </div>
          </button>
        ))}
      </ul>
    )
  }
  