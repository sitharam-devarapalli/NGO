// src/components/Header/Header.js
import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./Header.css";
import Logo from "../../assets/ngo-logo.png";

const Header = () => {
  return (
    <header className="hotel-header">
      <Navbar expand="lg" fixed="top" className="hotel-header-navbar">
        <Container fluid className="hotel-header-section">
          <Navbar.Brand href="/" className="hotel-header-brand">
            <img src={Logo} alt="Logo" height="50" />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="hotel-header-toggler"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto hotel-header-nav">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About Us</Nav.Link>
              <Nav.Link href="/rooms">Our Programs</Nav.Link>
              <Nav.Link href="/gallery">Members Login</Nav.Link>
              <Nav.Link href="/contact">Contact Us</Nav.Link>
            </Nav>
            <button className="hotel-header-book-btn">Donate</button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
