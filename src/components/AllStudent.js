import React, { useEffect, useState } from 'react'
import axios from 'axios';

function AllStudent() {
    const [student, setStudent] = useState([]);


    useEffect(() => {
        getStudent()

    }, [])


    const getStudent = () => {
        axios.get("https://n3facebook.herokuapp.com/student/").then((res) => {
            setStudent(res.data)
        }).catch((err) => {
            alert(err)
        })
    }
    const deleteone = (e) => {


        axios.delete(`https://n3facebook.herokuapp.com/student/delete/${e}`).then((res) => {
            window.location.reload();
        }).catch((err) => {
            alert(err)
        })
    }

    console.log(student[0])
    return (
        <div className='container'>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead>
                {student.map((students) => {
                    return (
                        <div>
                            <tbody>
                                <tr>
                                    <th scope="row"></th>
                                    <td>{students.name}</td>
                                    <td>{students.age}</td>
                                    <td>{students.gender}</td>
                                    <button onClick={(e) => { deleteone(students._id) }}>Delete</button>
                                </tr>
                            </tbody>
                        </div>
                    )
                })}

            </table>

        </div>
    )
}

export default AllStudent






