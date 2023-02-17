import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './InputField.css';
import fream from '../../../Images/7.png';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { toast } from 'react-toastify';

const InputField = () => {
    const [terms, setTerms] = useState(false)

    const addSubmit = event => {
        event.preventDefault()
        const form = event.target;
        const inputName = form.inputName.value;
        const name = form.selectArea.value;
        const remember = form.remember.value;
        const addInfo = {
            inputName, remember, name

        }
        console.log('addInfo', addInfo);

        fetch(`https://cto-service-server-sabbirvai.vercel.app/inputField`, {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(addInfo)
    })
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            toast.success('Message send.');
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
                            <h4 className='text-center'>Name: <input className='p-1 rounded input-name' type="text" placeholder='  enter your name' name='inputName' required /></h4>
                            <Col md='12'>
                                <b className='text-center'>Sectors<Form.Select name='selectArea' aria-label="Default select example">
                                <option>Select One Menu</option>
                                <option value="Manufacturing">Manufacturing</option>
                                <option value="Plastic & Rubber">Plastic & Rubber</option>
                                <option value="Printing">Printing</option>
                                <option value="Other">Other</option>
                                <option value="Service">Service</option>
                                <option value="Tourism">Tourism</option>
                                </Form.Select>
                                    {/* <select name='selectArea'>
                                    <option value="Manufacturing">Manufacturing</option>
                                    </select> */}
                                    
                                </b>
                            </Col>
                            <br />
                            <InputGroup className="mb-3">
                                    {['checkbox'].map((type) => (
                                    <div key={`inline-${type}`} className="mb-3">
                                    <Form.Check
                                        onClick={() => setTerms(!terms)}
                                        inline
                                        label="Agree to terms"
                                        name="remember"
                                        type={type}
                                        id={`inline-${type}-1`}
                                    />
                                    </div>
                                ))}
                            </InputGroup>
                            <button disabled={!terms} type="submit" className='my-3 btn btn-primary'>Save</button>
                        </Col>
                    </Form>
                </Row>
            </Container>
        </div>
    );
};

export default InputField;