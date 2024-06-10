import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const AddStudent = () => {
    const [data,changeData]=useState(
        {
            "firstname" :"",
            "lastname" :"",
            "college" :"",
            "dob" :"",
            "course" :"",
            "mobile" :"",
            "email" :"",
            "address" :""
        }
    )
        const inputHandler=(event)=>{
            changeData({...data,[event.target.name]:event.target.value})
        }
        const readValue=()=>{
            console.log(data)
            axios.post("https://courseapplogix.onrender.com/addstudents",data).then(
                (response)=>{
                    console.log(response.data)
                    if(response.data.status=="success"){
                        alert("Successfully added")
                    }
                    else{
                        alert("Error")
                    }
                }
            ).catch().finally()
        }
  return (
    <div>
        <div className="container">
            <Navbar/>
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 cl-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label"><b>First Name</b></label>
                            <input type="text" className="form-control" name='firstname' value={data.firstname} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label"><b>Last Name</b></label>
                            <input type="text" className="form-control" name='lastname' value={data.lastname} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label"><b>College</b></label>
                            <input type="textarea" className="form-control" name='college' value={data.college} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label"><b>Date of Birth</b></label>
                            <input type="date" className="form-control" name='dob' value={data.dob} onChange={inputHandler}/>
                        </div>
                        <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label"><b>Course</b></label>
                            <select name="course" id="" className="form-control" value={data.course} onChange={inputHandler}>
                                <option value=""></option>
                                <option value="MCA">MCA</option>
                                <option value="MBA">MBA</option>
                                <option value="B.Tech">B.Tech</option>
                                <option value="M.Tech">M.Tech</option>
                            </select> 
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label"><b>Mobile No</b></label>
                            <input type="text" className="form-control" name='mobile' value={data.mobile} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label"><b>Email-Id</b></label>
                            <input type="email" className="form-control" name='email' value={data.email} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label"><b>Address</b></label>
                            <input type="textarea" className="form-control" name='address' value={data.address} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button className="btn btn-success" onClick={readValue}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
     </div>   </div>
  )
}

export default AddStudent