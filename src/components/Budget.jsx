import React, {useEffect,useState} from 'react';
import AddBudget from './AddBudget.jsx'
import {Grid, Typography} from '@mui/material'


function Budget({budget, budgetChange}){

    const titleStyle = {
        fontSize: 30
    }

    return(
        <>
            <Grid item xs={2}>
                <Typography sx={titleStyle}>Budget: ${budget}</Typography>
            </Grid>
            <Grid item xs={0}>
                <AddBudget budget={budget} budgetChange={budgetChange}/>
            </Grid>
        </>
    )

}

export default Budget;