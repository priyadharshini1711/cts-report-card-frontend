
import axios from 'axios';

const baseURL = `https://cts-report-card-backend-production.up.railway.app`


async function getCollegeEvents(college_id, month_id) {
    try {
        const {data:response} = await axios.get(`${baseURL}/data/all/?college_id=${college_id}&month_id=${month_id}`)
        return response
      }
      catch (error) {
        console.log(error);
      }

}

export {getCollegeEvents}