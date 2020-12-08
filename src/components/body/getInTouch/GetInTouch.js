import { Button, TextField, Typography } from '@material-ui/core';
import  React  from 'react';
import "./GetInTouch.css";
export default function GetInTouch(){
    return(
        <>
        <div className="get-in-touch">
         <div className="container">
            <Typography variant="h5"className="bold">Get in Touch</Typography>
            <div>
            <Typography className="paddingTop20 length">Nunc id nulla placerat, mattis ipsum sit amet, elementum est. Suspendisse potenti. Cras tempor urna sit amet.</Typography>
            </div>
            <div className="form">
                <div className="input">
                    <label className="bold">Full name</label>
                    <TextField id="filled-basic" className="field"  variant="filled" />
                </div>
                <div className="input">
                    <label className="bold">Email</label>
                    <TextField id="filled-basic" className="field" variant="filled" />
                </div>
                <div>
                    <Button variant="outlined" color="primary" className="btn">Reach out</Button>
                </div>
            </div>
         </div>
        </div>
        </>
    );
} 