import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './InputField.css';
import fream from '../../../Images/7.png';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { toast } from 'react-toastify';

const InputField = () => {
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
        // console.log('addInfo', addInfo);

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
            toast.success('Message sand.');
            form.reset('');
        })
    }
    return (
        <div className='input-field p-1' id='inputField'
        style={{
            background: `url(${fream})`,
            backgroundSize: 'cover',
        }}>
            <Container className='mt-5 mb-5'>
            <h1 className='text-center'><span className='text-primary'>Input Field</span></h1>
                <hr className='hr1'/>
                <Row>
                    <Form onSubmit={addSubmit}> 
                        <Col md='12'>
                            <h3 className='text-center'>Please enter your name and pick the Sectors you are currently involved in.</h3>
                            <br />
                            <h4 className='text-center'>Name: <input className='p-1 rounded input-name' type="text" placeholder='  enter your name' name='name' required /></h4>
                            <Col md='12'>
                                <b className='text-center'>Sectors<Form.Select aria-label="Default select example">
                                <option>Select One Menu</option>
                                <option value="1">Manufacturing</option>
                                <option value="2">Plastic & Rubber</option>
                                <option value="3">Printing</option>
                                <option value="3">Other</option>
                                <option value="3">Service</option>
                                <option value="3">Tourism</option>
                                </Form.Select>
                                </b>
                            </Col>
                            <br />
                            <InputGroup className="mb-3">
                                    {['checkbox'].map((type) => (
                                    <div key={`inline-${type}`} className="mb-3">
                                    <Form.Check
                                        inline
                                        label="Agree to terms"
                                        name="group1"
                                        type={type}
                                        id={`inline-${type}-1`}
                                    />
                                    </div>
                                ))}
                            </InputGroup>
                            <button type="submit" className='my-3 btn btn-primary'>Save</button>
                        </Col>
                    </Form>
                </Row>
            </Container>
        </div>
    );
};

export default InputField;