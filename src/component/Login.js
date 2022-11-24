import React, { useState } from 'react'
import "./Chats.css";
import { useNavigate } from 'react-router-dom'
import {signInWithEmailAndPassword } from "firebase/auth";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
const Login = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({});
    let auth = getAuth();
  const handelInput=(e)=>{
    let newInput = {[e.target.name] : e.target.value};
    setData({...data, ...newInput});
  }
  const handelSubmit =(e)=>{
    e.preventDefault();
    createUserWithEmailAndPassword(auth, data.email, data.password)
    .then((response)=>{
        console.log('user response'+ response.user);
        alert('loginSucessfully #MessagingApp')
        navigate('/chats');
    })
    .catch((error)=>{
      console.log("UserAlreadyExist"+error.code);
      if(error.code === "auth/email-already-in-use"){
        signInWithEmailAndPassword(auth,data.email,data.password)
        .then((userCredential) => {
          const user = userCredential.user;
          alert("login sucessfully")
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert("invalid email password");
        });
        // loginWithUserEmailId(auth, data.email,data.password);
        navigate('/chats');
      }
    })
  }

  return (
      <div className='formContainer'>
        <div className="wrapper">
              <span className='heading'>Messaging App</span>
              <span className='title'>Register / Login</span>
              <form>
              <input className='inputform' name='email' type="text" onChange={(e)=>handelInput(e)} placeholder='Enter Email' />
              <input className='inputform' name='password' type="password" onChange={(e)=>handelInput(e)} placeholder='Enter Password' />
          <button className='loginbtn' onClick={handelSubmit}>Login</button>

              </form>
        </div>

</div>
  )
}

export default Login