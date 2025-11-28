"use client";

import Image from "next/image";

export default function ApproachSection() {
  return (
    <section id="top_h" className="main_section">
      <div className="container">
        <div className="row">

          {/* Left Image */}
          <div className="col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="left_img">
              <Image
                src="/images/1692872013578.jfif"
                alt="Our Approach"
                width={1000}
                height={1000}
                className="img-fluid"
              />
            </div>
          </div>

          {/* Right Text */}
          <div className="col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="right_text">
              <div className="second_heading">
                <h2>OUR APPROACH</h2>
              </div>

              <p>
                Humanity World Foundation (HWF) - Backed by the support of
                individuals from all walks of life, we address essential needs
                by engaging directly with the people of Maharashtra, particularly
                those in vulnerable circumstances. This includes homeless
                individuals, women, underprivileged children's parents, and the
                children themselves.
              </p>

              <p>
                Our approach centers around daily, hands-on interactions at the
                grassroots level. Concurrently, we inspire people to extend their
                support, contributing in any way they can. Our ultimate goal is to
                elevate this cause to a national priority, progressively expanding
                our reach to encompass all states of India, in order to extend
                assistance to those in need.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
