import React,{useEffect, useState} from 'react'

export function Login() {
    const [userName, setUserName] = useState('')
    const [passWord, setPassword] = useState('')


  return (
        <>
        <div className="loginBody">

        <h1>Dairy farming management system</h1>
        <div className="box">
            <div className="form">
               
                <div className="inputBox">
                    <input type="text" required= "required" />
                    <span>Username</span>
                    <i></i>
                </div>
                <div className="inputBox">
                    <input type="password" required= "required" id="" />
                    <span>Password</span>
                    <i></i>
                </div>

                <div className="links">
                    <a href="#">Forgot Password</a>
                    <a href="#">Signup</a>
                </div>
                <input type="submit" value="Login" />
                
                

            </div>

            
        </div> 
        </div>
        
        </>
        
        
      
  )
}

export default Login
