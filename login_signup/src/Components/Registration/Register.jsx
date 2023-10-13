import React, { useState } from 'react'
import './Register.css'
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
                Registration
            </div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
        <div className="input">
                {/* <input type="text" placeholder='Role'/> */}
                {/* <img src={user_icon} alt="" /> */}
                <select className='input input-dropdown' name="language" id="language">
                    <img src={user_icon} alt="" />
                    <option value="javascript">JavaScript</option>
                    <option value="python">Python</option>
                    <option value="c++" >C++</option>
                    <option value="java" selected>Select your Role</option>
                </select>
            </div>
            <div className="input">
                <img src={user_icon} alt="" />
                <input type="text" placeholder='Name'/>
            </div>
            
            <div className="input">
                <img src={email_icon} alt="" />
                <input type="email" placeholder='Email'/>
            </div>
            
            <div className="input">
                <img src={password_icon} alt="" />
                <input type="password" placeholder='Password'/>
            </div>
        </div>
        <Link to={'/'}>
        <span className="submit-container">
             <div className={action==="Login"?"submit ":"submit"} >Signup</div>
            {/* <div className={action ==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div> */}
        </span>
        </Link>
           
    </div>
  )
}

export default LoginSignup;