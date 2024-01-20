import React, { useState, useEffect } from "react";
import "../../components/components.css";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import { getMedicationApi, getFirstNameApi } from "../../Api";
import {Table} from "antd";


export default function PatientPortal() {

    const fetchNameData = async () => {
        const res = await getFirstNameApi();
        setFirstName(res);
    }

    const [firstName, setFirstName] = useState("");

    const [counter, setCounter] = useState(0);
    const [currentBPM, setcurrentBPM] = useState(60);
    const [averageBPM, setaverageBPM] = useState(75);
    const [data, setData] = useState([]);

    useEffect(() => {
 
          fetchData();
          fetchNameData();
        
      },[]);


    const fetchData = async () => {
     const res = await getMedicationApi();
     setData(res);
    }
    const columns = [
        {
          title: "Name",
          dataIndex: "name",
          key: "name",
          responsive: ["sm", "md", "lg", "xl"],
          render: (name) => <h4 className="text-[15px]">{name}</h4>,
        },
        {
            title: "Frequency",
            dataIndex: "frequency",
            key: "name",
            responsive: ["sm", "md", "lg", "xl"],
            render: (name) => <h4 className="text-[15px]">{name}</h4>,
          },
          {
            title: "Dosage",
            dataIndex: "dosage",
            key: "name",
            responsive: ["sm", "md", "lg", "xl"],
            render: (name) => <h4 className="text-[15px]">{name}</h4>,
          },
    ]
    
    const getGraphData = () => {
        switch (counter) {
            case 0:
                return [65, 70, 80, 65, 60, 75, 82, 86, 88, 75, 56, 69];
            case 1:
                return [97.5, 100.5, 98.5,97.5, 100.5, 98.5,97.5, 100.5, 98.5,97.5, 100.5, 98.5];
            case 2:
                return [98, 97, 99, 96, 98, 97, 95, 96, 98, 99, 97, 96];
            case 3:
                return [60, 62, 61, 63, 64, 65, 63, 62, 61, 60, 62, 64];
            case 4:
                return [1.3, 3.3, 2.5, 5.6, 4.0, 5.5, 3.2, 1.2, 1.1, 1.5, 2.5, 2.6];
            case 5:
                return [7, 6.5, 8, 7.5, 6, 7, 6.5, 7, 8, 7, 6.5, 7];
            // Add cases for other options...
            default:
                return lineGraphData; // Default dataset
        }
    };

    const getGraphLabel = () => {
        switch (counter) {
            case 0:
                return 'Average BPM per Month';
            case 1:
                return 'High Body Temp per Month';
            case 2:
                return "Low SPO2 per Month";
            case 3:
                return "Average ECG per Month";
            case 4:
                return "Activity";
            case 5:
                return "Sleep";
            // Add cases for other options...
            default:
                return lineGraphData; // Default dataset
        }
    };

    const getGraphColor = () => {
        switch (counter) {
            case 0:
                return 'rgb(255, 87, 51)';
            case 1:
                return 'rgb(193, 100, 193)';
            case 2:
                return 'rgb(75, 192, 192)';
            case 3:
                return 'rgb(100, 100, 100 )';
            case 4:
                return 'rgb(144, 12, 63)';
            case 5:
                return 'rgb(255, 209, 220)';
            // Add cases for other options...
            default:
                return lineGraphData; // Default dataset
        }
    };
    
    const getBoarderColor = () => {
        switch (counter) {
            case 0:
                return 'rgba(255, 87, 51, 0.2)';
            case 1:
                return 'rgba(193, 100, 193, 0.2)';
            case 2:
                return 'rgba(75, 192, 192,.2)';
            case 3:
                return 'rgba(100, 100, 100 , 0.2)';
            case 4:
                return 'rgba(144, 12, 63, 0.2)';
            case 5:
                return 'rgba(255, 0, 220, 0.2)';
            // Add cases for other options...
            default:
                return lineGraphData; // Default dataset
        }
    };
    
    
    

    const lineGraphData = {
        //labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        labels: ['', '', '', '', '', '', '', '', '', '', '', ''],
        datasets: [
            {
                label: getGraphLabel(),
                data: getGraphData(),
                fill: false,
                backgroundColor: getGraphColor(),
                borderColor: getBoarderColor(),
            },
        ],
    };



    const lineGraphOptions = {
        
        maintainAspectRatio: false,
        scales: {

        }
    };

    // Function to handle arrow clicks
    const handleArrowClick = (direction) => {
        if (direction === 'left') {
            if (counter == 0){
                setCounter(5)
            }
            else{
            setCounter(prev => prev - 1);
            }
        } else if (direction === 'right') {
            if (counter == 5){
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
                return "Heart Rate";
            case 1:
                return "Body Temperature";
            case 2:
                return "SPO2";
            case 3:
                return "ECG";
            case 4:
                return "Activity";
            case 5:
                return "Sleep";
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
                    <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between" }} className="roundedBar h-3/4">
                        <div style={{display: "flex", flexDirection: "column"}}>
                            <div style={{flex:1}}></div>
                        <FontAwesomeIcon style={{flex:2}} icon={faArrowLeft} className="arrow-icon-left"
                        onClick={() => handleArrowClick('left')}/>
                         <div style={{flex:1}}></div>
                        </div>

                        <div style={{flex:.5}}>
                       
                        <p style={{fontSize:"25px", paddingTop:"10px"}}className="mainFont">{getTextBasedOnCounter()}</p>
                        </div>

                        <div style={{flex:2}}>
                        <div style={{display: "flex", flexDirection: "column", height:"100%"}}className="graph-container ">
                        <div style={{flex:2}}></div>
                        <div style={{height: '10px',flex:5,alignSelf:"center", justifySelf:"center"}} className="w-full">
                         <Line data={lineGraphData} options={lineGraphOptions} />
                         </div>
                         <div style={{flex:2}}></div>
                        </div>
                        </div>
                        
                        <div style={{flex:1, fontSize:"20px", display:"flex", flexDirection:"column",justifyContent: "space-around"  }} className="mainFont">
                            <div><p >Current</p>
                            <p style={{fontWeight:"bold"}}>{currentBPM} BPM</p></div>
                            <div><p>Average</p>
                            <p  style={{fontWeight:"bold"}} >{averageBPM} BPM</p></div>
                            
                        </div>
                        <div style={{display: "flex", flexDirection: "column"}}>
                            <div style={{flex:1}}></div>
                        <FontAwesomeIcon style={{flex:2}} icon={faArrowRight} className="arrow-icon-left"
                        onClick={() => handleArrowClick('right')}/>
                         <div style={{flex:1}}></div>
                        </div>
                        
                    </div>
                    <div style={{fontWeight: "bold"}} className="mainFont">
                        <p>
                            Feeling Unwell?
                        </p>
                        <p>
                        Start your personal health journey today
                        </p>
                        <div className="roundedBar h-full">
                            View Personal Health Analysis Forms
                        </div>
                    </div>
                </div>
                <div style={{flex:.1}}></div>
                <div style={{flex:1}}className="roundedBar w-full">
                {data && (
                    <Table
                    
                    columns={columns}
                    dataSource={data}
    
            
                    
                    />
                )}
                </div>
            </div>
        </div>
    );
}
