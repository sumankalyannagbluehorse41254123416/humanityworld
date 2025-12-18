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

interface SiteFeaturesSectionProps {
  data?: SectionData; // section[82]
}

/* -------- Helper to clean HTML -------- */
const cleanText = (html: string = "") =>
  html
    .replace(/<\/?p[^>]*>/gi, "") // remove <p> tags
    .replace(/<br\s*\/?>/gi, " ") // remove <br>
    .replace(/<[^>]+>/g, "") // remove all HTML
    .replace(/\s+/g, " ")
    .trim();

export default function SiteFeaturesSection({
  data,
}: SiteFeaturesSectionProps) {
  if (!data) return null;

  return (
    <section id="copy_right">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {/* Section title */}
            {data.title && (
              <div className="all_heading_t">
                <h2>{cleanText(data.title)}</h2>
              </div>
            )}

            {/* Subsection descriptions */}
            <div className="copy_pera">
              {data.subsections?.map(
                (item, index) =>
                  item.description && (
                    <p key={index}>{cleanText(item.description)}</p>
                  )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
