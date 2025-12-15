"use client";

import Image from "next/image";

interface HomelessSupportSectionProps {
  title?: string;
  shortDescription?: string;
  descriptionOne?: string;
  descriptionTwo?: string;
  image?: string;
}

export default function HomelessSupportSection({
  title,
  shortDescription,
  descriptionOne,
  descriptionTwo,
  image,
}: HomelessSupportSectionProps) {
  return (
    <section id="home_less_saport">
      <div className="container">
        <div className="row">

          {/* Left Content */}
          <div className="col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="work_heading homeless_one text-center education_mt">
              <h2>{title}</h2>
            </div>

            <p className="home_less">{shortDescription}</p>

            <div className="less_pera">
              <p>{descriptionOne}</p>
              <p>{descriptionTwo}</p>
            </div>
          </div>

          {/* Right Image */}
          <div className="col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="home_less_img">
              {image && (
                <Image
                  src={image}
                  alt={title || "Homeless Support"}
                  width={456}
                  height={490}
                  // style={{ width: "100%", height: "auto" }}
                  priority
                />
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
