import axios from 'axios';

const baseURL = `https://cts-report-card-backend-production.up.railway.app`

async function getEventsDashboard() {
  try {
    const { data: response } = await axios.get(`${baseURL}/dashboard/events/`)
    return response
  }
  catch (error) {
    console.log(error);
  }
}

async function getRMD() {
  try {
    const { data: response } = await axios.get(`${baseURL}/dashboard/RMD/`)
    return response
  }
  catch (error) {
    console.log(error);
  }
}

async function getSCSVMV() {
  try {
    const { data: response } = await axios.get(`${baseURL}/dashboard/SCSVMV/`)
    return response
  }
  catch (error) {
    console.log(error);
  }
}

async function getVEC() {
  try {
    const { data: response } = await axios.get(`${baseURL}/dashboard/VEC/`)
    return response
  }
  catch (error) {
    console.log(error);
  }
}

async function getRMKCET() {
  try {
    const { data: response } = await axios.get(`${baseURL}/dashboard/RMKCET/`)
    return response
  }
  catch (error) {
    console.log(error);
  }
}

async function getSJIT() {
  try {
    const { data: response } = await axios.get(`${baseURL}/dashboard/SJIT/`)
    return response
  }
  catch (error) {
    console.log(error);
  }
}

async function getSATHYABAMA() {
  try {
    const { data: response } = await axios.get(`${baseURL}/dashboard/SATHYABAMA/`)
    return response
  }
  catch (error) {
    console.log(error);
  }
}

async function getRMKEC() {
  try {
    const { data: response } = await axios.get(`${baseURL}/dashboard/RMKEC/`)
    return response
  }
  catch (error) {
    console.log(error);
  }
}

async function getSJCE() {
  try {
    const { data: response } = await axios.get(`${baseURL}/dashboard/SJCE/`)
    return response
  }
  catch (error) {
    console.log(error);
  }
}

async function getVIT() {
  try {
    const { data: response } = await axios.get(`${baseURL}/dashboard/VIT/`)
    return response
  }
  catch (error) {
    console.log(error);
  }
}

async function getMSEC() {
  try {
    const { data: response } = await axios.get(`${baseURL}/dashboard/MSEC/`)
    return response
  }
  catch (error) {
    console.log(error);
  }
}

async function getSRM() {
  try {
    const { data: response } = await axios.get(`${baseURL}/dashboard/SRM/`)
    return response
  }
  catch (error) {
    console.log(error);
  }
}

async function getSVCE() {
  try {
    const { data: response } = await axios.get(`${baseURL}/dashboard/SVCE/`)
    return response
  }
  catch (error) {
    console.log(error);
  }
}

async function getSSN() {
  try {
    const { data: response } = await axios.get(`${baseURL}/dashboard/SSN/`)
    return response
  }
  catch (error) {
    console.log(error);
  }
}

async function getVIT_UNIV() {
  try {
    const { data: response } = await axios.get(`${baseURL}/dashboard/VIT_UNIV/`)
    return response
  }
  catch (error) {
    console.log(error);
  }
}

async function getHighestMark() {
  try {
    const { data: response } = await axios.get(`${baseURL}/dashboard/highest/mark/`)
    console.log("calling api")
    return response
  }
  catch (error) {
    console.log(error);
  }
}

async function getHighestCoordinated() {
  try {
    const { data: response } = await axios.get(`${baseURL}/dashboard/highest/coordinated/`)
    return response
  }
  catch (error) {
    console.log(error);
  }
}

async function getHighestTopped() {
  try {
    const { data: response } = await axios.get(`${baseURL}/dashboard/highest/topped/`)
    return response
  }
  catch (error) {
    console.log(error);
  }
}

async function getHighestNominated() {
  try {
    const { data: response } = await axios.get(`${baseURL}/dashboard/highest/nominated/`)
    return response
  }
  catch (error) {
    console.log(error);
  }
}

async function getMonthStar() {
  try {
    const { data: response } = await axios.get(`${baseURL}/dashboard/month-star/`)
    return response
  }
  catch (error) {
    console.log(error);
  }
}

export {
  getEventsDashboard,
  getRMD, getSCSVMV, getVEC, getRMKCET, getSJIT, getSATHYABAMA, getRMKEC,
  getSJCE, getVIT, getMSEC, getSRM, getSVCE, getSSN, getVIT_UNIV,
  getHighestMark, getHighestCoordinated, getHighestTopped, getHighestNominated, getMonthStar
}