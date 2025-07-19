import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./Members.css";
import bannerImage from "../../assets/donate-banner.jpg";
import { FaUser, FaEnvelope, FaPhone } from "react-icons/fa";

const Member = () => {
    return (
        <div className="member-form">
            {/* Banner Section */}
            <div
                className="about-banner d-flex align-items-center justify-content-center"
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
 
            {/* Form Section */}
            <Container fluid className="member-form-section d-flex justify-content-center">
                <Form className="form-box">
                    <Row className="mb-3">
                        <Col>
                            <div className="form-icon-groups">
                                <FaUser className="form-icons" />
                                <Form.Control type="text" placeholder="Your Name*" className="custom-input" />
                            </div>
                        </Col>
                    </Row>

                    <Row className="mb-3">
                        <Col>
                            <div className="form-icon-groups">
                                <FaEnvelope className="form-icons" />
                                <Form.Control type="email" placeholder="Email Address*" className="custom-input" />
                            </div>
                        </Col>
                    </Row>

                    <Row className="mb-3">
                        <Col>
                            <div className="form-icon-groups">
                                <FaPhone className="form-icons" />
                                <Form.Control type="text" placeholder="Mobile Number" className="custom-input" />
                            </div>
                        </Col>
                    </Row>

                    <Row className="mb-3">
                        <Col>
                            <Form.Check type="checkbox" label="I Agree With The Terms Of Service." />
                        </Col>
                    </Row>

                    <Row>
                        <Col className="text-center">
                            <Button className="send-btns">SEND</Button>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </div>
    );
};

export default Member;
