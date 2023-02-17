import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './InputField.css';

const InputField = () => {
    return (
        <div className='p-1' id='inputField'>
            <h2>InputField</h2>
            <Container className='mt-5 mb-5'>
                <Row>
                    <Col md='12'>
                        <h3>Please enter your name and pick the Sectors you are currently involved in.</h3>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default InputField;