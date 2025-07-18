import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import "./AboutUs.css";

// images
import bannerImage from "../../assets/about-us-banner.jpg";
import story1 from "../../assets/about-us-img.png";

// what we do images 
import foodImage from "../../assets/what-we-do-1.avif";
import educationImage from "../../assets/what-we-do-2.jpg";
import financeImage from "../../assets/what-we-do-3.jpg";

// Import donor images
import donor1 from "../../assets/donor1.png";
import donor2 from "../../assets/donor2.png";
import donor3 from "../../assets/donor3.png";
import donor4 from "../../assets/donor4.png";
import donor5 from "../../assets/donor5.png";

// Background donate image
import donateBg from "../../assets/about-donate-banner.png"; // replace with your image path

const donors = [
    { name: "Naveen", image: donor1 },
    { name: "Rena", image: donor2 },
    { name: "Rakhi", image: donor3 },
    { name: "Guna", image: donor4 },
    { name: "Teju", image: donor5 },
];

const About = () => {
    return (
        <>
            {/* About Banner */}
            <div className="about-banner d-flex align-items-center justify-content-center"
                style={{
                    backgroundImage: `url(${bannerImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "300px",
                }}
            >
                <Container>
                    <h1 className="text-white text-center">About Us</h1>
                </Container>
            </div>

            {/* Our Story Section */}
            <div className="about-ourstory">
                <Container fluid>
                    <Row>
                        <Col md={8}>
                            <h2 className="section-title">OUR STORY</h2>
                            <div className="section-dividerers mb-4"></div>
                            <p className="story-description">
                                At KeyRelief Foundation, our journey began in 2020 with a shared vision—to bring lasting change to the lives of underserved communities. What started as a small group of committed individuals has grown into a passionate movement rooted in compassion, empowerment, and resilience.</p>
                            <p className="story-description">
                                From distributing essential meals during times of crisis to organizing educational camps and financial literacy workshops, every initiative we undertake is guided by a holistic approach to uplift and empower. We believe that sustainable impact comes not only from providing immediate aid but from building long-term opportunities.</p>
                        </Col>
                        <Col md={4}>
                            <Image src={story1} className="about-story-img" />
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* what we do code */}
            <div className="about-what-we">
                <Container fluid>
                    <h2 className="text-center section-title ">WHAT WE DO</h2>
                    <div className="section-dividerers mb-5"></div>
                    <Row className="mb-5 align-items-center">
                        <Col md={6}>
                            <Image src={foodImage} fluid className="what-image" />
                        </Col>
                        <Col md={6}>
                            <h5 className="what-subtitle">Food Donation</h5>
                            <p className="what-description">
                                Our nutrition initiatives focus on delivering balanced meals to underprivileged children, the elderly, and marginalized families. Every meal is crafted to ensure both quantity and nutritional value.
                            </p>
                            <p className="what-description">
                                We partner with local communities to establish sustainable meal drives and ensure no one sleeps hungry, especially during crisis times and natural disasters.
                            </p>
                        </Col>
                    </Row>

                    <Row className="mb-5 align-items-center flex-md-row-reverse">
                        <Col md={6}>
                            <Image src={educationImage} fluid className="what-image" />
                        </Col>
                        <Col md={6}>
                            <h5 className="what-subtitle">Education</h5>
                            <p className="what-description">
                                Education is at the heart of long-term change. We provide school supplies, sponsor tuition classes, and cover basic school fees for children from low-income families.
                            </p>
                            <p className="what-description">
                                Our weekend learning camps and community libraries help bridge the learning gap and prevent dropouts, especially among girls and tribal children.
                            </p>
                        </Col>
                    </Row>

                    <Row className="align-items-center">
                        <Col md={6}>
                            <Image src={financeImage} fluid className="what-image" />
                        </Col>
                        <Col md={6}>
                            <h5 className="what-subtitle">Financial Improvements</h5>
                            <p className="what-description">
                                We conduct financial literacy workshops focusing on saving, budgeting, and basic banking to empower families with essential money skills.
                            </p>
                            <p className="what-description">
                                Our micro-entrepreneurship support includes small grants, training, and mentorship to help families start and sustain small businesses.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* our teams images */}
            <div className="about-team text-white text-center">
                <Container fluid>
                    <h2 className="section-title mb-4">WE HONOR OUR TOP DONATORS</h2>
                    <Row className="justify-content-center">
                        {donors.map((donor, index) => (
                            <Col key={index} xs={6} sm={4} md={2} className="mb-4">
                                <div className="donor-card">
                                    <Image src={donor.image} className="donor-image" />
                                    <h6 className="donor-name mt-2">{donor.name}</h6>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>

            {/* about donate banner  */}
            <div
                className="about-donate-banner d-flex align-items-center justify-content-center mb-5 mt-5"
                style={{
                    backgroundImage: `url(${donateBg})`,
                }}
            >
                <Container>
                    <Row className="justify-content-center text-center">
                        <Col lg={10}>
                            <h2 className="donate-title">DONATE NOW TO INDIAN CHILDREN</h2>
                            <p className="donate-description">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it.
                            </p>
                            <Button variant="light" className="donate-btn">DONATE NOW</Button>
                        </Col>
                    </Row>
                </Container>
            </div>

        </>
    );
};

export default About;
