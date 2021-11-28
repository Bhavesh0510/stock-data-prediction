import React from 'react'
import {
    Badge,
    Button,
    Card,
    Navbar,
    Nav,
    Table,
    Container,
    Row,
    Col,
    Form,
    OverlayTrigger,
    Tooltip,
} from "react-bootstrap";
import "views/index.css"

function Contact() {
    return (
        <>
           <Container fluid>
        <Row>
          <Col md="12">
            <Card className="contact-us">
              <Card.Header>
                <Card.Title as="h4">Contact Us</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form>
                <Row>
                    <Col  md="7">
                      <Form.Group>
                        <label>Email Address</label>
                        <Form.Control
                          placeholder="Enter Your Email Address"
                          type="text"
                          required></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label>Name</label>
                        <Form.Control
                          placeholder="Your Name"
                          type="text"
                          required></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="6">
                      <Form.Group>
                        <label>Conatct number</label>
                        <Form.Control
                          defaultValue="Andrew"
                          placeholder="Contact number"
                          type="number"
                          required></Form.Control>
                      </Form.Group>
                    </Col>
                  <Row>
                    <Col md="12">
                      <Form.Group>
                        <label>Message</label>
                        <Form.Control
                          placeholder="Write Message"
                          type="text"
                        required></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Button
                    className="btn-fill pull-right"
                    type="submit"
                    variant="info">
                    Contact us
                  </Button>
                  <div className="clearfix"></div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

        </>
    )
}

export default Contact
