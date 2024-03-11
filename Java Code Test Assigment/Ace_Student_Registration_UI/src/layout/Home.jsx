

import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';


export const Home = () => {

    const nav = useNavigate();



    const updateStudent = (id) => {
        nav(`/edit/${id}`)
    }

    const printPage = (id) => {
        nav(`/print/${id}`)
    }

    const [students,setStudents] = useState([]);

    const [tempName,setTempName] = useState('')
    const [tempAge,setTempAge] = useState(0)
    const [tempGender,setTempGender] =useState('Male')
    const [tempCourse,setTempCourse] = useState('')
    const [tempDate,setTempDate] = useState('')
    const [tempAddress,setTempAddress] = useState('')

    const [reload,setReload] = useState(false);

    useEffect(() => { getAllStudents()},[])

    useEffect(() => {
        if (reload) {
          window.location.reload(); 
        }
      }, [reload]);


    const deleteStudent = async (id) => {

        try {
            const res = await axios.delete(`http://localhost:8080/api/delete/${id}`)
             console.log(res.data)
             setReload(true)
            
        } catch (error) {
            console.error("Error Occur",error)
        }
    }


    const newStudent = {name:tempName,age:tempAge,course:tempCourse,gender:tempGender,date:tempDate,address:tempAddress}

    const createStudent = async (e) => {
        
        e.preventDefault();

        console.log(newStudent);

        try {
            const response = await axios.post('http://localhost:8080/api/create', newStudent);
            console.log(response.data);
            setReload(true)
          } catch (error) {
            console.error('There was an error!', error);
          }

    }

    function setName(event) {
        setTempName(event.target.value)
    }

    function setAge(event) {
        setTempAge(event.target.value)
    }

    function setCourse(event){
        setTempCourse(event.target.value)
    }

    function setGender(event) {
        
        setTempGender(event.target.value)
        console.log(tempGender);
    }

    function setDate(event) {

        setTempDate(event.target.value)
    }

    function setAddress(event){
        setTempAddress(event.target.value)
    }

   
    const getAllStudents = async () => {
        try {
            const res = await axios.get("http://localhost:8080/api/all-student");
        //    console.log(res.data);
            setStudents(...students,res.data)
        } catch (error) {
            console.log('Error getting students',error);
        }
    }

    
  return (
    <div>
        
        <nav class="navbar navbar-expand-lg bg-primary  ">
            <div class="container-fluid">
                <a class="navbar-brand text-light" href="#">Student Registration UI</a>
                <div>
                    <a href="/" className='btn btn-outline-light me-3 '>Home</a>
                    <a href="/" className='btn btn-outline-light me-3'>About</a>
                    <a href="/" className='btn btn-outline-light me-3'>Contact Us</a>
                </div>   
            </div>
        </nav>

        {/* This is form */}
        <div className='container m-3 '>
            <div className="row">
                <div className="col-11">
                    <div className="card shadow ">
                        <div className="card-body">
                        <h5 className="card-title text-primary">Student Registration Form</h5>
                        
                        <form action="" className='mt-5 '>
                            
                            {/* For name */}
                            <div className="mb-3 row">
                                <label for="studentName" className="col-sm-2 col-form-label">Student Name :</label>
                                <div className="col-8 ">
                                    <input type="text" 
                                    className="form-control "
                                    id="studentName" 
                                    onChange={(event) => setName(event)}
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
                                    onChange={(event) => setAge(event)}
                                    placeholder="Enter Age"></input>
                                </div>
                            </div>

                            {/* For Course */}
                            <div className="mb-3 row">
                                <label for="course" className="col-sm-2 col-form-label" >Course :</label>
                                <div className='col-8'>
                                    <select className='form-select' onChange={(event) => setCourse(event)}>
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
                                        checked={tempGender === 'Male'}
                                        onClick={ (event) => setGender(event)} />
                                        <label class="form-check-label me-5 " for="inlineRadio1">Male</label>

                                        <input class="form-check-input me-3 " 
                                        type="radio" 
                                        name='gender'
                                        value='Female'
                                        checked={tempGender === 'Female'}
                                        onClick={ (event) => setGender(event)}
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
                                    onChange={(event) => setDate(event) } 
                                    placeholder="Enter Age"></input>
                                </div>
                            </div>

                            {/* For Address */}
                            <div className="mb-3 row">
                                <label for="floatingTextarea2" className="col-sm-2 col-form-label" >Address :</label>
                                <div className="col-8 ">
                                    <input type="text" className='form-control ' placeholder="Enter Address" onChange={(event) => setAddress(event)} />
                                    
                                </div>
                            </div>

                            <div className='mt-5 '>
                                <a className='btn btn-outline-primary me-3 ' onClick={(e) => createStudent(e)}>Submit</a>
                                <a className='btn btn-outline-danger 'onClick={ () => window.location.reload()}>Cancel</a>
                            </div>

                        </form>


                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Test Space */}

        {/* This is Student Table */}
        <div className='container m-3 mt-5  '>
            <div className="row">
                <div className="col-11">
                    <table className='table shadow '>
                        <thead>
                            <tr>
                                <td>ID</td>
                                <td>Name</td>
                                <td>Age</td>
                                <td>Course</td>
                                <td>Gender</td>
                                <td>Date of Birth</td>
                                <td>Address</td>
                                <td>Actions</td>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                students.map(
                                    stu => (
                                        <tr key={stu.id}>
                                            <td>{stu.id}</td>
                                            <td>{stu.name}</td>
                                            <td>{stu.age}</td>
                                            <td>{stu.course}</td>
                                            <td>{stu.gender}</td>
                                            <td>{stu.date}</td>
                                            <td>{stu.address}</td>
                                            <td>
                                                <a className='btn btn-outline-primary me-3 ' onClick={() => updateStudent(stu.id)}>Edit</a>
                                                <a className='btn btn-danger me-3' onClick={() => deleteStudent(stu.id)}>Delete</a>
                                                <a  className='btn btn-outline-success me-3' onClick={ () => printPage(stu.id)}>Print</a>
                                            </td>
                                        </tr>
                                    )
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