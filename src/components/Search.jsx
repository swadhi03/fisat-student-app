import React, { useState } from 'react'
import Navbar from './Navbar'

const Search = () => {
    const [data,changeData] = useState(
        {
            "firstname" :"",
            "lastname":""
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
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label"><b>Enter First Name:</b></label>
                            <input type="text" className="form-control" name='firstname' value={data.firstname} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label"><b>Enter Last Name:</b></label>
                            <input type="text" className="form-control" name='lastname' value={data.lastname} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-success" onClick={readValue}>Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Search