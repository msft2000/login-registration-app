import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import '../css/Home.css';
export default function Home(){
    const navigate=useNavigate();
    useEffect(()=>{
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
            {/* {validateUser()} */}
            <h1>Home Page</h1>
            <Button onClick={handleLogOut} variant="outlined" startIcon={<DeleteIcon />}>
                Log Out
            </Button>
        </div>
    )
}