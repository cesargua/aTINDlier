import React, { useState, UseEffect, useClasses} from 'react'
import {Button, Modal,ClickAwayListener} from '@mui/material';
import { color } from '@mui/system';
import AddIcon from '@mui/icons-material/Add';
import BudgetForm from './BudgetForm.jsx';

// const useStyles = makeStyles({
//     dialog: {
//       position: 'absolute',
//       left: 10,
//       top: 50
//     }
//   });
//   const styles = {
//     paper: {
//         position: 'absolute',
//         left: 10,
//         top: 50
//     },
//   };

function AddBudget({budget, budgetChange}){
    const [showForm, setShowForm] = useState(false);
    // const classes = useStyles();
    // const classes = useClasses(styles);

    const buttonStyle = {
        borderRadius: "100%",
        backgroundColor: "#85bb65"
    }
    const modalStyle = {
        // top: 300,
        // left: 100,
        // backgroundColor: "white"
    }
    const clickHandler = () =>{
        setShowForm(true);
    }
    const handleClose = ()=>{
        console.log('here')
        setShowForm(false);
    }

    return (
        <div>
            <Button variant="contained" sx={buttonStyle} onClick={clickHandler}>
                <AddIcon/>
            </Button> 
            {showForm? 
            // <ClickAwayListener onClickAway={handleClickAway}>
                <Modal
                open={showForm}
                onClose={handleClose}
                sx={modalStyle}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                >
                    <BudgetForm budget={budget} budgetChange={budgetChange} setShowForm={setShowForm}/>
                </Modal>
                : 
            null
            }
        </div>
    )

}

export default AddBudget;