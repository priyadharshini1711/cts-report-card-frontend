import axios from 'axios';
import { student } from './values';
const { toast } = require('tailwind-toast')

const baseURL = `https://cts-report-card-backend-production.up.railway.app`

const addStudent = (body) => {
    axios.post(`${baseURL}/student/`, body)
    .then((res) => {
        toast().default('Student Added Successfully','').with({
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

async function getStudent() {
    try {
        const {data:response} = await axios.get(`${baseURL}/student/`)
        return response
      }
      catch (error) {
        console.log(error);
      }
      return student.student

}

const editStudent = (body) => {
    axios.patch(`${baseURL}/student/${body.id}/`, body)
    .then((res) => {
        console.log(res.data)
        toast().success('Student Edited Successfully','').show()
    })
}

const deleteStudent = (id) => {
    axios.delete(`${baseURL}/student/${id}/`)
    .then((res) => {
        console.log(res.data)
        toast().default('Student Deleted Successfully','').show()
    })
}


export {addStudent, getStudent, editStudent, deleteStudent}