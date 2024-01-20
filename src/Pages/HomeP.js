import React, { useState } from "react";
import Home from "../components/Home";
import NavBar from "../components/nav/NavBar";

export default function HomeP() {


    return(
        <div style={{display:"flex", flexDirection:"column"}}>
            <NavBar/>
            <Home/>
        </div>
    );
}