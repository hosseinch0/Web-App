import React from "react";
import Navbar from "../Layout/Navbar/Navbar";
import Websitefooter from "./../Layout/Footer/Footer";


const Configuration = ({children}) =>{
    return (
        <div className="configuration">

            <Navbar/>
            <main>
                {children}
            </main>

            <Websitefooter/>

        </div>
    );

};

export default Configuration