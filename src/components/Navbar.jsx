import React, {useState, useEffect} from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import {Grid, AppBar, Toolbar, Typography, IconButton} from '@mui/material'


function Navbar(){
    const navbarStyle= {
        backgroundColor: "orange"
    }
    return (
    <>
        <AppBar sx={navbarStyle} position="static">
            <Toolbar variant="dense">
            <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" component="div">
                aTINDlier
            </Typography>
            </Toolbar>
        </AppBar>
    </>
    )

}

export default Navbar;