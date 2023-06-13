import React, {useState, useEffect} from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import {Grid, AppBar, Toolbar, Typography, IconButton} from '@mui/material'


function Navbar(){
    const navbarStyle= {
        backgroundColor: "orange"
    }
    const logoStyle = {
        height: "50px",
        width: "150px"
    }

    return (
    <>
        <AppBar sx={navbarStyle} position="static">
            <Toolbar variant="dense">
            <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                <MenuIcon />
            </IconButton>
             <img src="src/assets/logos/logo-transparent-png.png" alt="logo" className="logo" style={logoStyle}/>
            </Toolbar>
        </AppBar>
    </>
    )

}

export default Navbar;