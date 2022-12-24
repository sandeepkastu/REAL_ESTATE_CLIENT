import { useState} from "react";
import { useNavigate } from "react-router-dom";
import "./header.css"
const Header=()=>{
    const  Navigate=useNavigate();
    const [log, setlog]=useState(false);
    const logout=()=>{
        localStorage.clear();
        setlog(!log);
        if(!localStorage.getItem("userInfo")){
            Navigate("/")
        }
    }
    return(
        <>
        
            <p>USER ID : 06PPD125</p>
            <div className="head-user">
          
            <select name="User" className="head-select" onChange={logout}>
                <option >{localStorage.getItem("username")}</option>
                <option value="logout">LogOut</option>
            </select>
            </div>
        
        </>
    )
}
export default Header;