import React from "react";
import { Form, Button, Col, Container, Row, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { withRouter } from "react-router-dom";
import "./BookRoom.css";
class BookRoom extends React.Component {
  constructor(props) {
    super(props);
    let cust_obj2 = JSON.parse(localStorage.getItem("data"));
    let def_id;
    {
      cust_obj2 == null ? (def_id = 0) : (def_id = cust_obj2.cust_id);
    }

    let today = new Date();
    let date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    this.state = {
      check_in: "",
      check_out: "",
      cust_id: def_id,
      cust_name: "",
      cust_contact: null,
      cust_age: null,
      cust_email_id: "",
      no_rooms: "",
      cust_address: "",
      hotel_id: this.props.match.params.hotel_id,
      message: "",
      room_rate: this.props.match.params.room_rate,
    };
  }

  onSubmitHandler = (e) => {
    //e.preventDefault();//prevent to page refresh
    // let demo = parseInt(this.state.cust_contact);
    // console.log(demo);
    let cust_obj3 = JSON.parse(localStorage.getItem("data"));
    let def_emailid;
    {
      cust_obj3 == null
        ? (def_emailid = this.refs.cust_email_id.value)
        : (def_emailid = cust_obj3.cust_email_id);
    }
    console.log(this.props.hotel_id + " " + this.props.room_rate);
    let ref_obj = {
      check_in: this.refs.check_in.value,
      check_out: this.refs.check_out.value,
      cust_id: this.state.cust_id,
      hotel_id: this.state.hotel_id,
      cust_name: this.refs.cust_name.value,
      cust_contact: this.refs.cust_contact.value,
      cust_address: this.refs.cust_address.value,
      credit_card_no: this.refs.credit_card_no.value,
      no_rooms: this.refs.no_rooms.value,
      cust_email_id: def_emailid,
      room_rate: this.state.room_rate,
    };
    let d1 = JSON.stringify(ref_obj);
    console.log(ref_obj);
    fetch("http://localhost:8083/book", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: d1,
    }).then((res) => {
      if (res) {
        console.log(res);
      }
    });

    fetch("http://localhost:8083/bookId/" + def_emailid)
      .then((res) => res.json())
      .then((val) => {
        alert("Your Booking id is : " + val.booking_id);
      });
    // this.props.history.push('/');
  };

  render() {
    const {
      cust_name,
      cust_contact,
      credit_card_no,
      cust_address,
      check_in,
      check_out,
      no_rooms,
    } = this.state;
    let cust_obj = JSON.parse(localStorage.getItem("data"));
    // console.log(cust_obj);
    if (cust_obj != null) {
      return (
        <div id="bookRoom">
          <Container fluid="sm">
            <div>
              <Row>
                <Col lg="12">
                  <Alert variant="primary" id="bookRoomHeader">
                    Book Room Page
                  </Alert>
                </Col>
              </Row>
              <h3 id="bookRoomPara">Personal Information</h3>
              <br />
              <Form>
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridText" xs="6">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Name"
                      defaultValue={cust_obj.cust_name}
                      ref="cust_name"
                    />
                  </Form.Group>
                </Form.Row>

                <Form.Group controlId="formGridAddress1">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Address"
                    defaultValue={cust_obj.cust_address}
                    ref="cust_address"
                  />
                </Form.Group>

                <Form.Row>
                  <Form.Group as={Col} controlId="formGridText">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                      required
                      type="[0-9]"
                      Maxlength={10}
                      placeholder="Enter Phone Number"
                      defaultValue={cust_obj.cust_contact}
                      ref="cust_contact"
                    />
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Form.Group as={Col} controlId="formGridText">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Enter Email ID"
                      defaultValue={cust_obj.cust_email_id}
                      ref="cust_email_id"
                    />
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Form.Group as={Col} controlId="formGridText">
                    <Form.Label>Check-in Date</Form.Label>
                    <Form.Control
                      required
                      type="date"
                      placeholder="Enter Check-in Date"
                      ref="check_in"
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridText">
                    <Form.Label>Check-out Date</Form.Label>
                    <Form.Control
                      required
                      type="date"
                      placeholder="Enter Check-out Date"
                      ref="check_out"
                    />
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Form.Group as={Col} controlId="formGridText">
                    <Form.Label>Credit Card No.</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Enter Credit Card No."
                      defaultValue={cust_obj.credit_card_no}
                      ref="credit_card_no"
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridText">
                    <Form.Label>Number of Rooms</Form.Label>
                    <Form.Control
                      required
                      type="number"
                      placeholder="Enter Number of Rooms"
                      ref="no_rooms"
                    />
                  </Form.Group>
                </Form.Row>

                <Form.Group as={Row}>
                  <Col lg="1">
                    <Button variant="primary">Clear</Button>
                  </Col>
                  <Col lg="1">
                    <Button variant="primary" onClick={this.onSubmitHandler}>
                      SUBMIT
                    </Button>
                  </Col>
                </Form.Group>
              </Form>
            </div>
          </Container>
        </div>
      );
    } else {
      return (
        <div id="bookRoom">
          <Container fluid="sm">
            <div>
              <Row>
                <Col lg="12">
                  <Alert variant="primary" id="bookRoomHeader">
                    Book Room Page
                  </Alert>
                </Col>
              </Row>
              <h3 id="bookRoomPara">Personal Information</h3>
              <br />
              <Form>
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridText" xs="6">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Enter Name"
                      ref="cust_name"
                    />
                  </Form.Group>
                </Form.Row>

                <Form.Group controlId="formGridAddress1">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    required
                    placeholder="Enter Address"
                    ref="cust_address"
                  />
                </Form.Group>

                <Form.Row>
                  <Form.Group as={Col} controlId="formGridText">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                      required
                      type="[0-9]"
                      Maxlength={10}
                      placeholder="Enter Phone Number"
                      ref="cust_contact"
                    />
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Form.Group as={Col} controlId="formGridText">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Enter Email ID"
                      ref="cust_email_id"
                    />
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Form.Group as={Col} controlId="formGridText">
                    <Form.Label>Check-in Date</Form.Label>
                    <Form.Control
                      required
                      type="date"
                      placeholder="Enter Check-in Date"
                      ref="check_in"
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridText">
                    <Form.Label>Check-out Date</Form.Label>
                    <Form.Control
                      required
                      type="date"
                      placeholder="Enter Check-out Date"
                      ref="check_out"
                    />
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Form.Group as={Col} controlId="formGridText">
                    <Form.Label>Credit Card No.</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Enter Credit Card No."
                      ref="credit_card_no"
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridText">
                    <Form.Label>Number of Rooms</Form.Label>
                    <Form.Control
                      required
                      type="number"
                      placeholder="Enter Number of Rooms"
                      ref="no_rooms"
                    />
                  </Form.Group>
                </Form.Row>

                <Form.Group as={Row}>
                  <Col lg="1">
                    <Button variant="primary">Clear</Button>
                  </Col>
                  <Col lg="1">
                    <Button variant="primary" onClick={this.onSubmitHandler}>
                      Submit
                    </Button>
                  </Col>
                </Form.Group>
              </Form>
            </div>
          </Container>
        </div>
      );
    }
  }
}
export default withRouter(BookRoom);
