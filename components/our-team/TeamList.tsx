"use client";

import React from "react";

const TeamList = () => {
  return (
    <section id="team_main">
      <div className="container">
        <div className="main_t">
          <h6> </h6>
        </div>

        <div className="row">

          {/* Single Starts */}
          <div className="col-lg-4 col-md-6 col-sm-12 col-12">
            <div
              className="team__item set-bg"
              style={{
                backgroundImage: "url('https://hwf.tezcommerce.com/images/Shiraz.jpg')",
              }}
            >
              <div className="team__text">
                <div className="team__title">
                  <h4>Shiraz Ahmad</h4>
                  <span>Director</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12 col-12">
            <div
              className="team__item set-bg"
              style={{
                backgroundImage: "url('https://hwf.tezcommerce.com/images/Lawrence.jpg')",
              }}
            >
              <div className="team__text">
                <div className="team__title">
                  <h4>Lawrence Castellino</h4>
                  <span>Director</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12 col-12">
            <div
              className="team__item set-bg"
              style={{
                backgroundImage: "url('https://hwf.tezcommerce.com/images/Shadab.jpg')",
              }}
            >
              <div className="team__text">
                <div className="team__title">
                  <h4>Shadab Ahmad</h4>
                  <span>Director</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TeamList;
