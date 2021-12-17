import React from 'react';
import Button from '@mui/material/Button';
import '../../css/Button.css';

export default function BasicButtons({ title, handleAction, tipe }){
    return(
        <Button className={tipe==="contained" ? "fondo-amarillo" : null} variant={ tipe } onClick={handleAction}>
                { title }
        </Button>
    );
}