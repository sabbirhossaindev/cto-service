import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import banner from '../../../Images/banner.png';
import './HomeTop.css';

const HomeTop = () => {
    return (
        
        <div className='home-Banner p-1' id='home'>
             {/* HomeBanner section start */}
            <div className="position-fixed fixed-bottom text-end me-4 mb-4">
                  <a href="#home">
                      <img className='img-fluid go-to-top-icon' src='https://icon-library.com/images/back-to-top-icon-png/back-to-top-icon-png-7.jpg' alt="back-to-top-icon" />
                  </a>
              </div>
            <div className='position-relative w-100 h-100 home-top'>

            </div>
            <Container className='mt-4 my-4'>
                <Row>
                    <Col md='6'>
                        <h1 className='fs-1 font-bold cto-title'>CTO (Chief Technology Officer)</h1>
                        <br />
                        <p className='fs-5 text-secondary'>The CTO has overall responsibility for managing the physical and personnel technology infrastructure including technology deployment, network and system management, integration testing, and developing technical operations personnel. CTOs also manage client relations to ensure that service objective expectations are developed and managed in the operations areas.Generally, a chief technology officer has a degree in computer science or engineering, has a strong knowledge of software architecture, design, and programming. Since a CTO should solve engineering problems, a solid development background is required. Business awareness.</p></Col>
                    <Col md='6'><img className='banner rounded-md' src={banner} alt="banner" data-aos="fade-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" /></Col>
                </Row>
            </Container>
            {/* HomeBanner section end  */}
        </div>
    );
};

export default HomeTop;