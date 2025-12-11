"use client";

import Image from "next/image";
import React from "react";

interface InspiringProps {
  title?: string;
  shortDescription?: string;
  image?: string;
}

const stripHtml = (html: string = "") =>
  html
    .replace(/<[^>]*>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();

export default function InspiringJourney({
  title,
  shortDescription,
  image,
}: InspiringProps) {
  return (
    <section>
      <div className="main_section">
        <div className="container">
          <div className="row">

            {/* Image Section */}
            <div className="col-lg-5 col-md-12 col-sm-12 col-12">
              <div className="right_content inspiring_box">
                {image && (
                  <Image
                    src={image}
                    alt={stripHtml(title || "Inspiring Journey")}
                    width={516}
                    height={344}
                    className="helping"
                  />
                )}
              </div>
            </div>

            {/* Text Section */}
            <div className="col-lg-7 col-md-12 col-sm-12 col-12">
              <div className="left_content left_content_tow inspiring_text">
                <h4>{stripHtml(title || "")}</h4>
                <p>{stripHtml(shortDescription || "")}</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
