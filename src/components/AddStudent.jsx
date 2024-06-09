import React, { useState } from 'react'
import Navbar from './Navbar'

const AddStudent = () => {
    const [data,changeData]=useState(
        {
            "First_Name" :"",
            "Last_Name" :"",
            "Collge_Name" :"",
            "DOB" :"",
            "Course" :"",
            "Phone_Number" :"",
            "Email_ID" :"",
            "Address" :""
        }
    )
        const inputHandler=(event)=>{
            changeData({...data,[event.target.name]:event.target.value})
        }
        const readValue=()=>{
            console.log(data)
        }
  return (
    <div>
        <div className="container">
            <Navbar/>
            <div className="row">
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 cl-xxl-6">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">First Name</label>
                            <input type="text" className="form-control" name='First_Name' value={data.name} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Last Name</label>
                            <input type="text" className="form-control" name='Last_Name' value={data.name} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">College</label>
                            <input type="text" className="form-control" name='Collge_Name' value={data.name} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Date of Birth</label>
                            <input type="text" className="form-control" name='DOB' value={data.name} onChange={inputHandler}/>
                        </div>
                        <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Course</label>
                            <input type="text" className="form-control" name='Course' value={data.name} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Mobile No</label>
                            <input type="text" className="form-control" name='Phone_Number' value={data.name} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Email-Id</label>
                            <input type="text" className="form-control" name='Email_ID' value={data.name} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Address</label>
                            <input type="text" className="form-control" name='Address' value={data.name} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button className="btn btn-success" onClick={readValue}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddStudent