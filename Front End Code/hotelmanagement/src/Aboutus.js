import React from "react";
import { Jumbotron, Button, Container, Card, CardDeck } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

class Aboutus extends React.Component {
  render() {
    return (
      <div>
        <Jumbotron fluid>
          s
          <Container class="container text-center">
            <h1>About Us</h1>
            <p>
              Experience the amazing city and mountain views and entertain in
              style at this top floor suite. Top Floor Floor-to-ceiling windows
              Expansive city and mountain views
            </p>
          </Container>
        </Jumbotron>
        <CardDeck className="col d-flex justify-content-center ">
          <Card.Footer>
            <Card border="warning" style={{ width: "18rem" }}>
              {/*} <Card.Img  variant="top" src="img2.jpg" />*/}
              <Card.Body>
                <Card.Title>AboutIndianHomes.com</Card.Title>
                <Card.Text>
                  IndianHomes is India’s leading online travel booking brand
                  providing range of choice for hotels, flights, trains, bus and
                  cars for travelers.
                </Card.Text>
              </Card.Body>
            </Card>
          </Card.Footer>
          <Card.Footer>
            <Card border="primary" style={{ width: "18rem" }}>
              {/*  <Card.Img variant="top" src="holder.js/100px180" /> */}
              <Card.Body>
                <Card.Title>Home Safety</Card.Title>
                <Card.Text>
                  Safety and security are must-haves in any home. In addition to
                  the steps Airbnb takes to help protect our community, we
                  encourage both hosts and guests to stay aware and take certain
                  safety precautions when they’re hosting or traveling. Secure
                  payments
                </Card.Text>
              </Card.Body>
            </Card>
          </Card.Footer>
          <Card.Footer>
            <Card border="danger" style={{ width: "18rem" }}>
              {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
              <Card.Body>
                <Card.Title>Secure payments</Card.Title>
                <Card.Text>
                  Our secure platform ensures your money gets to the host—that’s
                  why we ask you to always pay through Airbnb and never wire
                  money or pay someone directly.
                </Card.Text>
              </Card.Body>
            </Card>
          </Card.Footer>
        </CardDeck>
      </div>
    );
  }
}

export default Aboutus;
