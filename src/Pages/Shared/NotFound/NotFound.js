import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import error from '../../../Images/error.gif';

const NotFound = () => {
    return (
        <div className='mt-5 my-5 text-center p-4'>
            <Container>
            <Row>
                <Col md="6">
                    <div>
                        <img src={error} alt="not found" className='img-fluid rounded' data-aos="flip-left"/>
                    </div>
                </Col>
                <Col md="6">
                    <div className='mt-5'><h3>Sorry,</h3></div>
                    <div className='mt-5 my-5'>
                        <h2>Page Not Found</h2>
                        <h4 className='mt-2'>The Page you requested could not be found.</h4>
                        <div className='mt-4'>
                            <Link to='/'><Button variant='primary'>Go To Home</Button></Link>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
        </div>
    );
};

export default NotFound;