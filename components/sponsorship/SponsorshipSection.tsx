"use client";

import Image from "next/image";

export default function SponsorshipSection() {
  return (
    <section id="spnsor">
      <div className="container">
        <div className="row">
          
          <div className="col-lg-6">
            <div className="work_heading homeless_one text-center container sponsorship_banner">
              <h2>SPONSORSHIP</h2>
            </div>

            <div className="sponsor_content">
              <p>
                Talent knows no bounds; it flourishes everywhere, even on the
                streets. Through our interactions, we've encountered numerous
                children who possess remarkable intellect, displaying a
                promising potential despite their lack of resources and
                guidance. It's evident that their futures hold great promise,
                but they are navigating their journeys without adequate means or
                direction.
              </p>

              <p>
                HWF is dedicated to reaching out to these young minds across
                various locations. Our mission involves identifying and
                nurturing the talents of underprivileged children. Through our
                efforts, we aim to extend sponsorships that encompass formal
                education, essential clothing, and sustenance expenses on a
                monthly basis. Your support, no matter how small, can make a
                significant impact in providing a better life for these
                deserving children who are striving to rise above their
                circumstances.
              </p>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="sponsor_img">
              <Image
                src="/images/1692602284418.jpg"
                alt="Sponsorship Image"
                width={600}
                height={400}
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </div>

          <div className="col-lg-6 mt-5">
            <div className="sponsor_img">
              <Image
                src="/images/1696235490648.jpg"
                alt="Second Sponsorship Image"
                width={600}
                height={400}
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </div>

          <div className="col-lg-6 mt-5">
            <div className="sponsor_content sponsor_content22">
              <p>
                By contributing to our cause, you can contribute to the
                transformation of lives. Together, we can offer these children
                the opportunity to build a brighter future, tapping into their
                potential and enabling them to pursue their dreams. Your
                assistance will pave the way for a generation of empowered
                individuals who have the chance to shape their destinies and
                make their mark on the world.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
