import React from "react";
import { Nav, NavDropdown, Navbar } from "react-bootstrap";
class NavigatorBar extends React.Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" expand="lg" variant="dark">
          <Navbar.Brand href="/">Indian Homes</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/findHotels">Find Hotel</Nav.Link>
              <Nav.Link href="/amenities">Amenities</Nav.Link>
              <Nav.Link href="/Floorplan">Floor Plan</Nav.Link>
              {sessionStorage.getItem("userName") == "admin" ? (
                <NavDropdown title="Booking Details" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/bookCheckIn">
                    Check-In
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/bookCheckOut">
                    Check-Out
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <Nav></Nav>
              )}
              <Nav.Link href="/careers">Careers</Nav.Link>
              <Nav.Link href="/contactUs">Contact us</Nav.Link>
              <Nav.Link href="/aboutUs">About us</Nav.Link>
            </Nav>
            {sessionStorage.getItem("userName") == null ? (
              <Nav>
                <Nav.Link href="/addCustomer">
                  <i class="fas fa-user-plus"></i> Sign Up
                </Nav.Link>
                <Nav.Link href="http://localhost:3000/login">
                  <i class="fas fa-user-circle"></i> Login
                </Nav.Link>
              </Nav>
            ) : (
              <NavDropdown
                title={sessionStorage.getItem("userName")}
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item
                  onClick={() => {
                    sessionStorage.removeItem("userName");
                    localStorage.removeItem("data");
                  }}
                >
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
export default NavigatorBar;
