// src/components/ContactUs/ContactUs.js
import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaYoutube, FaInstagram, FaWhatsapp } from "react-icons/fa";
import "./ContactUs.css";
import bannerImage from "../../assets/contact-us-banner.jpg";

const ContactUs = () => {
    return (

        <section className="contact-us">
            {/* contact Banner */}
            <div className="about-banner d-flex align-items-center justify-content-center"
                style={{
                    backgroundImage: `url(${bannerImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "400px",
                }}
            >
                <Container>
                    <h1 className="text-white text-center">Contact Us</h1>
                </Container>
            </div>

            <Container fluid className="contactus-sectiona">
                <Row>
                    {/* Contact Info Section */}
                    <Col md={5} className="contact-info">
                        <h5>Get In Touch</h5>
                        <p>
                            Connecting with us opens doors to new opportunities. Whether you
                            have questions, ideas, or want to collaborate, we’re here to listen.
                        </p>

                        <div className="info-box">
                            <FaPhoneAlt className="icon" />
                            <div>
                                <strong>Call Us</strong>
                                <p>(+91-9999-22-8888)</p>
                            </div>
                        </div>

                        <div className="info-box">
                            <FaEnvelope className="icon" />
                            <div>
                                <strong>Email Us</strong>
                                <p>contact@keyrelief.org</p>
                            </div>
                        </div>

                        <div className="info-box">
                            <FaMapMarkerAlt className="icon" />
                            <div>
                                <strong>Location</strong>
                                <p>Key Relief Foundation</p>
                            </div>
                        </div>

                        <div className="social-icons">
                            <h6>Follow Us</h6>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <FaFacebook />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                <FaWhatsapp />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                <FaYoutube />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                <FaInstagram />
                            </a>
                        </div>
                    </Col>

                    {/* Contact Form Section */}
                    <Col md={7}>
                        <div className="contact-form">
                            <Form>
                                <Row>
                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Control type="text" placeholder="Your name*" required />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Control type="email" placeholder="Email address" required />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Form.Group className="mb-3">
                                    <Form.Control type="tel" placeholder="Mobile" />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Control type="text" placeholder="Subject" />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Control as="textarea" rows={4} placeholder="Type your message" />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Check label="I agree with the terms of service." />
                                </Form.Group>
                                <Button className="send-btn" type="submit">
                                    Send Message
                                </Button>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>

            {/* Google Map Section */}
            <div className="contact-map">
                <iframe
                    title="Key Relief Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.869630095227!2d73.17938927468557!3d22.327296641153273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc8e066a1ce33%3A0x3f308ca9d23e6cc6!2sVadodara%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1721341774191!5m2!1sen!2sin"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </div>
        </section>
    );
};

export default ContactUs;
