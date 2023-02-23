import React from 'react'
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
export default function UpdateEmployee() {
    const { employeeId } = useParams();
    console.log(employeeId)
    useEffect(() => {
        fetch(`http://localhost:8080/employeeById/${employeeId}`).then((res) => {
            return res.json();
        }).then((resp) => {
            // idchange(resp.employeeId);
            employeeNamechange(resp.employeeName);
            salarychange(resp.salary);
            joiningDatechange(resp.joiningDate);
        }).catch((err) => {
            console.log(err.message);
        })
    }, []);
    //const[employeeId,idchange]=useState("");
    const[employeeName,employeeNamechange]=useState("");
    const[salary,salarychange]=useState("");
    const[joiningDate,joiningDatechange]=useState("");
    // const[active,activechange]=useState(true);
    // const[validation,valchange]=useState(false);
    const navigate=useNavigate();

    const handlesubmit=(e)=>{
      e.preventDefault();
      const empdata={employeeName,salary,joiningDate};
      

      fetch(`http://localhost:8080/updateRecord/${employeeId}`,{
        method:"PUT",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(empdata)
      }).then((res)=>{
        alert('Saved successfully.')
        navigate('/');
      }).catch((err)=>{
        console.log(err.message)
      })

    }
  return (
    <div className='mt-10'>

    <div className="row mt-10">
        <div className="offset-lg-3 col-lg-6 mt-5 shadow">
            <form className="container" onSubmit={handlesubmit}>

                <div className="card mt-10" style={{"textAlign":"left"}}>
                    <div className="card-title mt-10">
                        <h2>Update Employee</h2>
                    </div>
                    <div className="card-body">

                        <div className="row">

                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label>Employee ID</label>
                                    <input value={employeeId} disabled="disabled" className="form-control"></input>
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label>Employee Name</label>
                                    <input value={employeeName}  onChange={e=>employeeNamechange(e.target.value)} className="form-control"></input>
                                
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
                            <div className="col-lg-12 mt-2">
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
