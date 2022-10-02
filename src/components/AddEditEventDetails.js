/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import { useFormik } from 'formik'
import ReactSelect from 'react-select'
import { OptionComponent } from './Option'
import { updateEventDetail } from '../services/eventDetail'


export default function AddEditEventDetails({ toggleAddEditModal, initialValues, students }) {

  const eventModes = [
    { mode: 10, title: 'Offline' },
    { mode: 20, title: 'Online' },
  ]

  const [eventCoordinators, setEventCoordinators] = useState([])
  const [bestPerfomers, setBestPerfomers] = useState([])

  const onBestPerformerSelect = (selected) => {
    setBestPerfomers(selected)
  }

  const onEventCoordintorSelect = (selected) => {
    setEventCoordinators(selected)
  }

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: values => {
      if(values.mode === eventModes[0].title)
      values.mode = 10
      else
      values.mode= 20
      let event_star = []
      eventCoordinators.forEach((item) => {
        event_star.push([values.college_month_event_id, item.value, 10])
      })
      bestPerfomers.forEach((item) => {
        event_star.push([values.college_month_event_id, item.value, 20])
      })
      values["event_star"] = event_star
      alert(JSON.stringify(values, null, 2));
      updateEventDetail(values)
      toggleAddEditModal()
      window.location.reload()
    },
  });

  const handleRadioButtons = e => formik.values.mode = e.target.value


  return (
    <Transition.Root show as={Fragment}>
      <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" onClose={toggleAddEditModal}>
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="relative inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full sm:p-6 overflow-y-auto event-details-modal-height">
              <div className="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
                <button
                  type="button"
                  className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={toggleAddEditModal}
                >
                  <span className="sr-only">Close</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              <form onSubmit={formik.handleSubmit}>
                <div className='flex flex-col'>
                  <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4  sm:border-gray-200 sm:pt-5">
                    <label htmlFor="college_month_event_id">College Month Event Id</label>
                    <input
                      id="college_month_event_id"
                      name="college_month_event_id"
                      type="text"
                      onChange={formik.handleChange}
                      value={formik.values.college_month_event_id}
                      disabled
                      className='input'
                    />
                  </div>
                  <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4  sm:border-gray-200 sm:pt-5">
                    <label htmlFor="event_name">Event Name</label>
                    <input
                      id="event_name"
                      name="event_name"
                      type="text"
                      onChange={formik.handleChange}
                      value={formik.values.event_name}
                      disabled
                      className='input'
                    />
                  </div>
                  <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4  sm:border-gray-200 sm:pt-5">
                    <label htmlFor="objective">Objective</label>
                    <input
                      id="objective"
                      name="objective"
                      type="text"
                      onChange={formik.handleChange}
                      value={formik.values.objective}
                      className='input'
                    />
                  </div>
                  <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4  sm:border-gray-200 sm:pt-5">
                    <label htmlFor="description">Description</label>
                    <input
                      id="description"
                      name="description"
                      type="text"
                      onChange={formik.handleChange}
                      value={formik.values.description}
                      className='input'
                    />
                  </div>
                  <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4  sm:border-gray-200 sm:pt-5">
                    <label htmlFor="place">Venue / Link</label>
                    <input
                      id="place"
                      name="place"
                      type="text"
                      onChange={formik.handleChange}
                      value={formik.values.place}
                      className='input'
                    />
                  </div>
                  <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4  sm:border-gray-200 sm:pt-5">
                    <label htmlFor="date">Date</label>
                    <input
                      id="date"
                      name="date"
                      type="date"
                      onChange={formik.handleChange}
                      value={formik.values.date}
                      className='input'
                    />
                  </div>
                  <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4  sm:border-gray-200 sm:pt-5">
                    <label htmlFor="mode">Mode</label>
                    <div className='flex flex-row input'>
                      <div>
                        <input
                          type="radio"
                          id="offline"
                          name="mode"
                          value="Offline"
                          onChange={e => handleRadioButtons(e)}
                        />
                        <label htmlFor="one">Offline</label>
                        <br />
                      </div>
                      <div className='ml-5'>
                        <input
                          type="radio"
                          id="online"
                          name="mode"
                          value="Online"
                          onChange={e => handleRadioButtons(e)}
                        />
                        <label htmlFor="two">Online</label>
                      </div>
                    </div>

                  </div>
                  <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4  sm:border-gray-200 sm:pt-5">
                    <label>Event Coordinators *</label>
                    <ReactSelect
                      options={students}
                      isMulti
                      closeMenuOnSelect={false}
                      hideSelectedOptions={false}
                      components={{
                        OptionComponent
                      }}
                      onChange={onEventCoordintorSelect}
                      allowSelectAll={true}
                    />
                  </div>
                  <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4  sm:border-gray-200 sm:pt-5">
                    <label aria-required>Best Performer *</label>
                    <ReactSelect
                      options={students}
                      isMulti
                      closeMenuOnSelect={false}
                      hideSelectedOptions={false}
                      components={{
                        OptionComponent
                      }}
                      onChange={onBestPerformerSelect}
                      allowSelectAll={true}
                      
                    />
                  </div>
                </div>

                <div className="flex justify-end">
                  <button
                    type="button"
                    className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    onClick={toggleAddEditModal}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Save
                  </button>
                </div>

              </form>

            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
