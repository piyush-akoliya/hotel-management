import "./App.css";
import Main from "./Main";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Login from "./Login.js";
import Invoice from "./Invoice";
import Contact from "./Contact.js";
import Aboutus from "./Aboutus.js";
import BookRoom from "./BookRoom.js";
import Add_cust from "./Add_cust.js";
import Amenities from "./Amenities.js";
import Floorplan from "./Floorplan.js";
import Career_page from "./Career_page";
import React, { Component } from "react";
import Find_Hotel from "./Find_Hotel.js";
import CheckinPage from "./CheckinPage.js";
import CheckoutPage from "./CheckoutPage.js";
import HotelSelection from "./HotelSelection";
import BookingRefCheckIn from "./BookingRefCheckIn.js";
import BookingRefCheckOut from "./BookingRefCheckOut.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/invoice/:id">
            <Invoice />
          </Route>

          <Route path="/findHotels">
            <Find_Hotel />
          </Route>

          <Route path="/amenities">
            <Amenities />
          </Route>

          <Route path="/aboutUs">
            <Aboutus />
          </Route>

          <Route path="/careers">
            <Career_page />
          </Route>

          <Route path="/contactUs">
            <Contact />
          </Route>

          <Route path="/FloorPlan">
            <Floorplan />
          </Route>

          <Route path="/addCustomer">
            <Add_cust />
          </Route>

          <Route
            path="/bookRoom/:hotel_id/:room_rate"
            render={(props) => (
              <BookRoom {...props} key={props.match.params.hotel_id} />
            )}
          ></Route>

          <Route path="/checkout/:id">
            <CheckoutPage />
          </Route>

          <Route path="/bookCheckOut">
            <BookingRefCheckOut />
          </Route>

          <Route path="/checkin/:id">
            <CheckinPage />
          </Route>

          <Route path="/bookCheckIn">
            <BookingRefCheckIn />
          </Route>

          <Route path="/bookRoom">
            <BookRoom />
          </Route>

          <Route
            path="/searchHotels/:stateId/:cityId"
            render={(props) => (
              <HotelSelection {...props} key={props.match.params.stateId} />
            )}
          ></Route>

          <Route path="*"></Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
