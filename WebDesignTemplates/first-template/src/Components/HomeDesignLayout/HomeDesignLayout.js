import React from "react";
import ImageAlbum from "../ImageAlbum/ImageAlbum";
import './HomeDesignLayout.css';

const HomeDesignLayout = () =>{

    return(
     <div className="partitionhomedesign">
       
        <div className="rightsideboxhomedesign"> 
            <div className="textboxhomedesign">
                my name is faraz 
                and this is my first react template 
                and this a onlineshop website
                welcome to my site!
            </div>   
            <ImageAlbum/>
            <div className="textboxhomedesign">
                my name is faraz 
                and this is my first react template 
                and this a onlineshop website
                welcome to my site!
            </div>
        </div>
        <div className="leftsideboxhomedesign">
            <div className="tboxhomedesign">
                hello!
                my name is faraz 
                and this is my first react template 
                and this a onlineshop website
                welcome to my site!
            </div>
            <div className="tboxhomedesign">
            hello!
                my name is faraz 
                and this is my first react template 
                and this a onlineshop website
                welcome to my site!
            </div>
        </div>
    </div>

);};
export default HomeDesignLayout;