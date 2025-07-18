// src/components/HomePage.js
import React, { useState, useEffect } from "react";
import { Container, Carousel, Col, Row, Button } from "react-bootstrap";
import "./HomePage.css";
import CountUp from 'react-countup';


// slider images
import slider1 from "../../assets/slider1.avif";
import slider2 from "../../assets/slider2.avif";
import slider3 from "../../assets/slider3.avif";

// Import hightleght images
import mealsIcon from '../../assets/highlight-1.png';
import educationIcon from '../../assets/highlight-2.png';
import financeIcon from '../../assets/highlight-3.png';

// who we are image 
import teamImg from '../../assets/home-about.png';

// Image our mission imports (replace with your actual paths)
import missionImg1 from '../../assets/home-mission-1.jpg';
import missionImg3 from '../../assets/home-mission-2.avif';

// Image our program imports (replace with your actual paths)
import iconEnrichment from '../../assets/our-program-1.png';
import iconEducation from '../../assets/our-program-2.png';
import iconEmpowerment from '../../assets/our-program-3.png';
import iconImpact from '../../assets/our-program-4.png';

import testimonial1 from "../../assets/testimonial-image.png"; // Replace with your actual image path


const slides = [
    {
        image: slider1,
        sub: "EMPOWERING COMMUNITIES",
        title: "Together We Can Make a Difference",
    },
    {
        image: slider2,
        sub: "EDUCATION FOR EVERY CHILD",
        title: "Building Bright Futures Through Learning",
    },
    {
        image: slider3,
        sub: "HEALTHCARE ACCESS FOR ALL",
        title: "Caring for Lives, One Step at a Time",
    },
];

const programs = [
    {
        icon: <img src={iconEnrichment} alt="Enrichment Icon" className="program-icon" />,
        title: 'Enrichment',
        description:
            'We regularly organize community kitchens and food drives to ensure vulnerable groups receive healthy meals.',
    },
    {
        icon: <img src={iconEducation} alt="Education Icon" className="program-icon" />,
        title: 'Education',
        description:
            'From distributing study materials to funding school admissions, we help underprivileged children stay in school and dream big.',
    },
    {
        icon: <img src={iconEmpowerment} alt="Empowerment Icon" className="program-icon" />,
        title: 'Empowerment',
        description:
            'We conduct sessions on budgeting, micro-loans, and small business guidance, enabling families to achieve long-term stability.',
    },
    {
        icon: <img src={iconImpact} alt="Impact Stories Icon" className="program-icon" />,
        title: 'Impact Stories',
        description:
            'Read how our programs helped Sita Devi start her own tailoring business or helped young Raj complete his schooling.',
    },
];

const countItems = [
    { number: 100, label: 'Projects' },
    { number: 65, label: 'Volunteers' },
    { number: 10, label: 'Years' },
    { number: 15, label: 'Sponsors' },
];

const testimonials = [
    {
        name: "Kiran",
        text: "Key Relief Foundation has transformed countless lives through education and empowerment. Proud to support their mission.",
        image: testimonial1,
    },
    {
        name: "Aisha",
        text: "Volunteering here gave me purpose. They truly uplift the underprivileged with care and commitment.",
        image: testimonial1,
    },
    {
        name: "Ravi",
        text: "The foundation’s impact on child development is commendable. A trusted NGO doing real work and good experience",
        image: testimonial1,
    },
];

