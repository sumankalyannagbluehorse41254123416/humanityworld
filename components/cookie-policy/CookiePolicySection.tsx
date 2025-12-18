"use client";

import React from "react";

/* -------- Types -------- */
interface SubSection {
  description?: string;
}

interface SectionData {
  title?: string;
  subsections?: SubSection[];
}

interface CookiePolicySectionProps {
  data?: SectionData; // section[77]
}

/* -------- Helper to clean HTML -------- */
const cleanText = (html: string = "") =>
  html
    .replace(/<\/?p[^>]*>/gi, "") // remove <p> tags
    .replace(/<br\s*\/?>/gi, " ") // remove <br>
    .replace(/<[^>]+>/g, "") // remove remaining HTML
    .replace(/\s+/g, " ")
    .trim();

export default function CookiePolicySection({
  data,
}: CookiePolicySectionProps) {
  if (!data) return null;

  return (
    <section>
      <div className="row">
        <div className="col-lg-12">
          <div className="heading">
            {/* Static heading kept as-is */}
            <h2>HUMANITY WORLD FOUNDATION</h2>

            {/* Dynamic title */}
            {data.title && <h6>{cleanText(data.title)}</h6>}
          </div>

          {/* Dynamic descriptions */}
          <div className="first_pera">
            <div className="container">
              {data.subsections?.map((item, index) => (
                item.description && (
                  <p key={index}>{cleanText(item.description)}</p>
                )
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
