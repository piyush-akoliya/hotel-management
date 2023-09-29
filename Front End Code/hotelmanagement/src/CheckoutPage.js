import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router";
import "bootstrap/dist/css/bootstrap.css";
import { Alert, Container, Row, Col, Form, Button } from "react-bootstrap";
import "./CheckoutPage.css";

function CheckoutPage() {
  const [customer, setCustomer] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch("http://localhost:8083/book/" + id)
      .then((res) => res.json())
      .then((data) => {
        setCustomer(data);
      });
    // e.preventDefault();
  }, []);

  console.log(customer);

  return (
    <div className="images">
      <div className="App">
        <Container fluid>
          <div>
            <Row>
              <Col lg="12">
                <Alert variant="primary">Address Of Selected Hotel</Alert>
              </Col>
            </Row>
            <h3>Personal Information</h3>
            <br />
            <Form>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridText">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    defaultValue={customer.cust_name}
                  />
                </Form.Group>

                <Form.Group controlId="formGridAddress1">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    defaultValue={customer.cust_address}
                  />
                </Form.Group>

                <Form.Group controlId="formGridAddress1">
                  <Form.Label>Email Id:</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    defaultValue={customer.cust_email_id}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridText">
                  <Form.Label>Customer Id:</Form.Label>
                  <Form.Control
                    required
                    type="number"
                    defaultValue={customer.cust_id}
                  />
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} controlId="formGridText">
                  <Form.Label>Hotel Id:</Form.Label>
                  <Form.Control
                    required
                    type="number"
                    defaultValue={customer.hotel_id}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridText">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    required
                    type="number"
                    defaultValue={customer.cust_contact}
                  />
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} controlId="formGridText">
                  <Form.Label>Customer Age</Form.Label>
                  <Form.Control
                    required
                    type="number"
                    defaultValue={customer.cust_age}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridText">
                  <Form.Label>Number Of rooms:</Form.Label>
                  <Form.Control
                    required
                    type="number"
                    defaultValue={customer.no_rooms}
                  />
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} controlId="formGridText">
                  <Form.Label>Check-in Date</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    defaultValue={customer.check_in}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridText">
                  <Form.Label>Check-out Date</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    defaultValue={customer.check_out}
                  />
                </Form.Group>
              </Form.Row>

              <Form.Group as={Row}>
                <Col lg="1">
                  <a
                    type="button"
                    className="btn btn-primary"
                    href={"/invoice/" + customer.booking_id}
                  >
                    Check Out
                  </a>
                </Col>
              </Form.Group>
            </Form>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default CheckoutPage;
