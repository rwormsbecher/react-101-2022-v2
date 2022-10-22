import React, { useState } from "react";
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";

export const NavbarCompnent = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar className="navbar navbar-dark bg-primary" expand="md">
                <NavbarBrand href="/" className="mr-auto" style={{ marginLeft: "16px" }}>
                    Bootcamp finder
                </NavbarBrand>
                <NavbarToggler onClick={toggle} className="mr-2" />
                <Collapse isOpen={isOpen} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink to="/">Bootcamps</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/add-bootcamp">Add bootcamp</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
};
