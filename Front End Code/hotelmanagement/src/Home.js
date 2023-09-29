import React from "react";
import "./Home.css";
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stateList: [],
      townList: null,
      stateId: null,
      cityId: null,
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
        <div id="home">
          <h1 id="companyName">Indian Homes</h1>
          <hr />
          <h5>Less like a Hotel, More like a home</h5>
          <div id="search" className="container">
            <select
              name="Select State"
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
            </select>
            <select name="Select Town" ref="town" id="town">
              <option value="">Select Town</option>
              {/* {this.state.townList.map(tl => {
                                            <option id={tl.city_id} value={tl.city_name}>{tl.city_name}</option>
                                        })} */}
            </select>
            <label for="Checkin">Check-In</label> <input type="date" />
            <label for="Checkout">Check-Out</label> <input type="date" />
            <button type="button" className="btn btn-secondary">
              Search
            </button>
          </div>
        </div>
      );
    } else {
      return (
        <div id="home">
          <h1 id="companyName">Indian Homes</h1>
          <hr />
          <h5>Less like a Hotel, More like a home</h5>
          <div id="search" className="container">
            <select
              name="Select State"
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
            </select>
            <select name="Select Town" ref="town" id="town">
              <option value="">Select Town</option>
              {this.state.townList.map((tl) => (
                <option id={tl.city_id} value={tl.city_name}>
                  {tl.city_name}
                </option>
              ))}
            </select>
            <label for="Checkin">Check-In</label> <input type="date" />
            <label for="Checkout">Check-Out</label> <input type="date" />
            <a
              href={
                "/searchHotels/" + this.state.stateId + "/" + this.state.cityId
              }
            >
              <button
                type="button"
                className="btn btn-secondary"
                onClick={this.searchHotel}
              >
                Search
              </button>
            </a>
          </div>
        </div>
      );
    }
  }
}

export default Home;
