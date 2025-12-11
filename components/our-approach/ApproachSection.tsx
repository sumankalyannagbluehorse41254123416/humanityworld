"use client";

import Image from "next/image";

interface ApproachProps {
  title?: string;
  shortDescription?: string;
  image?: string;
  subDescription?: string;
}

const stripHtml = (html: string = "") =>
  html
    .replace(/<[^>]*>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();

export default function ApproachSection({
  title,
  shortDescription,
  image,
  subDescription,
}: ApproachProps) {
  return (
    <section id="top_h" className="main_section">
      <div className="container">
        <div className="row">

          {/* Left Image */}
          <div className="col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="left_img">
              {image && (
                <Image
                  src={image}
                  alt={stripHtml(title || "Our Approach")}
                  width={1000}
                  height={1000}
                  className="img-fluid"
                />
              )}
            </div>
          </div>

          {/* Right Text */}
          <div className="col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="right_text">
              <div className="second_heading">
                <h2>{stripHtml(title || "")}</h2>
              </div>

              <p>{stripHtml(shortDescription || "")}</p>

              <p>{stripHtml(subDescription || "")}</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
