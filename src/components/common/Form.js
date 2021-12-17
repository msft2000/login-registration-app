import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from './Button';

export default function BasicTextFields({ title, setEmail, setPassword, handleAction, otherTitle, changeOption }){
    
    return(
        <div className='basic-text-fields'>
            <div className='heading-container'>
                <h3>{ title } Form</h3>
            </div>
            <Box
                component="form"
                sx={{
                    '& > : not (style)':{m: 1, width: '25ch'},
                }}
                noValidate
                autoComplete="off"
            >
                <TextField 
                    id="email" 
                    label="Enter the Email" 
                    variant="standard" 
                    onChange={(e)=>setEmail(e.target.value)}
                />
                <p>  </p>
                <TextField 
                    id="password" 
                    label="Enter the Password" 
                    variant="standard" 
                    type="password"
                    onChange={(e)=>setPassword(e.target.value)}
                />
            </Box>
            <Button tipe="contained" title={ title } handleAction={handleAction} />
            <Button tipe="secondary" title={ otherTitle } handleAction={changeOption} />
        </div>
    );
}