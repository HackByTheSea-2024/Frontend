import React, { useState, useEffect } from "react";
import "../../components/components.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import { getMedicationApi, getFirstNameApi, getPatientDataApi } from "../../Api";
import { Table } from "antd";
import useAuth from "../hooks/useAuth";

export default function PatientPortal() {
    const {auth} = useAuth();
    const fetchNameData = async () => {
        const res = await getFirstNameApi();
        setFirstName(res);
    };

   // console.log(auth._id)
    const fetchPatientData = async () => {
        const res = await getPatientDataApi();
        setPatientData(res);
        console.log(res.DOB);
    }
    const [firstName, setFirstName] = useState("");

    const [counter, setCounter] = useState(0);
    const [currentBPM, setcurrentBPM] = useState(60);
    const [averageBPM, setaverageBPM] = useState(75);
    const [data, setData] = useState([]);
    const [patientData, setPatientData] = useState([]);


    useEffect(() => {
        fetchData();
        fetchNameData();
        fetchPatientData();
    }, []);

    const fetchData = async () => {
        const res = await getMedicationApi();
        setData(res);
    };
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
    ];

    const getGraphData = () => {
        switch (counter) {
            case 0:
                return [65, 70, 80, 65, 60, 75, 82, 86, 88, 75, 56, 69];
            case 1:
                return [
                    97.5, 100.5, 98.5, 97.5, 100.5, 98.5, 97.5, 100.5, 98.5,
                    97.5, 100.5, 98.5,
                ];
            case 2:
                return [98, 97, 99, 96, 98, 97, 95, 96, 98, 99, 97, 96];
            case 3:
                return [60, 62, 61, 63, 64, 65, 63, 62, 61, 60, 62, 64];
            case 4:
                return [
                    1.3, 3.3, 2.5, 5.6, 4.0, 5.5, 3.2, 1.2, 1.1, 1.5, 2.5, 2.6,
                ];
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
                return "Average BPM per Month";
            case 1:
                return "High Body Temp per Month";
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
                return "rgb(255, 87, 51)";
            case 1:
                return "rgb(193, 100, 193)";
            case 2:
                return "rgb(75, 192, 192)";
            case 3:
                return "rgb(100, 100, 100 )";
            case 4:
                return "rgb(144, 12, 63)";
            case 5:
                return "rgb(255, 209, 220)";
            // Add cases for other options...
            default:
                return lineGraphData; // Default dataset
        }
    };

    const getBoarderColor = () => {
        switch (counter) {
            case 0:
                return "rgba(255, 87, 51, 0.2)";
            case 1:
                return "rgba(193, 100, 193, 0.2)";
            case 2:
                return "rgba(75, 192, 192,.2)";
            case 3:
                return "rgba(100, 100, 100 , 0.2)";
            case 4:
                return "rgba(144, 12, 63, 0.2)";
            case 5:
                return "rgba(255, 0, 220, 0.2)";
            // Add cases for other options...
            default:
                return lineGraphData; // Default dataset
        }
    };

    const lineGraphData = {
        //labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        labels: ["", "", "", "", "", "", "", "", "", "", "", ""],
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
        scales: {},
    };

    // Function to handle arrow clicks
    const handleArrowClick = (direction) => {
        if (direction === "left") {
            if (counter == 0) {
                setCounter(5);
            } else {
                setCounter((prev) => prev - 1);
            }
        } else if (direction === "right") {
            if (counter == 5) {
                setCounter(0);
            } else {
                setCounter((prev) => prev + 1);
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

    const [devices, setDevices] = useState([]);
    const [connectedDevice, setConnectedDevice] = useState(null);
// Define the UUIDs for the services and characteristics
const UUID16_SVC_ECG_SERVICE = "6a400001-b5a3-f393-e0a9-e50e24dcca9e";
const UUID16_CHR_LA_LL_VOLTAGE_CHARACTERISTIC = "6a400002-b5a3-f393-e0a9-e50e24dcca9e";
const UUID16_CHR_RA_LL_VOLTAGE_CHARACTERISTIC = "6a400003-b5a3-f393-e0a9-e50e24dcca9e";

const onDeviceFound = (event) => {
    const device = event.device;
    setDevices(prevDevices => [...prevDevices, device]);
};

const scanForDevices = async () => {
    try {
        const options = {
            filters: [
                { services: [UUID16_SVC_ECG_SERVICE] }
            ],
            optionalServices: [UUID16_CHR_LA_LL_VOLTAGE_CHARACTERISTIC, UUID16_CHR_RA_LL_VOLTAGE_CHARACTERISTIC]
        };
        const device = await navigator.bluetooth.requestDevice(options);

        if (device.name && !device.name.includes("Unknown")) {
            setDevices(prevDevices => [...prevDevices, device]);
        }
    } catch (error) {
        console.error('Error in scanning for devices:', error);
    }
};

const onCharacteristicValueChanged1 = (event) => {
    const value = event.target.value;
    const bpmValue = value.getUint16(0, true); // Modify this line based on how your data is structured
    setcurrentBPM(bpmValue); // Update currentBPM
};

const onCharacteristicValueChanged2 = (event) => {
    const value = event.target.value;
    const bpmValue = value.getUint16(0, true); // Modify this line based on how your data is structured
    setaverageBPM(bpmValue);
};

const connectToDevice = async (device) => {
    try {
        const server = await device.gatt.connect();
        const service = await server.getPrimaryService(UUID16_SVC_ECG_SERVICE);

        const laLlCharacteristic = await service.getCharacteristic(UUID16_CHR_LA_LL_VOLTAGE_CHARACTERISTIC);
        await laLlCharacteristic.startNotifications();
        laLlCharacteristic.addEventListener('characteristicvaluechanged', onCharacteristicValueChanged2);

        const raLlCharacteristic = await service.getCharacteristic(UUID16_CHR_RA_LL_VOLTAGE_CHARACTERISTIC);
        await raLlCharacteristic.startNotifications();
        raLlCharacteristic.addEventListener('characteristicvaluechanged', onCharacteristicValueChanged1);

        // Store a reference to the characteristics for later use (e.g., removing event listeners)
        setConnectedDevice({ 
            device,
            laLlCharacteristic,
            raLlCharacteristic
        });

    } catch (error) {
        console.error('Error in connecting to device:', error);
    }
};

// Add useEffect to clean up when the component unmounts or the connected device changes
useEffect(() => {
    return () => {
        // Disconnect logic and remove event listeners
        if (connectedDevice) {
            const { laLlCharacteristic, raLlCharacteristic } = connectedDevice;
            if (laLlCharacteristic) {
                laLlCharacteristic.removeEventListener('characteristicvaluechanged', onCharacteristicValueChanged2);
            }
            if (raLlCharacteristic) {
                raLlCharacteristic.removeEventListener('characteristicvaluechanged', onCharacteristicValueChanged1);
            }
            // Additional disconnect logic...
        }
    };
}, [connectedDevice]);


    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                height: "100vh",
            }}
            className="alignLeft pl-20 pr-20"
        >
            <div>
                <p className="title mainFont text-5xl font-semibold">
                    {firstName}'s Portal
                </p>

                <div style={{ display: "flex", flexDirection: "row", justifyContent:"space-around" }} className="roundedBar mt-20">
                    <div>Date Of Birth: {patientData.DOB}</div>
                  
                    <div>Sex: {patientData.sex}</div>
                   
                    <div>Height: {patientData.height} inches</div>
                    
                    <div>Weight: {patientData.weight} pounds</div>
                  
                </div>

                {/* Other content */}
            </div>

            <div
                style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                }}
            >
                <div style={{ flex: 2 }} className="w-full">
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                        }}
                        className="roundedBar h-3/4"
                    >
                        <div
                            style={{ display: "flex", flexDirection: "column" }}
                        >
                            <div style={{ flex: 1 }}></div>
                            <FontAwesomeIcon
                                style={{ flex: 2 }}
                                icon={faArrowLeft}
                                className="arrow-icon-left"
                                onClick={() => handleArrowClick("left")}
                            />
                            <div style={{ flex: 1 }}></div>
                        </div>

                        <div style={{ flex: 0.5 }}>
                            <p
                                style={{ fontSize: "25px", paddingTop: "10px" }}
                                className="mainFont"
                            >
                                {getTextBasedOnCounter()}
                            </p>
                        </div>

                        <div style={{ flex: 2 }}>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    height: "100%",
                                }}
                                className="graph-container "
                            >
                                <div style={{ flex: 2 }}></div>
                                <div
                                    style={{
                                        height: "10px",
                                        flex: 5,
                                        alignSelf: "center",
                                        justifySelf: "center",
                                    }}
                                    className="w-full"
                                >
                                    <Line
                                        data={lineGraphData}
                                        options={lineGraphOptions}
                                    />
                                </div>
                                <div style={{ flex: 2 }}></div>
                            </div>
                        </div>

                        <div
                            style={{
                                flex: 1,
                                fontSize: "20px",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-around",
                            }}
                            className="mainFont"
                        >
                            <div>
                                <p>Current</p>
                                <p style={{ fontWeight: "bold" }}>
                                    {currentBPM} BPM
                                </p>
                            </div>
                            <div>
                                <p>Average</p>
                                <p style={{ fontWeight: "bold" }}>
                                    {averageBPM} BPM
                                </p>
                            </div>
                        </div>
                        <div
                            style={{ display: "flex", flexDirection: "column" }}
                        >
                            <div style={{ flex: 1 }}></div>
                            <FontAwesomeIcon
                                style={{ flex: 2 }}
                                icon={faArrowRight}
                                className="arrow-icon-left"
                                onClick={() => handleArrowClick("right")}
                            />
                            <div style={{ flex: 1 }}></div>
                        </div>
                    </div>
                    <div style={{ fontWeight: "bold" }} className="mainFont">
                        <p>Feeling Unwell?</p>
                        <p>Start your personal health journey today</p>
                        <a
                            style={{ display: "block" }}
                            className="roundedBar h-full"
                            href="/patient/forms"
                        >
                            View Personal Health Analysis Forms
                        </a>
                    </div>
                </div>
                <div style={{ flex: 0.1 }}></div>
                <div style={{flex: 1, display:"flex", flexDirection:"column"}}>
                    <div style={{ flex: 6 }} className="roundedBar w-full">
                        {data && <Table columns={columns} dataSource={data} />}
                    </div>
                    <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center", flexGrow: 1 }} >
                        <button onClick={scanForDevices}>Scan for Devices</button>
                        <ul>
                            {devices.map((device, index) => (
                                <li key={index} onClick={() => connectToDevice(device)}>
                                    {device.name || 'Unknown Device'}
                                </li>
                            ))}
                        </ul>
                        {connectedDevice && (
                            <div>
                                Connected to {connectedDevice.device.name}: Battery Level {connectedDevice.batteryLevel}%
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
