import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './Service.css';
import Button from 'react-bootstrap/Button';

const Service = () => {
    const [service, setService] = useState([])

    useEffect(() => {
        fetch('service.json')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

    return (
        <div className='mt-5 my-5' id='service'>
            <Container className='mt-5 mb-5'>
                <h1 className='text-center'>CTO <span className='text-primary'>Service</span></h1>
                <hr className='hr1'/>
                <Row className='mx-auto gap'>
                    {
                            service?.map(ser =><Col md='6'sm='12' lg='4' className='text-center' key={ser?._id}>
                            <div className='my-4 mx-2 text-center' data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                                <Card className='shadow-lg'>
                                    <img variant="top" src={ser?.img} className='p-3 project-img text-center rounded' alt='img'/>
                                    <Card.Body>
                                        <h4 className='text-start'>{ser?.details.slice(0, 300) + " ... see more"}</h4>
                                            <a href={ser.links} className='text-start text-dark fs-4 links'>
                                            <Button variant="secondary" className='w-100' size="lg">
                                            More Details
                                            </Button></a>
                                        
                                    </Card.Body>
                                </Card>
                            </div>
                        </Col>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Service;