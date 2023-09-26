import React from 'react'
import Container from 'react-bootstrap/Container';
import logo from '../Images/logo.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


export default function Footer() {
  return (
    <>
    <Container fluid>
        <Row className = "orange-footer pt-3">
            <Col sm={3}></Col>
            <Col sm={3} className = "dark-orange">
                <h4 className = "footer-header">Let's Keep In Touch</h4>
            </Col>
            <Col sm={3}>
            <InputGroup className="mb-3">
                <Form.Control
                    size="sm"
                    placeholder="Enter Your Email"
                    aria-describedby="basic-addon2"
                    />
                    <Button className = "blue-btn">Submit <i className="bi bi-envelope-check"></i></Button>
                </InputGroup>
            </Col>
            <Col sm={3}></Col>
        </Row>
        <Row className = "dark-orange-footer">
            <Col sm={12} className = "mt-3 mb-3">
            <h6 className = "text-center white-text footer-logo">Juleps</h6>
            <p className = "text-center white-text">Copyright <i className="bi bi-c-circle"></i> 2023 Juleps LLC</p>
            <p className = "text-center white-text">Legal Stuff | Privacy Policy | Security</p>
            </Col>
        </Row>
        </Container>
</>
  )
}
