"use client";

import Image from "next/image";
import React from "react";

export default function WhoWeAreSection() {
  return (
    <section>
      <div className="main_section main_section_bg1">
        <div className="container">

          <div className="row">
            <div className="col-lg-7 col-md-12 col-sm-12 col-12">
              <div className="left_content societal_box left_content_one">
                <h4>WHO WE ARE</h4>
                <p>
                  HWF is a secular, non-profit organization located in India, registered under the
                  Societies’ Registration Act of 1860. It was established in 2022 with the intent of
                  actively contributing to society and bringing smiles to as many faces as possible.
                  Although officially founded in 2022, HWF's activities and initiatives trace back to
                  2012, when we wholeheartedly volunteered to assist those in need.
                </p>
              </div>
            </div>

            <div className="col-lg-5 col-md-12 col-sm-12 col-12">
              <div className="right_content">
                <Image
                  src="/images/1694608020184.jpg"
                  alt="Who we are"
                  width={600}
                  height={400}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
