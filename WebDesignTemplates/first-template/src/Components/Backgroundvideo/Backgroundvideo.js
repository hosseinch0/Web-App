import React from "react";
import './backgroundvideo.css'

var Source = "/fashionvideo.mp4";
const Backgroundvideo = () =>{
    return(
        <video className="video-background" autoPlay playsInline loop muted controlsList="nodownload">
            <source className="backgroundvideo" src={Source} type="video/mp4"/>
          </video>
        );
};

export default Backgroundvideo