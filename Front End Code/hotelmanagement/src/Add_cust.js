import React from "react";
import { Form, Button, Col, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./add_cust.css";
import { withRouter } from "react-router-dom";
class Add_cust extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cust_name: "",
      cust_email_id: "",
      cust_password: "",
      cust_contact: null,
      cust_age: null,
      credit_card_no: "",
      cust_add: "",
      message: "",
    };
  }

  onChangeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmitHandler = (e) => {
    e.preventDefault();
    let demo = parseInt(this.state.cust_contact);
    let demo1 = parseInt(this.state.cust_age);
    console.log(demo);
    fetch("http://localhost:8080/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        cust_name: this.state.cust_name,
        cust_email_id: this.state.cust_email_id,
        cust_password: this.state.cust_password,
        cust_contact: demo,
        cust_age: demo1,
        credit_card_no: this.state.credit_card_no,
        cust_address: this.state.cust_add,
      }),
    }).then((res) => {
      if (res) {
        alert("customer Added Successfully");
      }
    });
    console.log(this.state);
    this.props.history.push("/login");
  };

  render() {
    const {
      cust_name,
      cust_email_id,
      cust_password,
      cust_contact,
      cust_age,
      credit_card_no,
      cust_add,
    } = this.state;
    return (
      <div id="register">
        <h1 id="registerHead">Registeration Form</h1>
        <hr />
        <div id="registerForm">
          <Container>
            <Form onSubmit={this.onSubmitHandler}>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridFullName">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    type="Text"
                    placeholder="Full name"
                    name="cust_name"
                    value={cust_name}
                    onChange={this.onChangeHandler}
                  />
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name="cust_email_id"
                    value={cust_email_id}
                    onChange={this.onChangeHandler}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    name="cust_password"
                    value={cust_password}
                    onChange={this.onChangeHandler}
                  />
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} controlId="formGridConatctNumber" xs={6}>
                  <Form.Label>Contact Number</Form.Label>
                  <Form.Control
                    type="Text"
                    placeholder="Contact Number"
                    name="cust_contact"
                    value={cust_contact}
                    onChange={this.onChangeHandler}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridAge" xs={3}>
                  <Form.Label>Age</Form.Label>
                  <Form.Control
                    type="Age"
                    placeholder="Age"
                    name="cust_age"
                    value={cust_age}
                    onChange={this.onChangeHandler}
                  />
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} controlId="formGridCreditNumber" xs={6}>
                  <Form.Label>Credit Card Number</Form.Label>
                  <Form.Control
                    type="Text"
                    placeholder="Credit Card Number"
                    name="credit_card_no"
                    value={credit_card_no}
                    onChange={this.onChangeHandler}
                  />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridAddress" xs={6}>
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    type="Text"
                    placeholder="Address"
                    name="cust_add"
                    value={cust_add}
                    onChange={this.onChangeHandler}
                  />
                </Form.Group>
              </Form.Row>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
            <p>{this.state.message}</p>
          </Container>
        </div>
      </div>
    );
  }
}
export default withRouter(Add_cust);
