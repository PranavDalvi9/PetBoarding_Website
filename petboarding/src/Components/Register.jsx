import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
// import { login} from "../Redux/Login/Action"
import { register } from "../Redux/Login/Action"
import { Navigate } from 'react-router-dom';
import "./Login.css";

export default function Register() {

    const[name, setName] = useState("")
    const[email, setEmail] = useState("")
    const[mobile, setMobile] = useState("")
    const[description, setDescription] = useState("")

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch()
    const { isAuthenticate } = useSelector((store) => store.login)
    // console.log(isAuthenticate)
    // "name": "masai",
    // "email" : "qqq@com",
    // "password": "1234",
    // "username": "masai",
    // "mobile" : "109382227581094",
    // "description": "i am sa from1 masai"

    const handleRegister = () => {
        var data = {
            name,
            email,
            password,
            username,
            mobile,
            description
        }
        console.log("datata",data)
        // axios.post("https://masai-api-mocker.herokuapp.com/auth/register" , )
        dispatch(register(data))
    }

    if (isAuthenticate) {
        return <Navigate to={"/login"} />
    }

    return (
        <div className='loginContainer'>
            <h1>Register</h1>

            <input type="text" placeholder='Enter Name' onChange={(e) => { setName(e.target.value) }} /><br /><br />

            <input type="text" placeholder='Enter Email' onChange={(e) => { setEmail(e.target.value) }} /><br /><br />

            <input type="text" placeholder='Enter Password' onChange={(e) => { setPassword(e.target.value) }} /><br /><br />

            <input type="text" placeholder='Enter Username' onChange={(e) => { setUsername(e.target.value) }} /><br /><br />

            <input type="text" placeholder='Enter Mobile Number' onChange={(e) => { setMobile(e.target.value) }} /><br /><br />

            <input type="text" placeholder='Enter Description' onChange={(e) => { setDescription(e.target.value) }} /><br /><br />

            <button className='LoginButton' onClick={handleRegister}>Register</button>
        </div>
    )

}
