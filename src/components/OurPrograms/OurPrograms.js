import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./OurPrograms.css";

import image1 from "../../assets/our-programs-1.png";
import image2 from "../../assets/our-programs-2.png";
import image3 from "../../assets/our-programs-3.png";
import image4 from "../../assets/our-programs-4.jpeg";

import bannerImage from "../../assets/banners-program.avif";


const OurProgramsPage = () => {
    const location = useLocation();

    useEffect(() => {
        const sectionId = location.hash.replace("#", "");
        if (sectionId) {
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [location]);

    return (
        <div>

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
                    <h1 className="text-white text-center">Our Program</h1>
                </Container>
            </div>
            <div className="our-program-page">
                <Container fluid>
                    {/* ENRICHMENT */}
                    <Row id="enrichment" className="program-content-block align-items-center">
                        <Col md={8}>
                            <h2>Nourishing Futures: Fighting Hunger with Purpose and Passion</h2>
                            <p>
                                In a world of plenty, it's unacceptable that millions of children still sleep on empty stomachs. At Digisphere Foundation, we recognize that nutrition is not a luxury—it's a necessity. Without proper food, children cannot concentrate, grow, or achieve their potential.
                            </p>
                            <p>
                                Our program provides nutritious meals to underprivileged children in urban slums and rural villages. We ensure each child receives balanced, healthy meals that not only sustain but also enrich their bodies and minds.
                            </p>
                            <p>
                                Through partnerships with local kitchens, nutritionists, and volunteers, we strive to end childhood hunger and raise awareness about the impact of diet on cognitive development and well-being.
                            </p>
                            <p>
                                With every meal served, we take a step toward a future where no child is left behind due to hunger.
                            </p>
                        </Col>
                        <Col md={4}>
                            <Image src={image1} alt="Enrichment" className="program-image" />
                        </Col>
                    </Row>

                    {/* EDUCATION */}
                    <Row id="education" className="program-content-block align-items-center flex-row-reverse">
                        <Col md={8}>
                            <h2>Unlocking Potential: Educating Children, Changing Generations</h2>
                            <p>
                                Every child deserves a chance to learn, dream, and build a better future. But for many underprivileged families, access to quality education remains a distant dream. At Digisphere, we bridge this gap with action, not just intent.
                            </p>
                            <p>
                                From school supplies to mentorship programs, we work to create environments where learning thrives. We sponsor tuition, train community educators, and run after-school support for children in need.
                            </p>
                            <p>
                                Our curriculum goes beyond books—it teaches life skills, digital literacy, and creative thinking. This holistic approach empowers children to not just pass exams but to navigate life.
                            </p>
                            <p>
                                Education is transformation. By teaching one child, we uplift an entire family, and eventually, reshape communities.
                            </p>
                        </Col>
                        <Col md={4}>
                            <Image src={image2} alt="Education" className="program-image" />
                        </Col>
                    </Row>

                    {/* EMPOWERMENT */}
                    <Row id="empowerment" className="program-content-block align-items-center">
                        <Col md={8}>
                            <h2>From Survival to Stability: Empowering Families with Economic Tools</h2>
                            <p>
                                Empowerment begins with opportunity. Our Economic Empowerment initiative is designed to help families move from daily survival to sustainable income and growth. We believe dignity comes not from charity, but from self-reliance.
                            </p>
                            <p>
                                We offer practical workshops on financial literacy, budgeting, digital payments, and access to micro-loans. Women and youth are guided in setting up home-based businesses—from tailoring to local trade.
                            </p>
                            <p>
                                Our entrepreneurship incubation sessions provide mentorship, branding tips, and even seed funding for micro-entrepreneurs ready to take their skills to the next level.
                            </p>
                            <p>
                                With the right resources and confidence, families start to earn, save, and reinvest—creating a ripple effect of economic empowerment across entire communities.
                            </p>
                        </Col>
                        <Col md={4}>
                            <Image src={image3} alt="Empowerment" className="program-image" />
                        </Col>
                    </Row>

                    {/* IMPACT STORIES */}
                    <Row id="impact-stories" className="program-content-block align-items-center flex-row-reverse">
                        <Col md={8}>
                            <h2>Real People. Real Progress. Real Stories of Change.</h2>
                            <p>
                                Impact isn't just in numbers—it's in stories. It’s in the smile of Sita Devi, who now runs a tailoring business from home. It’s in Raj, who passed his board exams after attending our learning center for six months.
                            </p>
                            <p>
                                Each story we share is a journey from hardship to hope. These individuals represent the thousands we’ve supported—and inspire thousands more.
                            </p>
                            <p>
                                Our impact stories are not just testimonials—they’re proof that targeted interventions and consistent community engagement lead to measurable transformation.
                            </p>
                            <p>
                                Read, share, and be part of these journeys. Let these stories remind us that every small act of kindness fuels lasting change.
                            </p>
                        </Col>
                        <Col md={4}>
                            <Image src={image4} alt="Impact Stories" className="program-image" />
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>

    );
};

export default OurProgramsPage;
