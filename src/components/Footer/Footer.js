import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
    FaAngleDoubleRight,
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaEnvelope,
    FaFacebookF,
    FaLinkedinIn,
    FaInstagram,
} from "react-icons/fa";
import "./Footer.css";
import { FaWhatsapp } from "react-icons/fa6";
import logo from '../../assets/ngo-footer.png';


const Footer = () => {
    return (
        <footer className="footer-section text-white">
            <div className="footer-overlay">
                <Container fluid>
                    <Row className="py-5">
                        {/* About */}
                        <Col md={3} sm={6} className="mb-4">
                            <h5 className="footer-title">About Us</h5>
                            <div className="footer-logo mb-3">
                                <img src={logo} alt="Digisphere Logo" style={{ width: "120px", height: "auto" }} />
                            </div>
                            <p className="footer-text">
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry's standard dummy text
                                ever since the 1500s.
                            </p>
                        </Col>

                        {/* Helpful Links */}
                        <Col md={3} sm={6} className="mb-4">
                            <h5 className="footer-title">Helpful Links</h5>
                            <ul className="footer-links">
                                {[
                                    { label: "Home", href: "/" },
                                    { label: "About Us", href: "/about" },
                                    { label: "Our Programs", href: "/programs" },
                                    { label: "Member Login", href: "/login" },
                                    { label: "Contact Us", href: "/contact" },
                                    { label: "Donate", href: "/donate" },
                                ].map((link, i) => (
                                    <li key={i}>
                                        <FaAngleDoubleRight className="footer-icon" />
                                        <a href={link.href}>{link.label}</a>
                                    </li>
                                ))}
                            </ul>
                        </Col>

                        {/* Services */}
                        <Col md={3} sm={6} className="mb-4">
                            <h5 className="footer-title">Our Services</h5>
                            <ul className="footer-links">
                                {[
                                    { label: "Enrichment", href: "/services/enrichment" },
                                    { label: "Education", href: "/services/education" },
                                    { label: "Empowerment", href: "/services/empowerment" },
                                    { label: "Impact Stories", href: "/impact-stories" },
                                ].map((item, i) => (
                                    <li key={i}>
                                        <FaAngleDoubleRight className="footer-icon" />
                                        <a href={item.href}>{item.label}</a>
                                    </li>
                                ))}
                            </ul>
                        </Col>

                        {/* Contact */}
                        <Col md={3} sm={6}>
                            <h5 className="footer-title">Contact Us</h5>
                            <ul className="footer-contact">
                                <li>
                                    <FaMapMarkerAlt className="footer-icon" />
                                    <span>Key Relief Foundation<br />Full Address Here</span>
                                </li>
                                <li>
                                    <FaPhoneAlt className="footer-icon" />
                                    <a href="tel:+919999888822">+91-9999-8888-22</a>
                                </li>
                                <li>
                                    <FaEnvelope className="footer-icon" />
                                    <a href="mailto:contact@keyrelief.org">contact@keyrelief.org</a>
                                </li>
                            </ul>
                            <div className="footer-social mt-3">
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                    <FaFacebookF />
                                </a>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                    <FaLinkedinIn />
                                </a>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                    <FaWhatsapp />
                                </a>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                    <FaInstagram />
                                </a>
                            </div>
                        </Col>
                    </Row>

                    <Row className="border-top pt-3">
                        <Col className="text-center">
                            <small>
                                © All Rights Reserved By{' '}
                                <a href="https://digispheretech.in/" target="_blank" rel="noopener noreferrer" className="digisphere">
                                    Digisphere
                                </a>
                            </small>
                        </Col>
                    </Row>
                </Container>
            </div>
        </footer>
    );
};

export default Footer;
