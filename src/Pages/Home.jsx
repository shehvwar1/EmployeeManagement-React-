import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from 'axios'

export default function Home() {

  const[employee, setEmployees] = useState([])
  const navigate = useNavigate();
//same as component did mount
  useEffect(() =>{
    console.log("first")
    loadEmployees();
  },[]);//if we dont give empty array it will goto infinite loop

  const loadEmployees = async() =>{
    const result =await axios.get("http://localhost:8080/employees");
    console.log(result.data);
    setEmployees(result.data);
  }
//   const LoadEdit = (employeeId) => {
//     navigate("/updateRecord" +"/" +  employeeId);
// }
const updateEdit = (employeeId) => {
  navigate("/updateEmployee" +"/" +  employeeId);
}
const viewEmployee = (employeeId) => {
  navigate("viewEmployee" + "/" + employeeId)
}
const Removefunction = (employeeId) => {
  if (window.confirm('Do you want to remove?')) {
      fetch("http://localhost:8080/deletedById/" + employeeId, {
          method: "DELETE"
      }).then((res) => {
          // alert('Removed successfully.')
          window.location.reload();
      }).catch((err) => {
          console.log(err.message)
      })
  }
}
  return (
    <div>
      <div className="container">
         <div className='py-4'>
         <table className="table border shadow">
  <thead>
    <tr>
      <th scope="col">Employee Id</th>
      <th scope="col">Employee Name</th>
      <th scope="col">Salary</th>
      <th scope="col">Joining Date</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    {
    employee.map((employee, index)=>(
      <tr>
      {/* <th scope="row" key={index}>{index+1}</th> */}
      <td >{employee.employeeId}</td>
      <td >{employee.employeeName}</td>
      <td >{employee.salary}</td>
      <td >{employee.joiningDate}</td>
      <td>
      {/* <button onClick={() => { LoadEdit(employee.employeeId) }} className="btn btn-success">Edit</button> */}
      <button onClick={() => { updateEdit(employee.employeeId) }} className="btn btn-success">Update</button>
      <button style={{marginLeft: "10px"}} onClick={ () => {Removefunction(employee.employeeId)}} className="btn btn-danger">Delete </button>
        <button className='btn btn-info mx-2' onClick={ () => {viewEmployee(employee.employeeId)}}>View</button>
      </td>
    </tr>
    ))
    }
   
  </tbody>
</table>
         </div>
      </div>
    </div>
  )
}
