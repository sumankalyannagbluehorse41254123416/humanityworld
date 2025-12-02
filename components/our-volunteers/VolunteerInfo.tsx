"use client";

import React from "react";
import Image from "next/image";

const VolunteerInfo = () => {
  return (
    <section id="vln_df">
      <div className="container">
        <div className="row align-items-center">

          <div className="col-lg-6 col-md-12 col-12 col-sm-12">
            <div className="vln_details">
              <div className="ladt">
                <h2>Be a Volunteer and make a Difference</h2>
              </div>
              <p>
                Furthermore, we extend an open invitation to those who share our passion for making a difference. If you're inspired to become an active volunteer with HWF and participate in our ongoing initiatives across Maharashtra, we welcome you wholeheartedly. Your involvement can be tailored to your schedule, availability, and convenience. Feel free to reach out to us to explore how you can join hands with us and contribute to the meaningful work we undertake. Together, we can create a positive impact that reaches far and wide.
              </p>
            </div>
          </div>

          <div className="col-lg-6 col-md-12 col-12 col-sm-12">
            <div className="vln_img">
              <Image
                src="/images/1694612851045.jpeg"
                alt="Volunteer"
                width={600}
                height={500}
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default VolunteerInfo;
