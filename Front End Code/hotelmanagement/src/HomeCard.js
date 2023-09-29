import React from 'react';
import './homeCard.css';
class Homecard extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="homeCard">
                <img src={this.props.image} className="rentalImages" alt={this.props.alt} />
                <h3 className="homeTitle">{this.props.alt}</h3>
                <p>{this.props.details}</p>
                
            </div>
        );
    }
}

export default Homecard;