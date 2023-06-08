import React, { useState, UseEffect } from 'react'
import {Button} from '@mui/material';
import { color } from '@mui/system';
import CheckIcon from '@mui/icons-material/Check';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';



function Accept({budget, budgetChange, price, clicked, setClicked}) {

    const buttonStyle = {
        backgroundColor: "#18A558",
        borderRadius: "100%",
        height:"100px",
        width: "100px"
    }

    const clickHandler= () =>{
        setClicked(!clicked)
        budgetChange(budget-price);
    }

    return (
    <div>
        <Button variant="contained" sx={buttonStyle} onClick={clickHandler}><ShoppingCartCheckoutIcon /></Button>
    </div>
    )

}

export default Accept;