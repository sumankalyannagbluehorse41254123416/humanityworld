"use client";

import React from "react";

interface CMSSection {
  title?: string;
  shortDescription?: string;
}

// Clean CMS unwanted tags
const cleanText = (text: string = "") =>
  text
    .replace(/<p>(\s|&nbsp;)*<\/p>/gi, "")
    .replace(/<\/?p[^>]*>/gi, "")
    .replace(/&nbsp;/gi, " ")
    .trim();

export default function EnterAgreementSection({
  data,
}: {
  data?: CMSSection;
}) {
  if (!data) return null;

  return (
    <section id="aggre">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">

            {/* Section Title */}
            {data.title && (
              <div className="all_heading_t">
                <h2>{cleanText(data.title)}</h2>
              </div>
            )}

            {/* Section Description */}
            {data.shortDescription && (
              <div className="agere_ment_content">
                <p>{cleanText(data.shortDescription)}</p>
              </div>
            )}

          </div>
        </div>
      </div>
    </section>
  );
}
