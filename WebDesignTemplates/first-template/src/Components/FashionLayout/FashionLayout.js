import React from "react";
import ImageAlbum from "../ImageAlbum/ImageAlbum";
import './FashionLayout.css';

const FashionLayout = () =>{

    return(
     <div className="partition">
        <div className="leftsidebox">
                            <div className="tbox">
                                hello!
                                my name is faraz 
                                and this is my first react template 
                                and this a onlineshop website
                                welcome to my site!
                            </div>
                            <div className="tbox">
                            hello!
                                my name is faraz 
                                and this is my first react template 
                                and this a onlineshop website
                                welcome to my site!
                            </div>
                        </div>
        <div className="rightsidebox"> 
            <div className="textbox">
                                my name is faraz 
                                and this is my first react template 
                                and this a onlineshop website
                                welcome to my site!
            </div>   
            <ImageAlbum/>
            <div className="textbox">
                                my name is faraz 
                                and this is my first react template 
                                and this a onlineshop website
                                welcome to my site!
            </div>
        </div>
    </div>

);};
export default FashionLayout;