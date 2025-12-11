"use client";

import Image from "next/image";
import React from "react";

interface WhoWeAreProps {
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

export default function WhoWeAreSection({
  title,
  shortDescription,
  image,
}: WhoWeAreProps) {
  return (
    <section>
      <div className="main_section main_section_bg1">
        <div className="container">

          <div className="row">
            <div className="col-lg-7 col-md-12 col-sm-12 col-12">
              <div className="left_content societal_box left_content_one">
                <h4>{stripHtml(title || "WHO WE ARE")}</h4>
                <p>{stripHtml(shortDescription || "")}</p>
              </div>
            </div>

            <div className="col-lg-5 col-md-12 col-sm-12 col-12">
              <div className="right_content">
                {image && (
                  <Image
                    src={image}
                    alt={stripHtml(title || "Who we are")}
                    width={600}
                    height={400}
                    style={{ width: "100%", height: "auto" }}
                  />
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
