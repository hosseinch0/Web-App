import React from "react";
import './Fashion.css';

const Fashion = ({children}) =>{
    return(
        <div className="fashioninformationbox">
                {children}
        </div>
    );
}
export default Fashion