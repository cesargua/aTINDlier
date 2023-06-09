import React , {useEffect,useState} from 'react';
import {Button} from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';

function Reject({swipeClickHandler}){

    const buttonStyle = {
        backgroundColor: "#dc143c",
        borderRadius: "100%",
        height:"100px",
        width: "100px"
    }

    //  const clickHandler= () =>{
    //     setClicked(!clicked)
    // }
    
    return(
        <div>
            <Button onClick={()=>{swipeClickHandler('left')}} variant="contained" sx={buttonStyle} ><CancelIcon/></Button>
        </div>
    )

}

export default Reject;

