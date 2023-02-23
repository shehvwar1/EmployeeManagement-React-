import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
export default function AddEmployee() {

//     let navigate = useNavigate();
// //storing data 
// const [employee, setEmployee] = useState({
//     // employeeId:"",
//     // employeeName:"",
//     // salary:"",
//     // joiningDate:""
//     employeeId: "",
//     employeeName: "",
//     salary: "",
//     joiningDate:""

// });
// const { employeeId, employeeName, salary, joiningDate } = employee;
// // const {employeeId, employeeName, salary, joiningDate} = employee


// const onInputChange =(e) =>{
//     //the below spread operator keeps on adding the new object
//  setEmployee({...employee,[e.target.employeeId]: e.target.value})
//     // setEmployee({...employee,[e.target.name]: e.target.value})
//     setEmployee({[e.target.employeeId]: e.target.value });
//    setEmployee({[e.target.employeeName]: e.target.value });
//    setEmployee({[e.target.salary]: e.target.value });
//    setEmployee({[e.target.joiningDate]: e.target.value });
// };

// const  onSubmit = async (e) =>{
//     e.preventDefault();
//     await axios.post("http://localhost:8080/addEmployee", employee)
//     navigate("/")
// alert("form submitted")
// }
const[employeeId,employeeIdchange]=useState("");
const[employeeName,employeeNamechange]=useState("");
const[salary,salarychange]=useState("");
const[joiningDate,joiningDatechange]=useState("");
// const[active,activechange]=useState(true);
// const[validation,valchange]=useState(false);
let navigate = useNavigate();
const handlesubmit=async (e)=>{
  e.preventDefault();
  const empdata={employeeId,employeeName,salary,joiningDate};
  
  // await axios.post("http://localhost:8080/addEmployee", empdata);
  fetch("http://localhost:8080/addEmployee",{
    method:"POST",
    headers:{"content-type":"application/json"},
    body:JSON.stringify(empdata)
  }).then((res)=>{
    alert('Saved successfully.')
    navigate('/');
  }).catch((err)=>{
    console.log(err.message)
  })
}

// const [user, setUser] = useState({
//     employeeId:"",
//     employeeName: "",
//     salary: "",
//   joiningDate: "",
// });

// const { employeeId, employeeName, salary, joiningDate} = user;

// const onInputChange = (e) => {
//   setUser({ ...user, [e.target.employeeId]: e.target.value });
// };

// const onSubmit = async (e) => {
//   e.preventDefault();
//   await axios.post("http://localhost:8080/addEmployee", user);
//   navigate("/");
// };
  return (
    <div>

    <div className="row">
        <div className="offset-lg-3 col-lg-6">
            <form className="container" onSubmit={handlesubmit}>

                <div className="card" style={{"textAlign":"left"}}>
                    <div className="card-title">
                        <h2>Employee Create</h2>
                    </div>
                    <div className="card-body">

                        <div className="row">

                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label>Employee ID</label>
                                    <input value={employeeId}  onChange={e=>employeeIdchange(e.target.value)} className="form-control" ></input>
                                    {/* {employeeId.length==0 && validation && <span className="text-danger">Enter the name</span>} */}
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label >Employee Name</label>
                                    <input value={employeeName}  onChange={e=>employeeNamechange(e.target.value)} className="form-control"></input>
                                {/* {employeeName.length==0 && validation && <span className="text-danger">Enter the name</span>} */}
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label>Salary</label>
                                    <input value={salary} onChange={e=>salarychange(e.target.value)} className="form-control"></input>
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label>Joining Date</label>
                                    <input value={joiningDate} onChange={e=>joiningDatechange(e.target.value)} className="form-control"></input>
                                </div>
                            </div>

                            {/* <div className="col-lg-12">
                                <div className="form-check">
                                <input checked={active} onChange={e=>activechange(e.target.checked)} type="checkbox" className="form-check-input"></input>
                                    <label  className="form-check-label">Is Active</label>
                                    
                                </div> */}
                            {/* </div> */}
                            <div className="col-lg-12">
                                <div className="form-group">
                                   <button className="btn btn-success" type="submit">Save</button>
                                   <Link to="/" className="btn btn-danger mx-2">Back</Link>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

            </form>

        </div>
    </div>
</div>
  )
}
