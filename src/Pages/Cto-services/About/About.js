import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import fream from '../../../Images/7.png'
import cto from '../../../Images/about-cto-removebg-preview.png'
import './About.css';

const About = () => {
    return (
        <div className='p-2' id='about'
            
            style={{
            background: `url(${fream})`,
            backgroundSize: 'cover',
        }}>
            {/* about section Start  */}
            <Container>
                <h1 className='text-center my-4'><span className='text-primary'>About</span> CTO</h1>
                <hr className='hr1' />
                <Row className='mt-5 my-5'>
                    <Col md='4'>
                        <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                            <img src={cto} alt="about cto" className='img-fluid'/>
                        </div>
                    </Col>
                    <Col md='8'>
                    <p className='mt-3 fs-5 text-secondary'>The chief technology officer (CTO) is the individual within an organization who oversees the current technology and creates relevant policy. A CTO should have the business knowledge necessary to align technology-related decisions with the organization's goals.In addition to fixing IT-related issues, the CTO is responsible for developing, implementing, managing and evaluating the company's technology resources. The goal of a CTO is to examine short- and long-term needs while using capital to make investments that aid the organization in reaching its goals.
                            <br />
                            <br />
                            Generally, a chief technology officer has a degree in computer science or engineering, has a strong knowledge of software architecture, design, and programming. Since a CTO should solve engineering problems, a solid development background is required. Business awareness.
                            </p>
                    </Col>
                </Row>
            </Container>
            {/* about section end  */}
        </div>
    );
};

export default About;