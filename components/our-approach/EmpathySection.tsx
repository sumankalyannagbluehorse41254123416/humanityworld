"use client";

import Image from "next/image";

export default function EmpathySection() {
  return (
    <section id="ftremp">
      <div className="container">
        <div className="Empathy">
          <p>HWF's Hands-On Impact</p>
        </div>

        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="empathy_text">
              <h2>Empathy in Action</h2>
              <p>
                HWF has a commitment to directly engage with people, listen to
                their stories, and provide tangible assistance, demonstrate a
                compassionate and hands-on approach to making a difference. We
                are trying to do our best, and we hope our efforts continue to
                bring positive change to the lives of those we touch.
              </p>
            </div>
          </div>

          <div className="col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="empathy_img">
              <Image
                src="/images/1694610300076.jpeg"
                alt="Empathy"
                width={600}
                height={450}
                style={{ width: "100%", height: "auto" }}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
