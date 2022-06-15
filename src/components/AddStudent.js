import React, { useState } from 'react'
import axios from 'axios';


function AddStudent() {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");

    const SubmitHandler = (e) => {
        e.preventDefault();
        const newStudent = { name, age, gender }
        axios.post('https://n3facebook.herokuapp.com/student/add', newStudent).then(() => {
            alert("Student Added")
            setName("")
        }).catch((err) => {
            alert(err)
        })
    }

    return (
        <div className='container'>
            <form onSubmit={SubmitHandler}>
                <div className="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Student Name</label>
                    <input type="text" className="form-control" id="name" aria-describedby="emailHelp"
                        onChange={(e) => { setName(e.target.value) }}
                    />
                    {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Student age</label>
                    <input type="number" className="form-control" id="age" onChange={(e) => { setAge(e.target.value) }} />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">gender</label>
                    <input type="text" className="form-control" id="gender" onChange={(e) => { setGender(e.target.value) }} />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary" >Submit</button>
            </form>
        </div>
    )
}

export default AddStudent