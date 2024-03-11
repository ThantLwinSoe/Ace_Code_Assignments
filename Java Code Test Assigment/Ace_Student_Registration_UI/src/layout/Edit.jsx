

import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const Edit = () => {
    
    const navigate = useNavigate();
    
    
    const {id} = useParams();

    const [name,setName] = useState('')
    const [age,setAge] = useState(0)
    const [gender,setGender] =useState('')
    const [course,setCourse] = useState('')
    const [date,setDate] = useState('')
    const [address,setAddress] = useState('')


    function updateName(event) {
        setName(event.target.value)
    }

    function updateAge(event) {
        setAge(event.target.value)
    }

    function updateCourse(event){
        setCourse(event.target.value)
    }

    function updateGender(event) {
        
        setGender(event.target.value)
        //console.log(tempGender);
    }

    function updateDate(event) {

        setDate(event.target.value)
    }

    function updateAddress(event){
        setAddress(event.target.value)
    }

    const student = {name,age,course,gender,date,address}
   
    const updateStuentById = async (e) => {

        e.preventDefault();
        console.log(student);

        try {
            const res = await axios.put(`http://localhost:8080/api/update/${id}`,student);
            console.log(res.data)
            navigate("/")
          } catch (error) {
            console.error('There was an error!', error);
          }

    }

    





  return (
    <div>
        {/* nav ui */}
        <nav class="navbar navbar-expand-lg bg-primary  ">
            <div class="container-fluid">
                <a class="navbar-brand text-light" href="#">Student Update Page</a>
                <div>
                    <a href="/" className='btn btn-outline-light me-3 '>Home</a>
                    <a href="/" className='btn btn-outline-light me-3'>About</a>
                    <a href="/" className='btn btn-outline-light me-3'>Contact Us</a>
                </div>   
            </div>
        </nav> 

        {/* Test Spcae */}  


        {/* This is Update Form */}
        <div className='container m-3 '>
            <div className="row">
                <div className="col-11">
                    <div className="card shadow ">
                        <div className="card-body">
                        <h5 className="card-title text-success">Student Update Form</h5>
                        
                        <form action="" className='mt-5 '>
                            
                            {/* For name */}
                            <div className="mb-3 row">
                                <label for="studentName" className="col-sm-2 col-form-label">Student Name :</label>
                                <div className="col-8 ">
                                    <input type="text" 
                                    className="form-control "
                                    id="studentName" 
                                    onChange={(event) => updateName(event)}
                                    placeholder="Enter Student Name"></input>
                                </div>
                            </div>

                            {/* For age */}
                            <div className="mb-3 row">
                                <label for="age" className="col-sm-2 col-form-label" >Age :</label>
                                <div className="col-8 ">
                                    <input type="text" 
                                    className="form-control" 
                                    id="age" 
                                    onChange={(event) => updateAge(event)}
                                    placeholder="Enter Age"></input>
                                </div>
                            </div>

                            {/* For Course */}
                            <div className="mb-3 row">
                                <label for="course" className="col-sm-2 col-form-label" >Course :</label>
                                <div className='col-8'>
                                    <select className='form-select' onChange={(event) => updateCourse(event)}>
                                        <option>Select Course</option>
                                        <option>JAVA</option>
                                        <option>LINUX</option>
                                        <option>SPRING</option>
                                        <option>REACT</option>
                                        <option>ANGULAR</option>
                                    </select>
                                </div>
                            </div>

                            {/* For Gender */}
                            <div className="mb-3 row">
                                <label for="gender" className="col-sm-2 col-form-label" >Gender :</label>
                                <div className='col-8'>
                                    <span>
                                        <input class="form-check-input me-3 " 
                                        type="radio" 
                                        name='gender'
                                        value='Male'
                                        checked={gender === 'Male'}
                                        onClick={ (event) => updateGender(event)} />
                                        <label class="form-check-label me-5 " for="inlineRadio1">Male</label>

                                        <input class="form-check-input me-3 " 
                                        type="radio" 
                                        name='gender'
                                        value='Female'
                                        checked={gender === 'Female'}
                                        onClick={ (event) => updateGender(event)}
                                        />
                                        <label class="form-check-label me-5 " for="inlineRadio2">Female</label>
                                    </span>
                                </div>                                    
                            </div>

                            {/* Date of Birth */}
                            <div className="mb-3 row">
                                <label for="dateOfBirth" className="col-sm-2 col-form-label" >Date Of Birth :</label>
                                <div className="col-8 ">
                                    <input type="date" 
                                    className="form-control" 
                                    id="dateOfBirth"
                                    onChange={(event) => updateDate(event) } 
                                    placeholder="Enter Age"></input>
                                </div>
                            </div>

                            {/* For Address */}
                            <div className="mb-3 row">
                                <label for="floatingTextarea2" className="col-sm-2 col-form-label" >Address :</label>
                                <div className="col-8 ">
                                    <input type="text" className='form-control ' placeholder="Enter Address" onChange={(event) => updateAddress(event)} />
                                    
                                </div>
                            </div>

                            <div className='mt-5 '>
                                <a className='btn btn-outline-primary me-3 ' onClick={(e) => updateStuentById(e)}>Edit Student</a>
                                <a className='btn btn-outline-danger 'onClick={ () => window.location.reload()}>Cancel</a>
                            </div>

                        </form>


                        </div>
                    </div>
                </div>
            </div>
        </div>


        {/* <button onClick={ () => navigate("/")}>Update</button> */}
    </div>
  )
}
