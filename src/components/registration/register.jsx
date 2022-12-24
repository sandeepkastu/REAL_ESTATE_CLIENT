import './login.css';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import axios from "axios";
const Register=()=>{
    const navigator=useNavigate();
    const [user, setUser]=useState({});
    const register=(e)=>{
        e.preventDefault()
        const {email,password,cpassword}=user;
        if(email && password && password===cpassword){
           // alert("posted")
            axios.post("https://u5-realestate-server.onrender.com/register",user)
            .then(res=>{
                // console.log(res.status)
                alert(res.data.message)
                if(res.status===200){
                    // console.log("hiiiiihii")
                     navigator("/")
                } 
            })
        }
        else{
            alert("invalid input")
        }
    }
    return(
        <>
        <div className="login-main" >
            <div className="login-box">
            <img className="logo-image"
            src="https://graphicsfamily.com/wp-content/uploads/edd/2021/01/Free-Real-Estate-Logo-Template-PNG-Transparent-scaled.jpg"
            alt=""
          />
                <div className="login-para">Create New Account</div>
                <form className='login-form'>
                    <input className='login-input' onChange={(e)=>setUser({...user,email:e.target.value})} type="email" placeholder="Mail ID" name="email" required/>
                    <input className='login-input' onChange={(e)=>setUser({...user,password:e.target.value})} type="password" placeholder="Password" name="password" required/>
                    <input className='login-input' onChange={(e)=>setUser({...user,cpassword:e.target.value})} type="password" placeholder="Confirm Password" name="cpassword" required/>
                    <button className='login-btn' type="submit" onClick={register}>Sign up</button>
                </form>
            </div>
            <div className='addition'>
            <a href='/'>Sign in</a>
            </div>
        </div>
        </>
    );
}
export default Register;