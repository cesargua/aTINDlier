import React, {useState, useEffect} from 'react';
import { FormControl, FormLabel, InputLabel, Input, FormHelperText, Box, Typography} from '@mui/material';


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
        align: "center"
        // backgroundColor: "white"
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
                <FormControl sx={formStyle}>
                    <FormLabel htmlFor="my-input" sx={formLabelStyle}>Add to Budget</FormLabel>
                    <Input id="my_input" aria-describedby="my-helper-text" type="number" sx={inputStyle}/>
                    <Input id="submit-button" aria-describedby="my-helper-text" type="submit" />
                    <FormHelperText id="my-helper-text">Do It! Spend Money!</FormHelperText>
                </FormControl>
            </form>
        </>
    )
    
}

export default BudgetForm;