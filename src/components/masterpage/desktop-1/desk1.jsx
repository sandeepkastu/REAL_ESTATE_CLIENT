import Header from ".././header";
import SideBar from ".././sidebar";
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from "axios";
import "./desk1.css"
import '../home.css'
const Desk1 = () => {   
    const [post, setPost] = useState([]);
    const d1 = {
        headers: {
          "accept": "application/json",
          "Content-Type": "application/json",
          "authentication": localStorage.getItem("userInfo"),
        }
    }
    useEffect(() => {
        axios.get("https://u5-realestate-server.onrender.com/form",d1).then((respond) => {
            setPost(respond.data);
        })
    }, []);
    const sold=(e)=>{
        e.preventDefault()
        // console.log(e.target.textContent);
        if(e.target.textContent==="unsold"){
            e.target.textContent="Sold"
            if(e.target.textContent==="Sold"){
                const td=document.getElementsByTagName("td")[7];
                td.textContent=0;
            }
        }
    }
    const [searchTerm , setsearchTerm]=useState("")
    // const id="PPD"+parseInt(Math.random()*10000);
    const navigate = useNavigate();
    const forword = (e) => {
        e.preventDefault();
        navigate("/desk2");
    }
    return (
        <>
            <div className="desk-1-main">
                <div className="changed-side-bar">
                    <SideBar />
                </div>
                <div className="home-header">
                    <div className="home-head">
                        <Header />
                    </div>
                    <div className="home-content">
                        <div id="desk1-menu">
                            <div className="search-menu">
                                <input type="text/number" placeholder="Search PPD ID" id="myInput" onChange={(e)=>{setsearchTerm(e.target.value)}} />
                                <button  >
                                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    </svg>
                                </button>
                            </div>
                            <div className="collection">
                                <button onClick={forword}>
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" fill="#FAFBFC" />
                                    </svg> Add Property
                                </button>

                            </div>
                        </div>
                        <div id="desk1-data">
                            <tr className="table-head">
                                <th>PPD ID</th>
                                <th>Image</th>
                                <th>Property</th>
                                <th>Contact</th>
                                <th>Area</th>
                                <th>Views</th>
                                <th>Status</th>
                                <th>Days Left</th>
                                <th>Action</th>
                            </tr>
                            {post.filter(user=>user._id.includes(searchTerm)).map((value, i) => {
                                return (
                                    <>
                                        <tr className="table-head">
                                            <td id="ppdid">{value._id}</td>
                                            <td>
                                            </td>
                                            <td>{value.property}</td>
                                            <td>{value.contact}</td>
                                            <td>{value.area}</td> 
                                            <td>{value.view}</td>
                                            <td><button onClick={sold}>{value.status}</button></td>
                                            <td>{value.daysleft}</td>
                                            <td>

                                            </td>
                                        </tr>
                                    </>
                                )
                            })}
                        
                        </div>
                    </div>
                    <div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Desk1;