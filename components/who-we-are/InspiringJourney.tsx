"use client";

import Image from "next/image";

export default function InspiringJourney() {
  return (
    <section>
      <div className="main_section">
        <div className="container">
          <div className="row">

            {/* Image Section */}
            <div className="col-lg-5 col-md-12 col-sm-12 col-12">
              <div className="right_content inspiring_box">
                <Image
                  src="/images/1692430619444.jpg"
                  alt="Inspiring Journey"
                  width={500}
                  height={500}
                  className="helping"
                />
              </div>
            </div>

            {/* Text Section */}
            <div className="col-lg-7 col-md-12 col-sm-12 col-12">
              <div className="left_content left_content_tow inspiring_text">
                <h4>HWF&apos;s Inspiring Journey</h4>
                <p>
                  Our journey began by providing water and food to the homeless throughout Mumbai, extending aid to the less fortunate with shelter and financial support, and tending to distressed and needy animals. Over time, our endeavors gained recognition, and we garnered substantial backing and assistance from the Mumbai police for our endeavors. Shiraz Ahmed, in particular, has received numerous awards and certificates from the Mumbai Police in acknowledgement of his societal contributions. Notably, he was awarded the Certificate of Appreciation and the Best Citizen Award for his dedicated efforts during the entire COVID-19 Phase I &amp; II. He was granted special permission by the Mumbai Police to move freely during the lockdown period, diligently patrolling the streets to offer aid wherever it was required across Mumbai.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
