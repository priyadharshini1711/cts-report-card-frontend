import axios from 'axios';
const { toast } = require('tailwind-toast')

const baseURL = `https://cts-report-card-backend-production.up.railway.app`

const addCollege = (body) => {
    axios.post(`${baseURL}/college/`, body)
    .then((res) => {
        toast().default('College Added Successfully','').with({
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

async function getCollege() {
    try {
        const {data:response} = await axios.get(`${baseURL}/college/`)
        return response
      }
      catch (error) {
        console.log(error);
      }

}

const editCollege = (body) => {
    axios.patch(`${baseURL}/college/${body.id}/`, body)
    .then((res) => {
        console.log(res.data)
        toast().success('College Edited Successfully','').show()
    })
}

const deleteCollege = (id) => {
    axios.delete(`${baseURL}/college/${id}/`)
    .then((res) => {
        console.log(res.data)
        toast().default('College Deleted Successfully','').show()
    })
}


export { addCollege, getCollege, editCollege, deleteCollege}