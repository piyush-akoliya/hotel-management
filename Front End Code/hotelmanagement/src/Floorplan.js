import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./Floorplan.css";

class Floorplan extends React.Component {
  render() {
    return (
      <div id="images">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./standard.jpg"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Standard Room</h3>
              <p>1000/- per night</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./premiumkingroom.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Premium Room</h3>
              <p>2200/- per night</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="luxuryroom.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Luxury Room</h3>
              <p>3200/- per night</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default Floorplan;
