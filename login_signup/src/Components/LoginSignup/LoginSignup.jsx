import React, { useState } from 'react'
import './LoginSignup.css'
import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'
import { Link } from 'react-router-dom'


const LoginSignup = () => {
    const [action,setAction] = useState("Login");
  return (
    <div className = "container">
        <div className="header">
            <div className="text">
                {action}
            </div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            {action==="Login"?<div></div>:<div className="input">
                <img src={user_icon} alt="" />
                <input type="text" placeholder='Name'/>
            </div>}
            
            <div className="input">
                <img src={email_icon} alt="" />
                <input type="email" placeholder='Email'/>
            </div>
            
            <div className="input">
                <img src={password_icon} alt="" />
                <input type="password" placeholder='Password'/>
            </div>
        </div>
        {action==="Sign Up"?<div></div>:<div className="forgot-password">Forgot Password? <span>Click Here!</span></div>}
        <span className='forgot-password'>If you dont have account?<span className=''><Link to={'/Register'}>
           <a href="">Sign up</a>
            </Link></span>
        </span>
           
        <div className="submit-container">
           <div className={action ==="Sign Up"?"submit gray":"submit"}>
                Login
            </div>
        </div>
    </div>
  )
}

export default LoginSignup;