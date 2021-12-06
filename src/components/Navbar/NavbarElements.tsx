
import React from 'react';
import '../../App.css';
import "./Navbar.css";
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import logo from "../../images/kaineBorder.png";
import { Link, NavLink } from 'react-router-dom';

function Navigation() {
    return (

        <Navbar className="nav-bar" expand="lg" sticky="top">
            <Container>
                <Navbar.Brand as={Link} to="." className="d-inline-block align-top"><img src={logo} className="App-logo" alt="logo" /></Navbar.Brand>
                <h1 className="nav-title col" ><NavLink to=".">Kaine Simpkins</NavLink></h1>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Container className="nav-selections" >
                        <Nav className="m-auto" id="nav-top">
                            <Nav.Link as={Link} to="/" className="nav-text">Home</Nav.Link>
                            <Nav.Link as={Link} to="/about" className="nav-text">About Me</Nav.Link>
                            <NavDropdown
                                className="nav-dropdown"
                                title={
                                    <span className="nav-text">My Stuff</span>
                                }>
                                    <NavDropdown.Header> Projects </NavDropdown.Header>
                                <NavDropdown.Divider />
                                <NavDropdown.Item className="nav-dropdown" as={Link} to="/my-stuff/programming">🖥️ Programming</NavDropdown.Item>
                                <NavDropdown.Item  className="nav-dropdown"as={Link} to="/my-stuff/games">🎮 Games</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Container>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;