import React, { useState } from "react";
import "../components.css";

function FormCard(props) {
    console.log(props.data);
    return (
        <div>
            {props.data.AIparagraph}
            {props.data.doctorNotes}
            {props.data.rawData}
            {"Yogi Garg"}
        </div>
    );
}

export default FormCard;
