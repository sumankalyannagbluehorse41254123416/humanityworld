import Image from "next/image";

export default function ContentImageSection() {
  return (
    <section id="content_img">
      <div className="container">
        <div className="row">
          
          {/* Left Content */}
          <div className="col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="left_content_c">
              <h2 className="srt">Join HWF for a meaningful career journey</h2>
              <p>
                Stay tuned for more information as we prepare to launch these opportunities.
                Your involvement could mark the beginning of a meaningful journey with HWF,
                where you can contribute your skills, learn, and make a tangible impact on
                the lives of those we serve. Keep an eye out for updates and get ready to
                be part of our transformative mission!
              </p>

              <p className="explore">
                Explore exciting opportunities and join our network today by clicking the
                link below to kickstart your career journey with us.
              </p>

              <p>
                <a href="/contact" target="_blank">
                  Click Here
                </a>
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="right_img_c">
              <Image
                src="/images/1694614317793.jpg"
                alt="Career Image"
                width={600}
                height={400}
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
