import React from 'react';
import Nav from 'react-bootstrap/Nav';
import vitalSyncLogo from "../../images/vitalSyncLogo.png";
import "../../components/components.css"
import RightNav from './RightNav';

export default function NavBar() {
    return (
        <div>
            <Nav style={{display:"flex", flexDirection:"row"}} className="navBar floatLeft ml-10 mb-50">
                {/* Existing links */}
                
                <Nav.Link style={{display:"flex", flexDirection:"row", fontWeight: "bold"}} className="mr-20 align-items-center mainLink" href="/home">
                    <img 
                        src={vitalSyncLogo}
                        alt="VitalSync Logo"
                        style={{ width: '50px', height: 'auto', marginRight: '10px' }} 
                    />
                    <span>VitalSync</span>
                </Nav.Link>
                <Nav.Link className="mr-20 mt-6" href="/home">About Us</Nav.Link>
                <Nav.Link className="mr-20 mt-6" href="/patient">Patient Portal</Nav.Link>
                <Nav.Link className="mr-20 mt-6" href="/mission">Doctor Portal</Nav.Link>

            </Nav>
            <RightNav/>
        </div>
    );
}
