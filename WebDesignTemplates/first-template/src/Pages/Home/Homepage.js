import React from "react";
import './Home.css';
import Backgroundvideo from "../../Components/Backgroundvideo/Backgroundvideo";
import Introductiontothesubject  from "../../Components/Introductiontothesubject/Introductiontothesubject";

const Homepage = () => {
    return (
        <div className="HomePage">
       
                    <Backgroundvideo/>
                    <Introductiontothesubject>
                        <h1>Have The Best With US...</h1>
                        <h2>Create your best style here...</h2>
                    </Introductiontothesubject>        
                          
        </div>
    )
}
export default Homepage