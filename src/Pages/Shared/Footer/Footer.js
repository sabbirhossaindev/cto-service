import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import logo from '../../../Images/cto.jpg';
import footer from '../../../Images/footer.png';
import './Footer.css';

const Footer = () => {
    return (
        <div className='bg-dark text-light p-1' style={{
            background: `url(${footer})`,
            backgroundSize: 'cover'
        }}>
            <Container className='py-5 px-5'>
                <Row className='mx-auto'>
                    <Col md="3">
                        <h2 className='mx-auto text-center fs-3'>First Link</h2>
                            <hr className='hr2'/>
                        <div className='mx-auto text-center'>
                            <a className='menu-link' href="#home"><span className='mx-2 nav-link text-secondary'>Home</span>
                            </a>

                            <a className='menu-link' href="#about"><span className='mx-2 nav-link text-secondary'>About</span>
                            </a>

                            <a className='menu-link' href="#service"><span className='mx-2 nav-link text-secondary'>Service</span>
                            </a>

                            <a className='menu-link' href="#inputField"><span className='mx-2 nav-link text-secondary'>InputField</span>
                            </a>
                            
                            <a className='menu-link' href="#contact"><span className='mx-2 nav-link text-secondary'>Contact</span>          
                            </a>
                        </div>      
                    </Col>

                    <Col md="3">
                        <h2 className='mx-auto text-center fs-3'>Contact Us</h2>
                        <hr className='hr2'/>
                        <div className='mx-auto text-center'>
                            <p className='fs-5 text-secondary'>+8801888559287</p>
                            <p className='fs-5 text-secondary'>+8801719228487</p>
                            <p className='fs-5 text-secondary'>kp-high-school@gmail.com</p>
                        </div>
                    </Col>

                    <Col md="3">
                        <div>
                            <h4 className='mx-auto text-center fs-3'>We Are Using</h4>
                            <hr className='hr2'/>
                            <div className='mx-auto text-center'>
                                <a className='menu-link text-secondary' href="https://dev-sabbir.web.app"><h3 className='fs-4'>JavasScript</h3></a>
                                <a className='menu-link text-secondary' href="https://dev-sabbir.web.app"><h3 className='fs-4'>UI Design</h3></a>
                                <a className='menu-link text-secondary' href="https://dev-sabbir.web.app"><h3 className='fs-4'>React</h3></a>
                                <a className='menu-link text-secondary' href="https://dev-sabbir.web.app"><h3 className='fs-4'>Node JS</h3></a>
                                <a className='menu-link text-secondary' href="https://dev-sabbir.web.app"><h3 className='fs-4'>MongoDB</h3></a>
                                <a className='menu-link text-secondary' href="https://dev-sabbir.web.app"><h3 className='fs-4'>Express</h3></a>
                            </div>
                        </div>
                    </Col>

                    <Col md="3" className='mx-auto text-center'>
                        <h2 className='mx-auto text-center'>CTO Service</h2>
                        <hr className='hr2'/>
                        <img src={logo} alt="aws" className='img-fluid rounded' data-aos="flip-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000"/>
                    </Col>
                </Row>
                <div className='text-light text-center mt-5'>
                    <h5>created by <b>&copy;</b> CTO service<span className='text-primary mx-2'></span>all rights reserved {new Date().getFullYear()}. &trade;</h5>
                </div>
            </Container>
        </div>
    );
};

export default Footer;