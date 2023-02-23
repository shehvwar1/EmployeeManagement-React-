import React from 'react'
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


export default function ViewEmployee() {
    const { employeeId } = useParams();
    const [employee, employeeDatachange] = useState({});
    useEffect(() => {
        fetch(`http://localhost:8080/employeeById/${employeeId}`).then((res) => {
            return res.json();
        }).then((resp) => {
            employeeDatachange(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, []);
  return (
    <div>
            {/* <div className="row">
                <div className="offset-lg-3 col-lg-6"> */}

               <div className="container">
                
            <div className="card row" style={{ "textAlign": "left" }}>
                <div className="card-title">
                    <h2>View Employee</h2>
                </div>
                <div className="card-body"></div>

                {employee &&
                    <div>
                        <h2>The Employee Id is : {employee.employeeId}</h2>
                        <h5>Employee Name is : {employee.employeeName}</h5>
                        <h5>Salary is : {employee.salary}</h5>
                        <h5>Joining Date is : {employee.joiningDate}</h5>
                        <Link className="btn btn-danger" to="/">Back to Listing</Link>
                    </div>
                }
            </div>
            </div>
            {/* </div>
            </div> */}
        </div >
  )
}
