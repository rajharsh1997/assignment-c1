import { Typography } from '@material-ui/core';
import  React  from 'react';
import "./ServicesAndOfferings.css";
import MemoryIcon from '@material-ui/icons/Memory';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import MobileFriendlyIcon from '@material-ui/icons/MobileFriendly';
import SecurityIcon from '@material-ui/icons/Security';
import DomainIcon from '@material-ui/icons/Domain';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import SettingsInputHdmiIcon from '@material-ui/icons/SettingsInputHdmi';
import EcoIcon from '@material-ui/icons/Eco';

export default function ServicesAndOfferings(){
    return(
        <>
        <div className="services">
            <div className="servces-container">
                <Typography variant="h6" className="colorGray bold" >SERVICES & OFFERINGS</Typography>
                <Typography variant="h5" className="bold paddingTop20">We create value and help your business grow. </Typography>
                <Typography className="bold paddingTop10">Nunc id nulla placerat, mattis ipsum sit amet, elementum est. Suspendisse potenti.</Typography>
                <div className="grid">
                    <div className="grid-element">
                        <MemoryIcon fontSize="large"/>
                        <Typography variant="subtitle1" className="bold font18 paddingTop5">Compute</Typography>
                        <Typography className="paddingTop5">Nunc id nulla placerat, mattis ipsum sit amet, elementum est. Suspendisse potenti.</Typography>
                    </div>
                    <div className="grid-element">
                        <MonetizationOnIcon fontSize="large"/>
                        <Typography variant="subtitle1" className="bold font18 paddingTop5">Financing</Typography>
                        <Typography className="paddingTop5">Nunc id nulla placerat, mattis ipsum sit amet, elementum est. Suspendisse potenti.</Typography>
                    </div>
                    <div className="grid-element">
                        <FlightTakeoffIcon fontSize="large"/>
                        <Typography variant="subtitle1" className="bold font18 paddingTop5">Management and Deployment</Typography>
                        <Typography className="paddingTop5">Nunc id nulla placerat, mattis ipsum sit amet, elementum est. Suspendisse potenti.</Typography>
                    </div>
                    <div className="grid-element">
                        <ContactSupportIcon fontSize="large"/>
                        <Typography variant="subtitle1" className="bold font18 paddingTop5">Support</Typography>
                        <Typography className="paddingTop5">Nunc id nulla placerat, mattis ipsum sit amet, elementum est. Suspendisse potenti.</Typography>
                    </div>
                    <div className="grid-element">
                        <SettingsInputHdmiIcon fontSize="large"/>
                        <Typography variant="subtitle1" className="bold font18 paddingTop5">Collaboration & Connectivity</Typography>
                        <Typography className="paddingTop5">Nunc id nulla placerat, mattis ipsum sit amet, elementum est. Suspendisse potenti.</Typography>
                    </div>
                    <div className="grid-element">
                        <SecurityIcon fontSize="large"/>
                        <Typography variant="subtitle1" className="bold font18 paddingTop5">Network & Scurity</Typography>
                        <Typography className="paddingTop5">Nunc id nulla placerat, mattis ipsum sit amet, elementum est. Suspendisse potenti.</Typography>
                    </div>
                    <div className="grid-element">
                        <MobileFriendlyIcon fontSize="large"/>
                        <Typography variant="subtitle1" className="bold font18 paddingTop5">ESS & App Development</Typography>
                        <Typography className="paddingTop5">Nunc id nulla placerat, mattis ipsum sit amet, elementum est. Suspendisse potenti.</Typography>
                    </div>
                    <div className="grid-element">
                        <DomainIcon fontSize="large"/>
                        <Typography variant="subtitle1" className="bold font18 paddingTop5">Data Centers & Services</Typography>
                        <Typography className="paddingTop5">Nunc id nulla placerat, mattis ipsum sit amet, elementum est. Suspendisse potenti.</Typography>
                    </div>
                    <div className="grid-element">
                        <EcoIcon fontSize="large"/>
                        <Typography variant="subtitle1" className="bold font18 paddingTop5">e-Waste Management
                        </Typography>
                        <Typography className="paddingTop5">Nunc id nulla placerat, mattis ipsum sit amet, elementum est. Suspendisse potenti.</Typography>
                    </div>
                </div>
            </div>
        </div>
        
        </>
    );
} 