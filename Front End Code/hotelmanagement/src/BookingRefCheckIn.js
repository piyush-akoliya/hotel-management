import React, { useState } from 'react'
import './BookingRef.css';

function BookingRefCheckIn() {
    const [bookingRef, setBookingRef] = useState();

    return (
        <div className="images1">
        <div>
            <p><label id="bookRef">Booking Ref:</label> <input type="text" name="bookingref" id="bookingref" onChange={e => setBookingRef(e.target.value)} /></p>
            <a type="button" className="btn btn-primary" href={'/checkin/'+bookingRef}>Check</a>
        </div>
        </div>
    )
}

export default BookingRefCheckIn;
