"use client";

import Image from "next/image";

interface EducationSectionProps {
  title?: string;
  shortDescription?: string;
  image?: string;
}

export default function EducationSection({
  title,
  shortDescription,
  image,
}: EducationSectionProps) {
  return (
    <section id="team_main">
      <div className="container">
        <div className="row">

          {/* Left Content */}
          <div className="col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="work_heading education_mt">
              <h2>{title}</h2>
            </div>
            <div className="left_education_text">
              <p>{shortDescription}</p>
            </div>
          </div>

          {/* Right Image */}
          <div className="col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="right_img_education">
              {image && (
                <Image
                  src={image}
                  alt={title || "Education"}
                  width={600}
                  height={400}
                  // style={{ width: "100%", height: "auto" }}
                />
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
