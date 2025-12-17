"use client";

import React from "react";

/* ---------------- Types ---------------- */
interface CMSSection {
  title?: string;
  shortDescription?: string;
}

/* Remove unwanted <p>, &nbsp; etc */
const cleanText = (html: string = "") =>
  html
    .replace(/<p>(\s|&nbsp;)*<\/p>/gi, "")
    .replace(/<\/?p[^>]*>/gi, "")
    .replace(/&nbsp;/gi, " ")
    .trim();

interface Props {
  data?: CMSSection;
}

export default function AdvertisingIdentifiersSection({ data }: Props) {
  if (!data) return null;

  return (
    <section id="copy_right">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">

            {/* h2 → section.title */}
            {data.title && (
              <div className="all_heading_t">
                <h2>{cleanText(data.title)}</h2>
              </div>
            )}

            {/* p → section.shortDescription */}
            {data.shortDescription && (
              <div className="copy_pera">
                <p>{cleanText(data.shortDescription)}</p>
              </div>
            )}

          </div>
        </div>
      </div>
    </section>
  );
}
