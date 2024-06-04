import React from "react";
import {Link, Outlet} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome , faStore ,faPhone ,faVoicemail, faSearch } from '@fortawesome/free-solid-svg-icons';

import './Navbar.css'

const  Navbar = () =>{
    return(
        <div>
            <ui className="navbar">
                <div className="leftside">
                    <li><Link className="LINK" to="/"> <FontAwesomeIcon icon={faHome} size="6px"/> Home page </Link></li>
                    <li><Link className="LINK" to="shop"><FontAwesomeIcon icon={faStore} size="6px"/> Shop </Link></li>
                    <li><Link className="LINK" to="contactus"><FontAwesomeIcon icon={faPhone} size="6px"/> Contact us </Link></li>
                    <li><Link className="LINK" to="aboutus"><FontAwesomeIcon icon={faVoicemail} size="6px"/> About us </Link></li>
                </div>
                
                <div className="rightside">
                                <label><FontAwesomeIcon icon={faSearch} /></label>
                                <input type="search" id="searchbox" placeholder="Search..." ></input>
                </div>
            </ui>
            <Outlet/>
        </div>
    );
}

export default Navbar