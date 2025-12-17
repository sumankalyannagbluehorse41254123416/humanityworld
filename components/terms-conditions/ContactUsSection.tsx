"use client";

import React from "react";

interface Section {
  title?: string;
  description?: string; // used inside subsections
  subsections?: Section[];
}

// Clean CMS unwanted tags
const cleanText = (text: string = "") =>
  text
    .replace(/<p>(\s|&nbsp;)*<\/p>/gi, "")
    .replace(/<\/?p[^>]*>/gi, "")
    .replace(/&nbsp;/gi, " ")
    .trim();

export default function ContactUsSection({
  data,
}: {
  data?: Section;
}) {
  if (!data) return null;

  return (
    <section id="contact_us">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">

            {/* Section Title */}
            {data.title && (
              <div className="all_heading_t">
                <h2>{cleanText(data.title)}</h2>
              </div>
            )}

            {/* Paragraphs from subsections */}
            {data.subsections && data.subsections.length > 0 && (
              <div className="agere_ment_content">
                {data.subsections.map((item, index) => (
                  <p key={index}>
                    {cleanText(item.description)}
                  </p>
                ))}
              </div>
            )}

          </div>
        </div>
      </div>
    </section>
  );
}
