import React from 'react'
import { useParams } from 'react-router-dom'
import { Link, useNavigate } from "react-router-dom";


import { useEffect, useState } from "react";

export default function EditEmployee() {
    const {employeeId} = useParams;
    console.log(employeeId)
    useEffect(() => {
        fetch("http://localhost:8080/employeeById/employeeId" ).then((res) => {
            return res.json();
        }).then((resp) => {
            // idchange(resp.employeeId);
            employeeNamechange(resp.employeeName);
            salarychange(resp.salary);
            joiningDatechange(resp.joiningDate);
            // activechange(resp.isactive);
        }).catch((err) => {
            console.log(err.message);
        })
    }, []);
    const[employeeName,employeeNamechange]=useState("");
    const[salary,salarychange]=useState("");
    const[joiningDate,joiningDatechange]=useState("");
    const navigate=useNavigate();

    const handlesubmit=(e)=>{
      e.preventDefault();
      const empdata={employeeId,employeeName,salary,joiningDate};
      

      fetch("http://localhost:8080/updateRecord/"+"/"+employeeId,{
        method:"PUT",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(empdata)
        
      }).then((res)=>{
        alert('Saved successfully.')
        console.log(res)
        navigate('/');
      }).catch((err)=>{
        console.log(err.message)
      })

    }
  return (
    <div>

    <div className="row">
        <div className="offset-lg-3 col-lg-6">
            <form className="container" onSubmit={handlesubmit}>

                <div className="card" style={{"textAlign":"left"}}>
                    <div className="card-title">
                        <h2>Employee Update</h2>
                    </div>
                    <div className="card-body">

                        <div className="row">

                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label>Employee ID</label>
                                    <input value={employeeId} readOnly className="form-control"></input>
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label>Employee Name</label>
                                    <input required value={employeeName} onChange={e=>employeeNamechange(e.target.value)} className="form-control"></input>
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
{/* </div>                             */}
                            <div className="col-lg-12">
                                <div className="form-group">
                                   <button className="btn btn-success" type="submit">Save</button>

                                   <Link to="/" className="btn btn-danger">Back</Link>
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
