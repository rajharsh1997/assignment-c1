import React from "react";
import "./Footer.css";
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import TelegramIcon from '@material-ui/icons/Telegram';

export default function Footer(props){
 return(
     <>
        <div className="footer">
            <div className="footer-content">
                <div className="one-fifth-footer">
                    <ul className="footer-menu">
                        <li className="menu-heading"><a>MANAGED SERVICES</a></li>
                        <li className="menu-item">COLLABORATION SERVICES</li>
                        <li className="menu-item">DIGITAL TRANSFORMATION</li>
                        <li className="menu-item">ENTERPRISE SECURITY SERVICES</li>
                        <li className="menu-item">NETWORK AS A PLATFORM</li>
                        <li className="menu-item">NEXT GEN DATACENTRE SERVICES</li>
                    </ul>
                </div>
                <div className="one-fifth-footer">
                    <ul className="footer-menu">
                        <li className="menu-heading">ENTERPRISE SOLUTIONS</li>
                        <li className="menu-item">APPLE AT WORK</li> 
                        <li className="menu-item">AV SOLUTIONS</li>
                        <li className="menu-item">ENTERPRISE NETWORKING AND SECURITY</li>
                        <li className="menu-item">NETWORK AS A PLATFORM</li>
                        <li className="menu-item">END USER COMPUTING AND MOBILITY</li>
                        <li className="menu-item">MDM SOLUTIONS</li>
                    </ul>
                </div>
                <div className="one-fifth-footer  small-container">
                    <ul className="footer-menu">
                        <li className="menu-heading">EDUCATION</li>
                        <li className="menu-item">APPLE</li> 
                        <li className="menu-item">SAMSUNG</li>
                        <li className="menu-item">ADOBE</li>
                    </ul>
                </div>
                <div className="one-fifth-footer">
                    <ul className="footer-menu">
                        <li className="menu-heading">SERVICES</li>
                        <li  className="menu-item">APPLE AUTHORIZED SERVICE PROVIDER</li> 
                        <li className="menu-item">REMOTE DIAGNOSTICS</li>
                        <li className="menu-item">RESIDENT ENGINEER SERVICES</li>
                    </ul>
                </div>
                <div className="one-fifth-footer">
                <ul className="footer-menu">
                        <li className="main-item">BRILYANT</li>
                        <li className="menu-item">#915 & 916, 8th Floor, Oxford Towers, New Municipal No.139, Opp. Leela Palace, HAL Airport Road, Bangalore-560008</li>
                        <li>
                            <ul className="footer-inner-menu">
                                <li className="menu-item"><FacebookIcon /></li>
                                <li className="menu-item"><TwitterIcon /></li>
                                <li className="menu-item"><GitHubIcon /></li>
                                <li className="menu-item"><TelegramIcon /></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
            &#169; Brilyant IT Solution Pvt.Ltd. 2020 - All Rights Reserved

            </div>
        </div>
     
     </>
 );
}