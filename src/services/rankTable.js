import axios from 'axios';
import { rankTable } from './values';

const baseURL = `https://cts-report-card-backend-production.up.railway.app`

async function getAllEvents() {
  try {
    const { data: response } = await axios.get(`${baseURL}/rank-table/all-events/`)
    return response
  }
  catch (error) {
    console.log(error);
  }
  return rankTable.allEvents
}

async function getEventRank(college_month_event_id) {
  try {
    const { data: response } = await axios.get(`${baseURL}/rank-table/event/?id=${college_month_event_id}`)
    return response
  }
  catch (error) {
    console.log(error);
  }
  return rankTable.rankTableEvent790
}

async function getActualTopper(college_month_event_id) {
  try {
    const { data: response } = await axios.get(`${baseURL}/rank-table/event/toppers/actual/?id=${college_month_event_id}`)
    return response
  }
  catch (error) {
    console.log(error);
  }
  return rankTable.eventTopper
}

async function getComputedTopper(college_month_event_id) {
  try {
    const { data: response } = await axios.get(`${baseURL}/rank-table/event/toppers/computed/?id=${college_month_event_id}`)
    return response
  }
  catch (error) {
    console.log(error);
  }
  return rankTable.computedEventToper
}

async function getMonthRank(month_id) {
  try {
    const { data: response } = await axios.get(`${baseURL}/rank-table/month/?id=${month_id}`)
    return response
  }
  catch (error) {
    console.log(error);
  }
  return rankTable.rankTableMonth1
}

async function getMonthToppers(month_id) {
  try {
    const { data: response } = await axios.get(`${baseURL}/rank-table/month/toppers/?id=${month_id}`)
    return response
  }
  catch (error) {
    console.log(error);
  }
  return rankTable.monthToppers
}

async function getMonthCoordinators(month_id) {
  try {
    const { data: response } = await axios.get(`${baseURL}/rank-table/month/coordinators/?id=${month_id}`)
    return response
  }
  catch (error) {
    console.log(error);
  }
  return rankTable.monthCoordinators
}

async function getMonthStars(month_id, type) {
  try {
    const { data: response } = await axios.get(`${baseURL}/rank-table/month/stars/?id=${month_id}&type=${type}`)
    return response
  }
  catch (error) {
    console.log(error);
  }
  return rankTable.actualMonthToppers
}

async function getOverallRank() {
  try {
    const { data: response } = await axios.get(`${baseURL}/rank-table/overall/`)
    return response
  }
  catch (error) {
    console.log(error);
  }
  return rankTable.rankTableoverall
}

async function getOverallToppers() {
  try {
    const { data: response } = await axios.get(`${baseURL}/rank-table/overall/toppers/`)
    return response
  }
  catch (error) {
    console.log(error);
  }
  return rankTable.rankTableToppers
}

async function getOverallCoordinators() {
  try {
    const { data: response } = await axios.get(`${baseURL}/rank-table/overall/coordinators/`)
    return response
  }
  catch (error) {
    console.log(error);
  }
  return rankTable.rankTableCoordinators
}

export {
  getAllEvents, getEventRank, getActualTopper, getComputedTopper,
  getMonthRank, getMonthToppers, getMonthCoordinators, getMonthStars,
  getOverallRank, getOverallToppers, getOverallCoordinators
}