

import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


export const Print = () => {

    const {id} = useParams();

    const [student,setStudent] = useState({})

    useEffect(() => {getStudetnById()},[])

    const getStudetnById = async () => {
        try {
            const res = await axios.get(`http://localhost:8080/api/student/${id}`);
            console.log(res.data);
           setStudent(res.data)
        } catch (error) {
            console.log('Error getting students',error);
        }
    }

  return (
    <div>
        {/* use Param */}
        
        <div className="container m-5 ">
            <div className="row">
                <div className="col-8 ">
                    <div className="card">
                        <ul className="list-group">
                            <li className="list-group-item text-bg-danger " > <h3 className='text-light  '>Print Student</h3></li>
                            <li className="list-group-item">ID : {student.id}</li>
                            <li className="list-group-item">Name : {student.name}</li>
                            <li className="list-group-item">Age : {student.age}</li>
                            <li className="list-group-item">Course: {student.course}</li>
                            <li className="list-group-item">Gender: {student.gender}</li>
                            <li className="list-group-item">Date of Birth: {student.date}</li>
                            <li className="list-group-item">Address: {student.address}</li>
                        </ul>
                    </div>
                    <a href="/" className='btn btn-primary me-3 mt-3 '>Print</a>
                    <a href="/" className='btn btn-danger me-3 mt-3'>Cancel</a>
                </div>
            </div>
        </div>

    </div>
  )
}
