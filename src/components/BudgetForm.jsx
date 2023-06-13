import React, {useState, useEffect} from 'react';
import { FormControl, FormLabel, Button, TextField, Grid, InputLabel, Input, FormHelperText, Box, Typography} from '@mui/material';


function BudgetForm({budget, budgetChange, setShowForm}){

    // const [form, setForm] = useState({});
    const formStyle = {
        top: 100,
        left: 500,
        backgroundColor: "white",
        height: "250px",
        width: "400px",
        borderRadius:"10%"
    }
    const formLabelStyle = {
        textAlign: "center",
        fontSize: 40
    }
    const inputStyle = {
        height: "100px",
        width: "350px",
        align: "center",
        // backgroundColor: "white"
    }
    const submitButtonStyle = {
        align: "center",
    }
    const onSubmit = (e) => {
        e.preventDefault();
        setShowForm(false);
        const addNum = parseFloat(Number(e.target.my_input.value).toFixed(2)) + parseFloat(Number(budget).toFixed(2));
        budgetChange(parseFloat(addNum));
    }
    return (
        <>
            <form onSubmit={onSubmit}>
            <Grid container
            direction="row"
            alignItems="center"
            justifyContent="center"
            sx={formStyle}>
                <Grid xs={0}>
                    <FormLabel htmlFor="my-input" sx={formLabelStyle}>Add to Budget</FormLabel>
                </Grid>
                <Grid sx={inputStyle}  direction="row" alignItems="center" justifyContent="center">
                    <InputLabel sx={{textAlign: "center"}} htmlFor="my-amount">Amount</InputLabel>
                    <Grid sx={inputStyle}  direction="column" alignItems="center" justifyContent="center">
                        <TextField sx={inputStyle} id="my_input" aria-describedby="my-helper-text" label="$" type="number"/> 
                    </Grid>
                </Grid>
                <Grid sx={submitButtonStyle}>
                    <Button id="submit-button" aria-describedby="my-helper-text" type="submit">Submit</Button>
                </Grid>
                <Grid>
                    <FormHelperText id="my-helper-text">Do It! Spend Money!</FormHelperText>
                 </Grid>
            </Grid>
            </form>
        </>
    )
}

export default BudgetForm;