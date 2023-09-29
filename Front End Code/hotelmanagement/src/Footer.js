import React from 'react';
import './Footer.css';
class Footer extends React.Component {
    render() {
        return (
        <div id="footer">
            <div id="footpart1">
                {/* <div><i class="fas fa-angle-double-right"></i><a href="#">Affiliated hotels</a></div> */}
                <div><i class="fas fa-angle-double-right"></i><a href="https://www.justdial.com/">Travel Agents</a></div>
                <div><i class="fas fa-angle-double-right"></i><a href="https://www.zoomcar.com/bangalore/">Car Rentals</a></div>
                <div><i class="fas fa-angle-double-right"></i><a href="https://www.justdial.com/travel/flight-booking">Flight Bookings</a></div>
            </div>
            <div id="footpart2">
                <div><i class="fas fa-angle-double-right"></i><a href="https://weather.com/en-IN/?Goto=Redirected">Weather.com</a></div>
                <div><i class="fas fa-angle-double-right"></i><a href="/contactUs">Contact Us</a></div>
                <div><i class="fas fa-angle-double-right"></i><a href="/careers">Career</a></div>
            </div>
        </div>
        )
    }
}

export default Footer;