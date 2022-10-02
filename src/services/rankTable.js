import axios from 'axios';

const baseURL = `https://cts-report-card-backend-production.up.railway.app`

async function getAllEvents() {
    try {
        const {data:response} = await axios.get(`${baseURL}/rank-table/all-events/`)
        return response
      }
      catch (error) {
        console.log(error);
      }
}

async function getEventRank(college_month_event_id) {
    try {
        const {data:response} = await axios.get(`${baseURL}/rank-table/event/?id=${college_month_event_id}`)
        return response
      }
      catch (error) {
        console.log(error);
      }
}

async function getActualTopper(college_month_event_id) {
    try {
        const {data:response} = await axios.get(`${baseURL}/rank-table/event/toppers/actual/?id=${college_month_event_id}`)
        return response
      }
      catch (error) {
        console.log(error);
      }
}

async function getComputedTopper(college_month_event_id) {
    try {
        const {data:response} = await axios.get(`${baseURL}/rank-table/event/toppers/computed/?id=${college_month_event_id}`)
        return response
      }
      catch (error) {
        console.log(error);
      }
}

async function getMonthRank(month_id) {
    try {
        const {data:response} = await axios.get(`${baseURL}/rank-table/month/?id=${month_id}`)
        return response
      }
      catch (error) {
        console.log(error);
      }
}

async function getMonthToppers(month_id) {
    try {
        const {data:response} = await axios.get(`${baseURL}/rank-table/month/toppers/?id=${month_id}`)
        return response
      }
      catch (error) {
        console.log(error);
      }
}

async function getMonthCoordinators(month_id) {
    try {
        const {data:response} = await axios.get(`${baseURL}/rank-table/month/coordinators/?id=${month_id}`)
        return response
      }
      catch (error) {
        console.log(error);
      }
}

async function getMonthStars(month_id, type) {
    try {
        const {data:response} = await axios.get(`${baseURL}/rank-table/month/stars/?id=${month_id}&type=${type}`)
        return response
      }
      catch (error) {
        console.log(error);
      }
}

async function getOverallRank() {
  try {
      const {data:response} = await axios.get(`${baseURL}/rank-table/overall/`)
      return response
    }
    catch (error) {
      console.log(error);
    }
}

async function getOverallToppers() {
  try {
      const {data:response} = await axios.get(`${baseURL}/rank-table/overall/toppers/`)
      return response
    }
    catch (error) {
      console.log(error);
    }
}

async function getOverallCoordinators() {
  try {
      const {data:response} = await axios.get(`${baseURL}/rank-table/overall/coordinators/`)
      return response
    }
    catch (error) {
      console.log(error);
    }
}
export { getAllEvents, getEventRank, getActualTopper, getComputedTopper, 
  getMonthRank, getMonthToppers, getMonthCoordinators, getMonthStars,
getOverallRank, getOverallToppers, getOverallCoordinators }