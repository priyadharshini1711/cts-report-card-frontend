import axios from 'axios';
const { toast } = require('tailwind-toast')

const baseURL = `https://cts-report-card-backend-production.up.railway.app`

const addMonth = (body) => {
    axios.post(`${baseURL}/month/`, body)
    .then((res) => {
        toast().default('Month Added Successfully','').with({
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

async function getMonth() {
    try {
        const {data:response} = await axios.get('${baseURL}/month/')
        return response
      }
      catch (error) {
        console.log(error);
      }

}

const editMonth = (body) => {
    axios.patch(`${baseURL}/month/${body.id}/`, body)
    .then((res) => {
        console.log(res.data)
        toast().success('Month Edited Successfully','').show()
    })
}

const deleteMonth = (id) => {
    axios.delete(`${baseURL}/month/${id}/`)
    .then((res) => {
        console.log(res.data)
        toast().default('Month Deleted Successfully','').show()
    })
}


export {addMonth, getMonth, editMonth, deleteMonth}