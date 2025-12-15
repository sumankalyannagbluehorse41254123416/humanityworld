"use client";

import Image from "next/image";

interface HealthCareSectionProps {
  title?: string;
  shortDescription?: string;
  subTitle?: string;
  subDescription?: string;
  subImage?: string;
}

export default function HealthCareSection({
  title,
  shortDescription,
  subTitle,
  subDescription,
  subImage,
}: HealthCareSectionProps) {
  return (
    <section id="health_care">
      {/* Top Heading */}
      <div className="work_heading helth_care_mt text-center container">
        <h2>{title}</h2>
        <p>{shortDescription}</p>
      </div>

      {/* Content */}
      <div className="container my">
        <div className="row">
          {/* Left Content */}
          <div className="col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="helth_pera none_pera_title">
              <h4>{subTitle}</h4>
              <p>{subDescription}</p>
            </div>
          </div>

          {/* Right Image */}
          <div className="col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="helth_img">
              {subImage && (
                <Image
                  src={subImage}
                  alt={subTitle || "Healthcare"}
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
