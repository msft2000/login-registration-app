import React from 'react';
import Button from '@mui/material/Button';

export default function BasicButtons({ title, handleAction, tipe }){
    return(
        <Button variant={ tipe } onClick={handleAction}>
                { title }
        </Button>
    );
}