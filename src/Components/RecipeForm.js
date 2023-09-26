import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

export default function RecipeForm() {
  return (
    <div>
    <Container fluid>
        <Row>
        <Col sm = {2}></Col>
        <Col sm = {8}>
        <Row className = "mt-5 mb-5 white-bg">
                <Col sm={3} className = "half-background"></Col>
                <Col sm={9}>
                <Form className= "recipe-form p-4">
                        <h2 className = "form-header text-center mt-2 mb-3">Create a Cocktail</h2>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control type="text" placeholder="cocktail name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Control as="textarea" placeholder="Enter measurements and ingredients here" rows={3} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Control as="textarea" placeholder="Enter instructions here" rows={3} />
                        </Form.Group>
                        <Form.Group controlId="formFile" className="mb-5">
                            <Form.Label>Cocktail Image</Form.Label>
                            <Form.Control type="file" />
                    </Form.Group>
                    <Button className = "add-btn mb-2">Add Receipe <i className="bi bi-plus-lg"></i></Button>
                </Form>
                </Col>
        </Row>
        </Col>
        <Col sm = {2}></Col>
        </Row>
    </Container>
    </div>
  )
}
