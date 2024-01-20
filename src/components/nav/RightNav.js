import React from 'react';
import Nav from 'react-bootstrap/Nav';
import vitalSyncLogo from "../../images/vitalSyncLogo.png";
import "../../components/components.css"

export default function RightNav() {
    return (
        <div>
            <Nav style={{display:"flex", flexDirection:"row"}} className="navBar floatRight ml-10 mb-50">
                
                <Nav.Link className="mr-10 mt-6" href="/home">Account</Nav.Link>
            </Nav>
        </div>
    );
}
