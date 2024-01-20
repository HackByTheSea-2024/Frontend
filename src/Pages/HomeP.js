import React, { useState } from "react";
import Home from "../components/Home";
import NavBar from "../components/nav/NavBar";


export default function HomeP() {


    return(
        <div className="full-height-container gradient-background">
        <div style={{display:"flex", flexDirection:"column"}}>
            <div style={{marginBottom:150}}><NavBar/></div>
            <Home/>
        </div>
        </div>
    );

}