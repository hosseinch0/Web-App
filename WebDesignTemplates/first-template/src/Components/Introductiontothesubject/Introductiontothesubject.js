import React from "react";
import './Introductiontothesubject.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const Introductiontothesubject = ({children}) =>{
    return(
        <container className="container">
            <div className="leftcontainer">
                <div className="text">
                    <main>
                        {children}
                    </main>      
                </div>
            </div>
            <div className="rightcontainer">
                <Link to="shop"><button className="link">Everything you want is here <FontAwesomeIcon icon={faAngleDoubleRight } size="20px"/></button></Link>    
            </div>  
        </container>
    );
}
export default Introductiontothesubject