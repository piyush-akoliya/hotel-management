import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router";
import "bootstrap/dist/css/bootstrap.css";
import { Alert, Container, Row, Col, Form, Button } from "react-bootstrap";

function CheckinPage() {
  const [customer, setCustomer] = useState({});
  const { id } = useParams();
  const nameC1 = React.useRef(null);
  const nameC2 = React.useRef(null);
  const nameC3 = React.useRef(null);
  const nameC4 = React.useRef(null);
  // const nameC5 = React.useRef(null);
  const nameC6 = React.useRef(null);
  const nameC7 = React.useRef(null);
  const nameC8 = React.useRef(null);
  const nameC9 = React.useRef(null);

  useEffect(() => {
    console.log(id);
    fetch("http://localhost:8083/book/" + id)
      .then((res) => res.json())
      .then((data) => {
        setCustomer(data);
      });
  }, []);

  //console.log(customer);

  let postdata = () => {
    let demo = JSON.stringify(customer);
    fetch("http://localhost:8083/inv", {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: demo,
    });
    //console.log(demo);
    alert("check in successfully");
  };

  /*const dataUpdate = (e) => {
    let cust = {
      cust_name: nameC1.current.value,
      bookingt_address: nameC2.current.value,
      cust_email_id: nameC3.current.value,
      booking_id: nameC4.current.value,
      // hotel_id: nameC5.current.value,
      cust_contact: nameC6.current.value,
      cust_age: nameC7.current.value,
      no_rooms: nameC8.current.value,
      room_rate: nameC9.current.value
    }
    console.log(cust)
    let demo = JSON.stringify(cust);
    console.log(demo);
    fetch(`http://localhost:8080/updateBooking/${id}`,
      {
        method: 'PUT',
        headers: { 'Content-type': 'application/json' },
        body: demo
      }).then(
        (res) => {
          if (res) {
            console.log()
          }
        }
      )
    e.preventDefault();
  }*/

  return (
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
          <Form onSubmit={postdata}>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridText">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  defaultValue={customer.cust_name}
                  readOnly
                  ref={nameC1}
                />
              </Form.Group>

              <Form.Group controlId="formGridAddress1">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  required
                  type="text"
                  defaultValue={customer.cust_address}
                  readOnly
                  ref={nameC2}
                />
              </Form.Group>

              <Form.Group controlId="formGridAddress1">
                <Form.Label>Email Id:</Form.Label>
                <Form.Control
                  required
                  type="text"
                  defaultValue={customer.cust_email_id}
                  readOnly
                  ref={nameC3}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridText">
                <Form.Label>Customer Id:</Form.Label>
                <Form.Control
                  required
                  type="number"
                  defaultValue={customer.cust_id}
                  readOnly
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
                  readOnly
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridText">
                <Form.Label>Bookig Id Id:</Form.Label>
                <Form.Control
                  required
                  type="number"
                  defaultValue={customer.booking_id}
                  readOnly
                  ref={nameC4}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridText">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  required
                  type="number"
                  defaultValue={customer.cust_contact}
                  readOnly
                  ref={nameC6}
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
                  readOnly
                  ref={nameC7}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridText">
                <Form.Label>Number Of rooms:</Form.Label>
                <Form.Control
                  required
                  type="number"
                  defaultValue={customer.no_rooms}
                  readOnly
                  ref={nameC8}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridText">
                <Form.Label>room Rate:</Form.Label>
                <Form.Control
                  required
                  type="number"
                  defaultValue={customer.room_rate}
                  readOnly
                  ref={nameC9}
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
                  readOnly
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridText">
                <Form.Label>Check-out Date</Form.Label>
                <Form.Control
                  required
                  type="text"
                  defaultValue={customer.check_out}
                  readOnly
                />
              </Form.Group>
            </Form.Row>

            <Form.Group as={Row}>
              <Col lg="1">
                <Button variant="primary" type="submit">
                  Check In
                </Button>
              </Col>
            </Form.Group>
          </Form>
        </div>
      </Container>
    </div>
  );
}

export default CheckinPage;
