import React, { useState } from "react";
import "../../components/components.css";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function PatientPortal() {
    const [firstName, setFirstName] = useState("Jai");

    const [counter, setCounter] = useState(0);

    // Function to handle arrow clicks
    const handleArrowClick = (direction) => {
        if (direction === 'left') {
            if (counter == 0){
                setCounter(4)
            }
            else{
            setCounter(prev => prev - 1);
            }
        } else if (direction === 'right') {
            if (counter == 4){
                setCounter(0)
            }
            else{
            setCounter(prev => prev + 1);
            }
        }
    };

    const getTextBasedOnCounter = () => {
        switch (counter) {
            case 0:
                return "Initial Text";
            case 1:
                return "Text for Counter 1";
            case 2:
                return "Text for Counter 2";
            // Add more cases as needed
            default:
                return "Default Text";
        }
    };
    


    return (
        <div style={{ display: "flex", flexDirection: "column", height: "100vh" }} className="alignLeft pl-20 pr-20">
            <div>
                <p className="title mainFont text-5xl font-semibold">
                    {firstName}'s Portal
                </p>

                <div className="roundedBar mt-20">
                    Some text in a rounded rectangular bar
                </div>

                {/* Other content */}
            </div>

            <div style={{ flex: 1, display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                
                <div style={{flex:2}}className="w-full">
                    <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between" }} className="roundedBar h-2/4">
                        <FontAwesomeIcon icon={faArrowLeft} className="arrow-icon-left pt-9"
                        onClick={() => handleArrowClick('left')}/>
                        
                       
                        <p>{getTextBasedOnCounter()}</p>
                        
                        <FontAwesomeIcon icon={faArrowRight} className="arrow-icon-left pt-9"
                        onClick={() => handleArrowClick('right')}/>
                    </div>
                    <div className="mainFont">
                        <p>
                            Feeling Unwell?
                        </p>
                        <p>
                        Start your personal health journey today
                        </p>
                        <div className="roundedBar h-10">
                            View Personal Health Analysis Forms
                        </div>
                    </div>
                </div>
                <div style={{flex:.1}}></div>
                <div style={{flex:1}}className="roundedBar w-full"></div>
            </div>
        </div>
    );
}
