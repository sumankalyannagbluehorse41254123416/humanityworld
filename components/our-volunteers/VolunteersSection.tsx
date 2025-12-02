"use client";

import React from "react";

const VolunteersSection = () => {
  return (
    <section className="mt">
      <div className="container">
        <h2 className="text-center mt-2">OUR VOLUNTEERS</h2>
        <h6 className="details">
          HWF has a dedicated team of volunteers, compassionate individuals who have willingly stepped forward to contribute to our daily operations. Allow us to introduce you to a handful of these generous souls:
        </h6>

        <div className="row">

          <div className="col-lg-4 col-md-6 col-sm-12 col-12 pb-4 pb-lg-0">
            <div className="card_1">
              <img 
                src="/images/1709013946942.jpg" 
                alt="Avatar" 
                style={{ width: "100%" }} 
              />
              <div className="container-card">
                <h4><b>Christina Robbin</b></h4>
                <p>Director</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12 col-12 pb-4 pb-lg-0">
            <div className="card_1">
              <img 
                src="/images/1709014653687.png" 
                alt="Avatar" 
                style={{ width: "100%" }} 
              />
              <div className="container-card">
                <h4><b>Christina Robbin</b></h4>
                <p>Director</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12 col-12 pb-4 pb-lg-0">
            <div className="card_1">
              <img 
                src="/images/1709014306505.jpg" 
                alt="Avatar" 
                style={{ width: "100%" }} 
              />
              <div className="container-card">
                <h4><b>Christina Robbin</b></h4>
                <p>Director</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default VolunteersSection;
