import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaUser, FaEnvelope, FaMapMarkerAlt, FaPhone, FaBuilding, FaMapPin } from "react-icons/fa";
import "./Donate.css";
import bannerImage from "../../assets/donate-banner.jpg";
 

const DonateForm = () => {
    return (
        <div className="donate-form">
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
                    <h1 className="text-white text-center">Donate</h1>
                </Container>
            </div>
            <Container fluid className="donate-form-section">
                <Form className="donate-form-box">
                    <Row>
                        <Col md={6}>
                            <div className="form-icon-group">
                                <FaUser className="form-icon" />
                                <Form.Control type="text" placeholder="Your Name*" />
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="form-icon-group">
                                <FaEnvelope className="form-icon" />
                                <Form.Control type="email" placeholder="Email Address*" />
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="form-icon-group">
                                <FaMapMarkerAlt className="form-icon" />
                                <Form.Control type="text" placeholder="Address*" />
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="form-icon-group">
                                <FaPhone className="form-icon" />
                                <Form.Control type="text" placeholder="Phone*" />
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="form-icon-group">
                                <FaBuilding className="form-icon" />
                                <Form.Control type="text" placeholder="City*" />
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="form-icon-group">
                                <FaMapPin className="form-icon" />
                                <Form.Control type="text" placeholder="Zip Code" />
                            </div>
                        </Col>
                        <Col md={12}>
                            <div className="form-icon-group">
                                <Form.Control as="textarea" rows={4} placeholder="Additional Note" />
                            </div>
                        </Col>
                        <Col md={12} className="mt-3 d-flex align-items-center">
                            <Form.Check type="checkbox" label="I Agree With The Terms Of Service." />
                        </Col>
                        <Col md={12} className="text-center mt-4">
                            <Button className="send-btn">SEND</Button>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </div>
    );
};

export default DonateForm;
