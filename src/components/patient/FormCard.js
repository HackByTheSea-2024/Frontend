import React, { useState } from "react";
import "../components.css";

function FormCard(props) {
    console.log(props.data);
    return (
        <div style={{display: "flex", flexDirection: "column", textAlign: "left", marginTop: "30px", marginBottom: "30px", marginLeft: "70px", marginRight: "70px"}}>
            <div style={{padding: "15px"}} >
                <p className="mainFontBold"> Introduction: </p>
                {props.data.AIparagraph}
                
            </div>        
            <div style={{padding: "15px"}} >
                <p className="mainFontBold"> Raw Data: </p>
                {props.data.rawData}
                
            </div>
            <div style={{padding: "15px"}}>
                <p className="mainFontBold"> Doctor's Notes: </p>
                {props.data.doctorNotes}
                
            </div>
            <div style={{padding: "15px"}}>
            <p className="mainFont"> Signed. </p>
                {"Dr. Garg"}
                
            </div>
            
        </div>
    );
}

export default FormCard;
