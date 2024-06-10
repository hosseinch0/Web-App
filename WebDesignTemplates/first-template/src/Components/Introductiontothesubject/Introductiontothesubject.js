import React from "react";
import './Introductiontothesubject.css';
import LinkButton from "../LinkButton/LinkButton";

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
                  <LinkButton>here is the best styles for you!</LinkButton> 
            </div>  
        </container>
    );
}
export default Introductiontothesubject