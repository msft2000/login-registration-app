import React from 'react';
import { useNavigate } from 'react-router-dom';
export default function Home(){
    const navigate=useNavigate();
    React.useEffect(()=>{
        let authToken = sessionStorage.getItem('Auth Token');
        if(authToken){
            navigate('/home');
        }else{
            navigate('/login');
        }
    },[navigate])
    const handleLogOut = () =>{
        sessionStorage.removeItem('Auth Token');
        navigate('/login');
    }
    return(
        <div id="home">
            <h1>Home Page</h1>
            <button onClick={handleLogOut}>Log Out</button>
        </div>
    )
}