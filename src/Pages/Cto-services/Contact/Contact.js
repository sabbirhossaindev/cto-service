import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { BsFillTelephoneInboundFill, BsFillEnvelopeOpenFill, BsCursorFill, BsLinkedin, BsChatDotsFill, BsGithub, BsGlobe } from "react-icons/bs";
import { toast } from 'react-toastify';
import './Contact.css';


const Contact = () => {
    const addSubmit = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const subject = form.subject.value;
        const message = form.message.value;
        const addInfo = {
            name, email, subject, message
        }
        console.log('addInfo', addInfo);

        fetch(`https://cto-service-server.vercel.app/submit`, {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(addInfo)
    })
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            toast.success('Message sand Thank you !🥰');
            form.reset('');
        })
    }

    return (
        <div className='p-1 contact-container' id='contact'>
            {/* contact section Start  */}
            <h1 className='text-center my-4'>Get in <span className='text-primary'>Touch</span></h1>
            <hr className='hr1' />
            <Container className='my-5'>
                <Row className='mt-5'>
                <Col md='5' data-aos="fade-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                        <div className='phone'>
                            <h2 className='mt-2'>
                                <span className='text-info'><BsFillTelephoneInboundFill /></span>
                            </h2>
                            <div>
                                <h2>Phone</h2>
                                <h5>+088 018-88559287</h5>
                            </div>
                        </div>

                        <div className='email'>
                            <h2 className='mt-2'>
                                <span className='text-success'><BsFillEnvelopeOpenFill /></span>
                            </h2>
                            <div>
                                <h2>Email</h2>
                                <h5>mdsabbir4774770@gmail.com</h5>
                            </div>
                        </div>

                        <div className='location'>
                            <h2 className='mt-2'>
                                <span className='text-dark'><BsCursorFill /></span>
                            </h2>
                            <div>
                                <h2>Location</h2>
                                <h5>honkan, Japan</h5>
                            </div>
                        </div>

                        <div className='social-link text-center my-2'>
                                <h2 className='social-h2'><a href="#home"><BsGlobe className='text-primary'/></a></h2>

                                <h2 className='social-h2'><a href="https://github.com/sabbirvai"><BsGithub className='text-secondary'/></a></h2> 

                                <h2 className='social-h2'><a href="https://www.linkedin.com/in/md-sabbir-hossain-18300b244/"><BsLinkedin className='text-primary'/></a></h2>
                        </div>
                    </Col>

                    <Col md='7' className='mt-2'>
                    <Form onSubmit={addSubmit}> 
                        <Row>
                            <Col md="6">
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control name='name' type="text" placeholder="Name" required/>
                                </Form.Group>
                            </Col>
                            <Col md="6">
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email *</Form.Label>
                                    <Form.Control name='email' type="email" placeholder="Enter email" required/>
                                </Form.Group>
                            </Col>
                        </Row>
                        
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Subject</Form.Label>
                            <Form.Control name='subject' type="text" placeholder="subject" required/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Message *</Form.Label>
                            <Form.Control as="textarea" rows={3} name='message' placeholder="Message me please" required/>
                        </Form.Group>
                        
                        <button type="submit" className='my-3 btn btn-primary'>Sand Message <BsChatDotsFill className='text-warning'/></button>
                        </Form>
                    </Col>
                </Row>
            </Container>
            {/* contact section end  */}
        </div>
    );
};

export default Contact;