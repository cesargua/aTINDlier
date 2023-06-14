import React, { useState, UseEffect } from 'react'
import {Button} from '@mui/material';
import { color } from '@mui/system';
import CheckIcon from '@mui/icons-material/Check';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';



function Accept({swipeClickHandler}) {

    const buttonStyle = {
        backgroundColor: "#18A558",
        borderRadius: "100%",
        height:"100px",
        width: "100px"
    }


    return (
    <>
        <Button variant="contained" sx={buttonStyle} onClick={()=>{swipeClickHandler('right')}}><ShoppingCartCheckoutIcon /></Button>
    </>
    )

}

export default Accept;