import  {Typography } from '@material-ui/core';
import  {Fab} from '@material-ui/core';
import  React  from 'react';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import "./CustomerContainer.css";

export default function CustomerContainer(){
    return(
        <>
        <div className="body-wrapper">
            <div className="main-content">
                <div className="main-heading">
                    <Typography variant="h3" className="bold">Build Your IT for Growth</Typography>
                </div>
                <div className="main-heading">
                    <Typography variant="h5" className="bold paddingTop15">India's Leading Managed Services Provider</Typography>
                    <Typography variant="caption" className="font14">Meacenas libero maurides,soddales cursus quam sed, consectetur rutrum orci.</Typography>
                </div>
                <div className="main-label">
                    <Fab size="medium" color="secondary" aria-label="go" >
                        <ArrowRightAltIcon />
                    </Fab>
                    <Typography color="secondary" style={{paddingLeft:"10px",cursor:"pointer",fontWeight:"bolder"}} >KNOW MORE ABOUT OUR SERVICES</Typography>
                </div>
                <div className="main-info">
                    <div className="one-fifth help-customers" >
                    <Typography className="font16" style={{width:"140px"}}>Helping customers across  <span className="bold font18"> India</span></Typography>
                    </div>
                    <div className="one-fifth">
                        <span className="font36 bold">8+</span>
                        <span className="font14 bold paddingTop5">LOCATIONS</span>  
                        <div class="underline width10 marginTop5"></div>                   
                    </div>
                    <div className="one-fifth">
                        <span className="font36 bold">50+</span>
                        <span className="font14 bold paddingTop5">PARTNERS</span>
                        <div class="underline width20 marginTop5"></div>                         
                    </div>
                    <div className="one-fifth">
                        <span className="font36 bold">1000+</span>
                        <span className="font14 bold paddingTop5">CUSTOMERS</span>
                        <div class="underline width40 marginTop5"></div>                      
                    </div>
                    <div className="one-fifth">
                        <span className="font36 bold ">5000+</span>
                        <span className="font14 bold paddingTop5">PROJECTS</span>
                        <div class="underline width40 marginTop5"></div>               
                    </div>
                </div>
                <div className="main-heading">
                    <div>
                        <Typography className="bold font14">OUR CUSTOMERS</Typography>
                    </div>
                    <div className="main-customers">
                        <div className="equal9">
                        <img src="https://res.cloudinary.com/cr7waowww/image/upload/v1607404512/Walmart_logo_transparent_png-700x184_soxkx3.png" width="100px" alt="Walmart" height="50px"/>
                        </div>
                        <div className="equal9">
                        <img src="https://res.cloudinary.com/cr7waowww/image/upload/v1607403750/cure-fit-squarelogo-1558695311551_gdudvs.png" width="100px" alt="cult" height="50px" />
                        </div>
                        <div className="equal9">
                        <img src="https://res.cloudinary.com/cr7waowww/image/upload/v1607403752/paytmlogo_e9zgs6.png" height="50px" width="100px" alt="paytm"/>
                        </div>
                        <div className="equal9">
                        <img src="https://res.cloudinary.com/cr7waowww/image/upload/v1607403752/swiggy-logo_vanpg2.png" height="50px" width="100px" alt="Swiggy"/>
                        </div>
                        <div className="equal9">
                        <img src="https://res.cloudinary.com/cr7waowww/image/upload/v1607403752/visa-logo_mvz8mb.png"  height="50px" width="100px" alt="Visa"/>
                        </div>
                        <div className="equal9">
                        <img src="https://res.cloudinary.com/cr7waowww/image/upload/v1607403750/eli-lilly-and-company_logo_ug1ouv.png" height="50px" width="100px" alt="Lilly"/>
                        </div>
                        <Fab size="small"  aria-label="go" className="equal9">
                            <ArrowRightAltIcon />
                        </Fab>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
} 