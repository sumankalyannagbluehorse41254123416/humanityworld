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

// 🔥 Removes ALL HTML tags from backend text
const stripHtml = (html: string = "") =>
  html
    .replace(/<[^>]*>/g, " ")  // remove tags like <p>, <br>, <strong>
    .replace(/\s+/g, " ")      // remove extra spaces
    .trim();

export default function VolunteersSection({ section }: { section?: Section }) {
  const title = section?.title || "OUR VOLUNTEERS";

  // Clean <p> and other tags from shortDescription
  const shortDescription = stripHtml(
    section?.shortDescription ||
      "HWF has a dedicated team of volunteers..."
  );

  const volunteers = section?.subsections || [];

  return (
    <section className="mt">
      <div className="container">
        <h2 className="text-center mt-2">{title}</h2>

        {/* Cleaned text */}
        <h6 className="details">{shortDescription}</h6>

        <div className="row">
          {volunteers.map((vol, index) => (
            <div
              key={index}
              className="col-lg-4 col-md-6 col-sm-12 col-12 pb-4 pb-lg-0"
            >
              <div className="card_1">
                <Image
                  src={vol.image || "/images/default.jpg"}
                  alt={vol.title || "Volunteer"}
                  width={516}
                  height={250}
                  className="w-100"
                  style={{ objectFit: "cover" }}
                />

                <div className="container-card">
                  <h4>
                    <b>{stripHtml(vol.title || "")}</b>
                  </h4>

                  {/* Cleaned description */}
                  <p>{stripHtml(vol.description || "")}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
