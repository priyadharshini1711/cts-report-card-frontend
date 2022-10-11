import axios from 'axios';
import { dashboard } from './values';

let baseURL = `https://cts-report-card-backend-production.up.railway.app`

async function getEventsDashboard() {
  try {
    const { data: response } = await axios.get(`${baseURL}/dashboard/events/`)
    return response
  }
  catch (error) {
    console.log("error", error);
  }
  return dashboard.events
}

async function getRMD() {
  try {
    const { data: response } = await axios.get(`${baseURL}/dashboard/RMD/`)
    return response
  }
  catch (error) {
    console.log(error);
  }
  return dashboard.rmd
}

async function getSCSVMV() {
  try {
    const { data: response } = await axios.get(`${baseURL}/dashboard/SCSVMV/`)
    return response
  }
  catch (error) {
    console.log(error);
  }
  return dashboard.scsvmv
}

async function getVEC() {
  try {
    const { data: response } = await axios.get(`${baseURL}/dashboard/VEC/`)
    return response
  }
  catch (error) {
    console.log(error);
  }
  return dashboard.vec
}

async function getRMKCET() {
  try {
    const { data: response } = await axios.get(`${baseURL}/dashboard/RMKCET/`)
    return response
  }
  catch (error) {
    console.log(error);
  }
  return dashboard.rmkcet
}

async function getSJIT() {
  try {
    const { data: response } = await axios.get(`${baseURL}/dashboard/SJIT/`)
    return response
  }
  catch (error) {
    console.log(error);
  }
  return dashboard.sjit
}

async function getSATHYABAMA() {
  try {
    const { data: response } = await axios.get(`${baseURL}/dashboard/SATHYABAMA/`)
    return response
  }
  catch (error) {
    console.log(error);
  }
  return dashboard.sathyabama
}

async function getRMKEC() {
  try {
    const { data: response } = await axios.get(`${baseURL}/dashboard/RMKEC/`)
    return response
  }
  catch (error) {
    console.log(error);
  }
  return dashboard.rmkec
}

async function getSJCE() {
  try {
    const { data: response } = await axios.get(`${baseURL}/dashboard/SJCE/`)
    return response
  }
  catch (error) {
    console.log(error);
  }
  return dashboard.sjce
}

async function getVIT() {
  try {
    const { data: response } = await axios.get(`${baseURL}/dashboard/VIT/`)
    return response
  }
  catch (error) {
    console.log(error);
  }
  return dashboard.vit
}

async function getMSEC() {
  try {
    const { data: response } = await axios.get(`${baseURL}/dashboard/MSEC/`)
    return response
  }
  catch (error) {
    console.log(error);
  }
  return dashboard.msec
}

async function getSRM() {
  try {
    const { data: response } = await axios.get(`${baseURL}/dashboard/SRM/`)
    return response
  }
  catch (error) {
    console.log(error);
  }
  return dashboard.srm
}

async function getSVCE() {
  try {
    const { data: response } = await axios.get(`${baseURL}/dashboard/SVCE/`)
    return response
  }
  catch (error) {
    console.log(error);
  }
  return dashboard.svce
}

async function getSSN() {
  try {
    const { data: response } = await axios.get(`${baseURL}/dashboard/SSN/`)
    return response
  }
  catch (error) {
    console.log(error);
  }
  return dashboard.ssn
}

async function getVIT_UNIV() {
  try {
    const { data: response } = await axios.get(`${baseURL}/dashboard/VIT_UNIV/`)
    return response
  }
  catch (error) {
    console.log(error);
  }
  return dashboard.vit_univ
}

async function getHighestMark() {
  try {
    const { data: response } = await axios.get(`${baseURL}/dashboard/highest/mark/`)
    return response
  }
  catch (error) {
    console.log(error);
  }
  return dashboard.highestMark
}

async function getHighestCoordinated() {
  try {
    const { data: response } = await axios.get(`${baseURL}/dashboard/highest/coordinated/`)
    return response
  }
  catch (error) {
    console.log(error);
  }
  return dashboard.highestCoordinated
}

async function getHighestTopped() {
  try {
    const { data: response } = await axios.get(`${baseURL}/dashboard/highest/topped/`)
    return response
  }
  catch (error) {
    console.log(error);
  }
  return dashboard.highestTopped
}

async function getHighestNominated() {
  try {
    const { data: response } = await axios.get(`${baseURL}/dashboard/highest/nominated/`)
    return response
  }
  catch (error) {
    console.log(error);
  }
  return dashboard.highestNominated
}

async function getMonthStar() {
  try {
    const { data: response } = await axios.get(`${baseURL}/dashboard/month-star/`)
    return response
  }
  catch (error) {
    console.log(error);
  }
  return dashboard.monthStar
}

export {
  getEventsDashboard,
  getRMD, getSCSVMV, getVEC, getRMKCET, getSJIT, getSATHYABAMA, getRMKEC,
  getSJCE, getVIT, getMSEC, getSRM, getSVCE, getSSN, getVIT_UNIV,
  getHighestMark, getHighestCoordinated, getHighestTopped, getHighestNominated, getMonthStar
}