"use client";

import React from "react";
import Image from "next/image";

interface Section {
  id?: number;
  title?: string;
  shortDescription?: string;
  description?: string;
  image?: string;
  subsections?: Section[];
}

// Remove HTML tags (<p>, <br>, <strong>, etc.)
const stripHtml = (html: string = "") =>
  html
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();

export default function VolunteerInfo({ section }: { section?: Section }) {
  const title = stripHtml(section?.title || "Be a Volunteer and Make a Difference");
  const shortDescription = stripHtml(
    section?.shortDescription ||
      "Join HWF as a volunteer and contribute to meaningful initiatives."
  );

  const image = section?.image || "/images/default.jpg";

  return (
    <section id="vln_df">
      <div className="container">
        <div className="row align-items-center">

          <div className="col-lg-6 col-md-12 col-12 col-sm-12">
            <div className="vln_details">
              <div className="ladt">
                <h2>{title}</h2>
              </div>

              <p>{shortDescription}</p>
            </div>
          </div>

          <div className="col-lg-6 col-md-12 col-12 col-sm-12">
            <div className="vln_img">
              <Image
                src={image}
                alt={title}
                width={516}
                height={290.29}
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
