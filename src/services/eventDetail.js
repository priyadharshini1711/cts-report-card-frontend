import axios from 'axios';
const { toast } = require('tailwind-toast')

const baseURL = `https://cts-report-card-backend-production.up.railway.app`


async function getEventDetail(college_month_event_id) {
    try {
        const {data:response} = await axios.get(`${baseURL}/event-detail/?college_month_event_id=${college_month_event_id}`)
        return response
      }
      catch (error) {
        console.log(error);
      }
}

async function getEventStar(college_month_event_id) {
    try {
        const {data:response} = await axios.get(`${baseURL}/event-detail/event-star/?college_month_event_id=${college_month_event_id}`)
        return response
      }
      catch (error) {
        console.log(error);
      }
}

async function updateEventDetail(body){
  axios.post(`${baseURL}/event-detail/`, body)
    .then((res) => {
        console.log(res.data)
        toast().success('Event Detail Edited Successfully','').show()
    })
}

export {getEventDetail, getEventStar, updateEventDetail}