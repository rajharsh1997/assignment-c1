import { Fab }  from '@material-ui/core';
import { Typography } from '@material-ui/core';
import  React  from 'react';
import"./About.css";
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

export default function About(){
    return(
        
        <div className="about">
            <div className="about-wrapperl1">
                <div>
                    <Typography 
                    variant="h5" 
                    className="bold">
                        About <font color="#A11D2F">BRILYANT.</font>
                    </Typography>
                </div>
                <div className="padding-top">
                    <Typography>
                        Being the Leading Managed Services Provider in Indian IT Landscape, we strive to be the missing peice of our customer's buisness puzzle. With our strong strategic partnerships we provide a complete suite of best of the class IT solutions and services along-with unparalleled customer service which enables us to build long term mutually beneficial relationships with our customers.
                    </Typography>
                </div>
                
                <div className="about-wrapperer paddingTop20">
                    <Fab size="medium" color="secondary" aria-label="go">
                        <ArrowRightAltIcon />
                    </Fab>
                    <Typography color="secondary" style={{paddingLeft:"10px",cursor:"pointer",fontweight:"800"}}>READ MORE
                    </Typography>
                </div>
            </div>
        </div>
        
    );
} 