const HomePage = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => setIndex(selectedIndex);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="home-services">
            <div className="home-carousel">
                <Carousel
                    activeIndex={index}
                    onSelect={handleSelect}
                    controls={false}
                    indicators={false}
                >
                    {slides.map((slide, i) => (
                        <Carousel.Item key={i}>
                            <div
                                className="home-carousel-slide"
                                style={{ backgroundImage: `url(${slide.image})` }}
                            >
                                <div className="home-carousel-overlay">
                                    <Container className="home-carousel-text text-left">
                                        <p className="home-carousel-sub">{slide.sub}</p>
                                        <h1 className="home-carousel-title">
                                            {slide.title.split("\n").map((line, idx) => (
                                                <div key={idx}>{line}</div>
                                            ))}
                                        </h1>
                                    </Container>
                                </div>
                            </div>
                        </Carousel.Item>
                    ))}
                </Carousel>

                <div className="home-carousel-pagination">
                    <div className="home-carousel-line" />
                    {slides.map((_, i) => (
                        <span
                            key={i}
                            className={`home-carousel-dot ${i === index ? "active" : ""}`}
                            onClick={() => setIndex(i)}
                        />
                    ))}
                </div>
            </div>

            {/* our highleghts section  */}
            <div className="home-our-highlights py-5">
                <Container>
                    <h4 className="text-center section-title mb-4">QUICK HIGHLIGHTS</h4>
                    <div className="section-dividerss mx-auto mb-4"></div>
                    <Row className="text-center">
                        <Col md={4} className="highlight-item">
                            <div className="icon-circle">
                                <img src={mealsIcon} alt="Meals Icon" className="highlight-img" />
                            </div>
                            <p className="highlight-text">1000+ Meals Served Monthly</p>
                        </Col>
                        <Col md={4} className="highlight-item">
                            <div className="icon-circle">
                                <img src={educationIcon} alt="Education Icon" className="highlight-img" />
                            </div>
                            <p className="highlight-text">500+ Children supported in Education</p>
                        </Col>
                        <Col md={4} className="highlight-item">
                            <div className="icon-circle">
                                <img src={financeIcon} alt="Finance Icon" className="highlight-img" />
                            </div>
                            <p className="highlight-text">200+ Families Trained in Financial Literacy</p>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* home about us section  */}
            <div className="home-who-we">
                <Container fluid>
                    <Row className="align-items-center">
                        <Col md={6} className="text-center text-md-start mb-4 mb-md-0">
                            <img src={teamImg} alt="Team" className="img-fluid team-image" />
                        </Col>
                        <Col md={6}>
                            <h4 className="section-title">WHO WE ARE ?</h4>
                            <div className="section-dividers mb-3"></div>
                            <p className="description">
                                KeyRelief Foundation is a non-profit organization committed to eliminating hunger,
                                advancing education, and fostering financial literacy in underprivileged communities.
                                Our mission is to empower lives by addressing the most pressing social challenges with sustainable solutions.
                            </p>
                            <Button variant="warning" className="learn-more-btn">Learn More</Button>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* our mission section code  */}
            <div className="home-ourmission">
                <Container fluid className="px-0">
                    <Row className="gx-0 align-items-stretch">
                        {/* Left image - 4 grids */}
                        <Col md={4} className="image-col">
                            <div className="first-image">
                                <img
                                    src={missionImg1}
                                    alt="Food Donation"
                                />
                            </div>
                        </Col>

                        {/* Center image - 4 grids */}
                        <Col md={4} className="image-col">
                            <div className="third-image">
                                <img
                                    src={missionImg3}
                                    alt="Education"
                                />
                            </div>
                        </Col>

                        {/* Right content - 4 grids */}
                        <Col md={4} className="mission-right text-white text-center">
                            <h4 className="section-title">OUR MISSION</h4>
                            <div className="section-dividerer mb-3"></div>
                            <p className="mission-text">
                                Our mission is to empower underserved communities by ensuring access
                                to nutritious food, quality education, and pathways to financial
                                independence. Through compassion and collaboration, we strive to
                                create a sustainable world where everyone has the tools to thrive
                                with dignity.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* our program code  */}
            <div className="home-our-programs text-center">
                <h3 className="section-heading">OUR PROGRAMS</h3> 
                <div className="section-dividerers mb-4"></div>
                <Container fluid>
                    <Row>
                        {programs.map((item, index) => (
                            <Col key={index} md={6} lg={3} className="program-card">
                                <div className="program-box">
                                    {item.icon}
                                    <h5 className="program-title">{item.title}</h5>
                                    <p className="program-desc">{item.description}</p>
                                    <Button className="read-more-btn">Read More</Button>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>

            {/* number count section  */}
            <section className="home-number-count">
                <Container fluid>
                    <Row className="justify-content-center text-center">
                        {countItems.map((item, idx) => (
                            <Col key={idx} xs={6} md={3} className="count-col mb-4 mb-md-0">
                                <div className="count-wrapper">
                                    <p className="count-label">{item.label}</p>
                                    <h2 className="count-number">
                                        <CountUp end={item.number} duration={2.5} />
                                    </h2>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>


            {/* testimonial section  */}
            <section className="home-reviews mt-5">
                <Container fluid className="text-center">
                    <h2 className="review-heading">TESTIMONIALS</h2>
                    <div className="section-dividerers mb-4"></div>
                    <Carousel indicators={false} controls={true} interval={5000}>
                        {testimonials.map((item, index) => (
                            <Carousel.Item key={index}>
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="testimonial-img mb-3"
                                />
                                <p className="testimonial-text">{item.text}</p>
                                <hr className="testimonial-line" />
                                <h6 className="testimonial-name">{item.name}</h6>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </Container>
            </section>
        </section>
    );
};

export default HomePage;
