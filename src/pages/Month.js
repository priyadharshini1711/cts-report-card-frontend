import { useEffect, useState } from "react";
import AddEditMonth from "../components/AddEditMonth";
import AddEditMonthStar from "../components/AddEditMonthStar";
import Header from "../components/Header";
import { MODE, sidebar_menu } from "../constants";
import { getMonth, deleteMonth } from "../services/month";
import { getMonthStars } from "../services/monthStar";



export default function Month() {
  const[open ,setOpen] = useState(false)
  const[openStar ,setOpenStar] = useState(false)
  const[month, setMonth] = useState([])
  const[initialValues, setInitialValues] = useState({"name": '', "key": ''})
  const[mode, setMode] = useState(MODE.CREATE)
  const [openToast, setOpenToast] = useState(false)
  const [monthID, setMonthId] = useState(-1)
  const [stars, setStars] = useState([])



  const toggleAddEditModal = () => {
    setOpen(!open)
  }

  const toggleAddEditStarModal = () => {
    setOpenStar(!openStar)
  }

  const toggleToast = () => {
    setOpenToast(!openToast)
  }

  const onAddClick = () => {
    setInitialValues({"name": "", "key": ""})
    setMode(MODE.CREATE)
    toggleAddEditModal()
    toggleToast()
  }

  const onAddStarClick = (id) => {
    setMonthId(id)
    toggleAddEditStarModal()
  }

  const onEditClick = (id) => {
    const monthInfo = month.find((item) => item.id === id)
    setInitialValues({"id": monthInfo.id ,"name": monthInfo.name, "key": monthInfo.key})
    setMode(MODE.EDIT)
    toggleAddEditModal()
    toggleToast()

  }
  
  const onDeleteClick = (id) => {
    deleteMonth(id)
    toggleToast()
    window.location.reload(false)
  }

  useEffect(() => {
    (async () => {
      setMonth(await getMonth())
      setStars(await getMonthStars())
    })()
  }, [])

  const getVecStar = (month_id) => {
    let result = ""
    stars.forEach((item) => {
      if(item.month_id === month_id && item.selected_by === 10){
        result += item.name + ", "
      }
    })
    return result.slice(0,-1)
  }

  const getCtsStar = (month_id) => {
    let result = ""
    stars.forEach((item) => {
      if(item.month_id === month_id && item.selected_by === 20){
        result += item.name + ", "
      }
    })
    if (result.length === 0)
    return "-"
    return result.slice(0,-1)
  }


  
  return (
    <main className="flex-1">
      <div className="">
        <Header heading={sidebar_menu[3].name} />
      </div>
      
      {open && <AddEditMonth toggleAddEditModal={toggleAddEditModal} mode={mode} initialValues={initialValues}/>}
      {openStar && <AddEditMonthStar toggleAddEditModal={toggleAddEditStarModal} month_id = {monthID} />}

      <div className="px-4 sm:px-6 lg:px-8">
            <div className="mt-4 sm:flex sm:items-center">
              <div className="sm:flex-auto">
              </div>
              <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
                  onClick={onAddClick}        
                  >
                  Add Month
                </button>
              </div>
            </div>
            <div className="mt-8 flex flex-col">
              <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                  <div className="shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-300">
                      <thead className="bg-gray-50">
                        <tr>
                          <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                            Name
                          </th>
                          <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                            Action
                          </th>
                          <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                            VEC Stars
                          </th>
                          <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                            CTS Stars
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 bg-white overflow-y-scroll">
                        {month.map((item) => (
                          <tr key={item.id}>
                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                              {item.name}
                            </td>
                            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-sm font-medium sm:pr-6">
                              <button type="button" onClick={() => onEditClick(item.id)} className="text-indigo-600 hover:text-indigo-900">
                                Edit
                              </button>
                              <button type="button" onClick={() => onDeleteClick(item.id)} className="pl-3 text-red-600 hover:text-red-900">
                                Delete
                              </button>
                              <button type="button" onClick={() => onAddStarClick(item.id)} className="pl-3 text-green-600 hover:text-green-900">
                                Add Star
                              </button>
                            </td>
                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                              {getVecStar(item.id)}
                            </td>
                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                              {getCtsStar(item.id)}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
                
    </main>
    )
}