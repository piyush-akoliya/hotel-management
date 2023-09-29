import React from "react";
import { Table } from "react-bootstrap";
import Home from "./Home.js";
import "./HotelSelection.css";

class HotelSelection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hotelsList: [],
    };
  }
  componentDidMount() {
    fetch(
      "http://localhost:8083/hotels/all/" +
        this.props.match.params.stateId +
        "/" +
        this.props.match.params.cityId
    )
      .then((res) => res.json())
      .then((val) =>
        this.setState({
          hotelsList: val,
        })
      )
      .then(() => {
        console.log(this.state.hotelsList);
      });
  }

  render() {
    return (
      <div>
        <Home />
        <section id="hotelSection">
          <p className="sectPara">List of Hotels</p>
          <hr className="blackHR" />
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Hotel Name</th>
                <th>Hotel Address</th>
                <th>Distance from Railways(km)</th>
                <th>Rate per Night</th>
                <th>Go to..</th>
              </tr>
            </thead>
            <tbody>
              {this.state.hotelsList.map((hotel) => (
                <tr key={hotel.hotel_id}>
                  <td>{hotel.hotel_name}</td>
                  <td>{hotel.add_line1 + ", " + hotel.add_line2}</td>
                  <td>{hotel.dst_fr_rail_st}</td>
                  <td>{hotel.room_rate}/-</td>
                  <td>
                    <a
                      href={
                        "/bookRoom/" + hotel.hotel_id + "/" + hotel.room_rate
                      }
                    >
                      select
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </section>
      </div>
    );
  }
}

export default HotelSelection;
