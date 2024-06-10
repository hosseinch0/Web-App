import React from "react";
import './Home.css';
import Backgroundvideo from "../../Components/Backgroundvideo/Backgroundvideo";
import Introductiontothesubject  from "../../Components/Introductiontothesubject/Introductiontothesubject";
import Fashion from "../../Components/Fashion/Fashion";
import FashionLayout from "../../Components/FashionLayout/FashionLayout";
import HomeDesign from "../../Components/HomeDesign/HomeDesign";
import HomeDesignLayout from "../../Components/HomeDesignLayout/HomeDesignLayout";

const video1 = "/fashionvideo.mp4";
const video2 = "/HomeDesign.mp4";

const Homepage = () => {
    return (
        <div className="HomePage">
            
            <div className="background">
                    <Backgroundvideo>{video1}</Backgroundvideo>
                    <Introductiontothesubject>
                        <h1>Have The Best With US</h1>
                        <h2>Create your best style here</h2>
                    </Introductiontothesubject>
            </div>
            <Fashion>
               <FashionLayout/>
            </Fashion>
            <div className="background">
                    <Backgroundvideo>{video2}</Backgroundvideo>
                    <Introductiontothesubject>
                        <h1>Design Your Place With US</h1>
                        <h2>All Of Your peace Is Here</h2>
                    </Introductiontothesubject>
            </div>
            <HomeDesign>
                <HomeDesignLayout/>
            </HomeDesign>

                           
                          
        </div>
    )
}
export default Homepage