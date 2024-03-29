import React from "react";
import Nav from "react-bootstrap/Nav";
import vitalSyncLogo from "../../images/vitalSyncLogo.png";
import "../../components/components.css";

export default function NavBar() {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: window.innerWidth,
            }}
        >
            <Nav
                style={{ display: "flex", flexDirection: "row" }}
                className="navBar floatLeft ml-10 mb-50"
            >
                {/* Existing links */}

                <Nav.Link
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        fontWeight: "bold",
                    }}
                    className="mr-20 align-items-center mainLink"
                    href="/home"
                >
                    <img
                        src={vitalSyncLogo}
                        alt="VitalSync Logo"
                        style={{
                            width: "50px",
                            height: "auto",
                            marginRight: "10px",
                        }}
                    />
                    <span>VitalSync</span>
                </Nav.Link>
                <Nav.Link className="mr-20 mt-6" href="/home">
                    About Us
                </Nav.Link>
                <Nav.Link className="mr-20 mt-6" href="/patient">
                    Patient Portal
                </Nav.Link>
                <Nav.Link className="mr-20 mt-6" href="/doctor">
                    Doctor Portal
                </Nav.Link>
            </Nav>
            <Nav className="navBar pt-5">
                <Nav.Link className="mr-20 mt-6" href="/home">
                    Account
                </Nav.Link>
            </Nav>
        </div>
    );
}
