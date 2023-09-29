import React from 'react';
import Homecard from './HomeCard';
import './Main.css';
import Home from './Home.js';
class Main extends React.Component {

    render() {
        return (
            <div id="main">
                <Home/>
                <section id="rentals">
                    <p className="sectPara">Types of Rooms</p>
                    <hr className="blackHR" />
                    <div id="homeTypes">
                        <Homecard image={"apartment.jpg"} alt={"Standard apartment"} details={"Price starts at 1000/-"} />
                        <Homecard image={"Villa1.jpg"} alt={"Premium apartment"} details={"Price starts at 2200/-"} />
                        <Homecard image={"bungalow.jpg"} alt={"Luxury apartment"} details={"Price starts at 3200/-"} />
                    </div>
                </section>

                <div id="parallaxImage">
                    <p id="quoteImage">
                        Enjoy the beautiful places in India, with the people you love.
                        </p>
                </div>
                <section id="featuredAmenities">
                    <p className="sectPara">Featured Amenities</p>
                    <hr className="blackHR" />
                    <div className="amenities">
                        <div className="allAmenities" ><i className="fas fa-utensils"></i>Kitchen</div>
                        <div className="allAmenities" ><i className="fas fa-wifi"></i>Wifi</div>
                        <div className="allAmenities" ><i className="fas fa-swimmer"></i>Pool</div>
                        <div className="allAmenities" ><i className="fas fa-parking"></i>Valet</div>
                        <div className="allAmenities" ><i className="fas fa-fan"></i>AC</div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Main;