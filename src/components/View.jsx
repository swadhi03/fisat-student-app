import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const View = () => {
    const [data,changeData]=useState([])
        const fetchData=()=>{
            axios.get("https://anishpdm.github.io/dummy-api-new/student.json").then(
                (response)=>{
                    console.log(response.data)
                    changeData(response.data)
                }
            ).catch().finally()
        }
        useEffect(()=>{fetchData()},[])
    return (
        <div>
            <div className="container">
                <Navbar/>
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Index</th>
                                    <th scope="col">First Name</th>
                                    <th scope="col">Last Name</th>
                                    <th scope="col">College Name</th>
                                    <th scope="col>">DOB</th>
                                    <th scope="col>">Course</th>
                                    <th scope="col>">Ph.No</th>
                                    <th scope="col>">Email-ID</th>
                                    <th scope="col>">Address</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map
                                (
                                    (value,index)=>{
                                        return <tr>
                                        <th>{value._id}</th>
                                        <td>{value.firstname}</td>
                                        <td>{value.lastname}</td>
                                        <td>{value.college}</td>
                                        <td>{value.dob}</td>
                                        <td>{value.course}</td>
                                        <td>{value.mobile}</td>
                                        <td>{value.email}</td>
                                        <td>{value.address}</td>
                                    </tr>
                                    }
                                )
                                }
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default View