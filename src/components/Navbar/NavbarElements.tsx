
import React, { useEffect } from 'react';
import '../../App.css';
import "./Navbar.css";
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import logo from "../../images/MainMoin.jpg";
import { Link, NavLink } from 'react-router-dom';

function Navigation() {

    //<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3441097416467374"
    //crossorigin="anonymous"></script>

    useEffect(() => {
        const script = document.createElement("script");
        script.setAttribute("src", "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3441097416467374");
        script.setAttribute("crossorigin", "anonymous");
        document.head.appendChild(script);
        return () => {
          document.head.removeChild(script);
        }
    }, []);


    return (

        <Navbar className="nav-bar" expand="lg" sticky="top">
            <Container>
                <Navbar.Brand as={Link} to="/" className="d-inline-block align-top"><img src={logo} className="App-logo" alt="logo" /></Navbar.Brand>
                <h1 className="nav-title col" ><NavLink to="/">Karma</NavLink></h1>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Container className="nav-selections" >
                        <Nav className="m-auto" id="nav-top">
                            <Nav.Link as={Link} to="/" className="nav-text">Home</Nav.Link>
                            <Nav.Link as={Link} to="/about" className="nav-text">About Me</Nav.Link>
                            <NavDropdown
                                title={
                                    <span className="nav-text">My Stuff</span>
                                }>
                                <NavDropdown.Header> Projects </NavDropdown.Header>
                                <NavDropdown.Divider />
                                <Nav.Link className="nav-dropdown" as={Link} to="/my-stuff/programming">🖥️ Programming</Nav.Link>
                                <Nav.Link className="nav-dropdown" as={Link} to="/my-stuff/games">🎮 Games</Nav.Link>
                            </NavDropdown>
                        </Nav>
                    </Container>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;