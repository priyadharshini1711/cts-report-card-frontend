
import axios from 'axios';
import { college_events } from './values';

const baseURL = `https://cts-report-card-backend-production.up.railway.app`


async function getCollegeEvents(college_id, month_id) {
    try {
        const {data:response} = await axios.get(`${baseURL}/data/all/?college_id=${college_id}&month_id=${month_id}`)
        return response
      }
      catch (error) {
        console.log(error);
      }
      return college_events.events

}

export {getCollegeEvents}