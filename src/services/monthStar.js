

import axios from 'axios';
const { toast } = require('tailwind-toast')

const baseURL = `https://cts-report-card-backend-production.up.railway.app`

async function updateMonthStars(month_id, body){
    axios.post(`${baseURL}/month-star/?month_id=${month_id}`, body)
      .then((res) => {
          console.log(res.data)
          toast().success('Event Detail Edited Successfully','').show()
      })
  }

  async function getMonthStars() {
    try {
        const {data:response} = await axios.get(`${baseURL}/month-star/`)
        return response
      }
      catch (error) {
        console.log(error);
      }
}
  export {updateMonthStars, getMonthStars}