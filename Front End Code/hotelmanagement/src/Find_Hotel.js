import React from "react";
import { Form, Button, Col, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./FindHotel.css";

class Find_Hotel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stateList: [],
      townList: null,
      stateId: null,
      cityId: null,
      upd: null,
    };
  }
  componentDidMount() {
    fetch("http://localhost:8083/GetAllStates")
      .then((res) => res.json())
      .then((val) =>
        this.setState({
          stateList: val,
        })
      )
      .then(() => {
        console.log("Component Mounted");
      });
  }

  checker = (e) => {
    this.state.stateList.forEach((st) => {
      if (st.state_name == e.target.value) {
        var val = st.cities;
        this.setState({
          townList: val,
        });
      }
    });
    console.log(this.state.townList);
  };
  searchHotel = () => {
    // e.preventDefault();
    var sta = this.refs.stateName.value;
    var city = this.refs.town.value;
    this.state.townList.forEach((tl) => {
      if (tl.city_name == city) {
        var val2 = tl.city_id;
        this.setState({
          cityId: val2,
        });
      }
    });
    this.state.stateList.forEach((st) => {
      if (st.state_name == sta) {
        var val = st.state_id;
        this.setState({
          stateId: val,
        });
      }
    });

    console.log(this.stateId + " " + this.cityId);
  };

  render() {
    if (this.state.townList == null) {
      return (
        <div className="findHotel">
          <Container fluid="sm" className="cont1">
            <legend id="findHotelHeader">FIND HOTEL</legend>
            <Form>
              <Form.Group controlId="formGridAddress1">
                <Form.Label>Address</Form.Label>
                <Form.Control placeholder="1234 Main St" />
              </Form.Group>

              <Form.Group controlId="formGridAddress2">
                <Form.Label>Address 2</Form.Label>
                <Form.Control placeholder="Apartment, studio, or floor" />
              </Form.Group>

              <Form.Row>
                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>State</Form.Label>
                  <Form.Control
                    as="select"
                    defaultValue="Choose..."
                    ref="stateName"
                    id="state"
                    onChange={(e) => this.checker(e)}
                  >
                    <option id={0} value="">
                      Select State
                    </option>
                    {this.state.stateList.map((st) => (
                      <option id={st.state_id} value={st.state_name}>
                        {st.state_name}
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>City</Form.Label>
                  <Form.Control
                    as="select"
                    defaultValue="Choose..."
                    ref="town"
                    id="town"
                  >
                    <option value="">Select Town</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                  <Form.Label>Zip</Form.Label>
                  <Form.Control placeholder="Enter zip code" />
                </Form.Group>
              </Form.Row>

              {/* <Form.Row>
                                <Form.Group controlId="formBasicRange" >
                                    <Form.Label>Within KM</Form.Label>
                                    <Form.Control type="range" list="tickmarks" min="10" max="50" step="10" />
                                </Form.Group>
                            </Form.Row> */}

              <Form.Row className="justify-content-md-center">
                <Form.Group as={Col} xs lg="1">
                  <Button variant="success" type="submit">
                    Submit
                  </Button>
                </Form.Group>

                <Form.Group as={Col} xs lg="1">
                  <Button variant="danger" type="reset">
                    Reset
                  </Button>
                </Form.Group>
              </Form.Row>
            </Form>
          </Container>
        </div>
      );
    } else {
      return (
        <div className="findHotel">
          <Container fluid="sm" className="cont1">
            <legend id="findHotelHeader">FIND HOTEL</legend>
            <Form>
              <Form.Group controlId="formGridAddress1">
                <Form.Label>Address</Form.Label>
                <Form.Control placeholder="1234 Main St" />
              </Form.Group>

              <Form.Group controlId="formGridAddress2">
                <Form.Label>Address 2</Form.Label>
                <Form.Control placeholder="Apartment, studio, or floor" />
              </Form.Group>

              <Form.Row>
                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>State</Form.Label>
                  <Form.Control
                    as="select"
                    defaultValue="Choose..."
                    ref="stateName"
                    id="state"
                    onChange={(e) => this.checker(e)}
                  >
                    <option id={0} value="">
                      Select State
                    </option>
                    {this.state.stateList.map((st) => (
                      <option id={st.state_id} value={st.state_name}>
                        {st.state_name}
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>City</Form.Label>
                  <Form.Control
                    as="select"
                    defaultValue="Choose..."
                    ref="town"
                    id="town"
                  >
                    <option value="">Select Town</option>
                    {this.state.townList.map((tl) => (
                      <option id={tl.city_id} value={tl.city_name}>
                        {tl.city_name}
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                  <Form.Label>Zip</Form.Label>
                  <Form.Control placeholder="Enter zip code" />
                </Form.Group>
              </Form.Row>

              {/* <Form.Row>
                                <Form.Group controlId="formBasicRange" >
                                    <Form.Label>Within KM</Form.Label>
                                    <Form.Control type="range" list="tickmarks" min="1" max="5" step="1" />
                                </Form.Group>
                            </Form.Row> */}

              <Form.Row className="justify-content-md-center">
                <Form.Group as={Col} xs lg="1">
                  <Button
                    variant="success"
                    type="submit"
                    onClick={this.searchHotel}
                  >
                    <a
                      href={
                        "/searchHotels/" +
                        this.state.stateId +
                        "/" +
                        this.state.cityId
                      }
                    >
                      Submit
                    </a>
                  </Button>
                </Form.Group>

                <Form.Group as={Col} xs lg="1">
                  <Button variant="danger" type="reset">
                    Reset
                  </Button>
                </Form.Group>
              </Form.Row>
            </Form>
          </Container>
        </div>
      );
    }
  }
}

export default Find_Hotel;
