import axios from 'axios';
const { toast } = require('tailwind-toast')

const baseURL = `https://cts-report-card-backend-production.up.railway.app`


const addEvent = (body) => {
    axios.post(`${baseURL}/event/`, body)
    .then((res) => {
        toast().default('Event Added Successfully','').with({
            shape: 'pill',
            duration: 4000,
            speed: 1000,
            positionX: 'end',
            positionY: 'top',
            color: 'bg-green-800',
            fontColor: 'white',
            fontTone: 200
          }).show()
        console.log(res.data)
    })
}

async function getEvent() {
    try {
        const {data:response} = await axios.get(`${baseURL}/event/`)
        return response
      }
      catch (error) {
        console.log(error);
      }

}

const editEvent = (body) => {
    axios.patch(`${baseURL}/event/${body.id}/`, body)
    .then((res) => {
        console.log(res.data)
        toast().success('Event Edited Successfully','').show()
    })
}

const deleteEvent = (id) => {
    axios.delete(`${baseURL}/event/${id}/`)
    .then((res) => {
        console.log(res.data)
        toast().default('Event Deleted Successfully','').show()
    })
}


export {addEvent, getEvent, editEvent, deleteEvent}