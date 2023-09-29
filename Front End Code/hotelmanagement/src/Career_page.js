import React from "react";
import { Jumbotron, Button, Container, Card, CardDeck } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./Career.css";

class Career_page extends React.Component {
  render() {
    return (
      <div className="careerPage">
        <div>
          <Jumbotron fluid>
            <Container class="container text-center">
              <h1>
                <label id="careerRef">Careers At Indian Homes</label>
              </h1>
              <p>
                Find Your Place. When you join the Indian Homes family, you are
                joining a world of possibility.
              </p>
            </Container>
          </Jumbotron>
          <CardDeck className="col d-flex justify-content-center ">
            <Card.Footer>
              <Card border="warning" style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>Hotel Management</Card.Title>
                  <Card.Text>
                    <p>Hotel General Manager</p>
                    <p>Group Sales</p>
                    <p>Spa Manager</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Card.Footer>
            <Card.Footer>
              <Card border="primary" style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>Event Planning</Card.Title>
                  <Card.Text>
                    <p>Event Planner</p>
                    <p>Wedding Coordinator</p>
                    <p>Event Manager</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Card.Footer>
            <Card.Footer>
              <Card border="danger" style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>Food Operations</Card.Title>
                  <Card.Text>
                    <p>Executive Chef</p>
                    <p>Cook</p>
                    <p>Beverage Manager</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Card.Footer>
          </CardDeck>
          <p>
            For inquiry Details :<p>Email:- mumbaihotel@gmail.com</p>
            <p>phone:- 8156553736</p>
            <p>Email:- goahotel@gmail.com</p>
            <p>phone:- 8056524736</p>
            <p>Email:- delhihotel@gmail.com</p>
            <p>phone:- 8056566736</p>
          </p>
        </div>
      </div>
    );
  }
}

export default Career_page;
