"use client";

import Image from "next/image";

interface AnimalCareProps {
  title?: string;
  shortDescription?: string;
  imageOne?: string;
  descriptionOne?: string;
  descriptionTwo?: string;
  imageTwo?: string;
}

/**
 * Remove unwanted HTML tags (like <p>) coming from backend
 */
const stripHtml = (html: string = "") =>
  html.replace(/<[^>]*>/g, "").trim();

export default function AnimalCare({
  title,
  shortDescription,
  imageOne,
  descriptionOne,
  descriptionTwo,
  imageTwo,
}: AnimalCareProps) {
  return (
    <section id="animal_care">
      {/* First Section */}
      <div className="container">
        <div className="row">

          {/* Left Content */}
          <div className="col-lg-6">
            <div className="work_heading animal_heading text-center education_mt">
              <h2>{stripHtml(title)}</h2>
            </div>

            {shortDescription && (
              <div className="care">
                <p>{stripHtml(shortDescription)}</p>
              </div>
            )}

            {descriptionOne && (
              <div className="care_left_img">
                <p>{stripHtml(descriptionOne)}</p>
              </div>
            )}
          </div>

          {/* Right Image */}
          <div className="col-lg-6">
            {imageOne && (
              <div className="care_right_img">
                <Image
                  src={imageOne}
                  alt={stripHtml(title) || "Animal Care"}
                  width={456}
                  height={360}
                  priority
                />
              </div>
            )}
          </div>

        </div>
      </div>

      {/* Second Section */}
      <div className="container mt-5">
        <div className="row">

          {/* Left Image */}
          <div className="col-lg-6">
            {imageTwo && (
              <div className="care_right_img">
                <Image
                  src={imageTwo}
                  alt="Animal Care Support"
                  width={456}
                  height={360}
                />
              </div>
            )}
          </div>

          {/* Right Content */}
          <div className="col-lg-6">
            {descriptionTwo && (
              <div className="care_left_img ntm">
                <p>{stripHtml(descriptionTwo)}</p>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
