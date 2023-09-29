import "./contact.css";
import React, { Component } from "react";

export default function Contact() {
  return (
    <div className="contactCard">
      <h1 className="contactHead">Reach us at..</h1>
      <hr />
      <div className="row" id="cont">
        <div className="col-lg-03">
          <h6>Mumbai</h6>
          <address>
            1,136,Dr Moses Rd,Gandhi Nagar worli,Mumbai Maharashtra 400018
          </address>
          <p>Email:- indianhomesmumbai@gmail.com</p>
          <p>phone:- 8156553736</p>
        </div>
      </div>
      <hr />
      <div className="row" id="cont">
        <div className="col-lg-03">
          <h6>Delhi</h6>
          <address>
            Saket District Centre, Sector 6,Saket,New Delhi 110017
          </address>
          <p>Email:- indianhomesdelhi@gmail.com</p>
          <p>phone:- 8056566736</p>
        </div>
      </div>
      <hr />
      <div className="row" id="cont">
        <div className="col-lg-03">
          <h6>Goa</h6>
          <address>P.O Goa Unniversity, Road,Bambolim,Goa 403206</address>
          <p>Email:- indianhomesgoa@gmail.com</p>
          <p>phone:- 8056524736</p>
        </div>
      </div>
    </div>
  );
}
