import React, { useState, useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import HomeP from "../../pages/HomeP";
import vitalSyncLogo from "../../images/vitalSyncLogo.png";
import "../../components/components.css";

export default function NavBar() {
    return (
        <div>
            <Nav className="navBar floatLeft ml-10 mb-50">
                <Nav.Link
                    className="mr-5 d-flex align-items-center"
                    href="/home"
                >
                    <img
                        src={vitalSyncLogo}
                        alt="VitalSync Logo"
                        style={{
                            width: "30px",
                            height: "auto",
                            marginRight: "10px",
                        }}
                    />
                    <span>VitalSync</span>
                </Nav.Link>
                <Nav.Link className="mr-5" href="/home ">
                    About Us
                </Nav.Link>
                <Nav.Link className="mr-5" href="/instructors">
                    Patient Portal
                </Nav.Link>
                <Nav.Link className="mr-5" href="/mission">
                    Doctor Portal
                </Nav.Link>
            </Nav>
        </div>
    );
}
