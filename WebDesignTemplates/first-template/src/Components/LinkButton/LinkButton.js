import React from "react"; 
import './LinkButton.css'; 
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";

const LinkButton = ({children}) =>{
    return(
        <Link className="link" to="shop">{children} <FontAwesomeIcon icon={faAngleDoubleRight } size="20px"/></Link>
    );
};
export default LinkButton