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

interface AdvertisingRecommendationSectionProps {
  data?: SectionData; // section[81]
}

/* -------- Helper to clean HTML -------- */
const cleanText = (html: string = "") =>
  html
    .replace(/<\/?p[^>]*>/gi, "") // remove <p> tags
    .replace(/<br\s*\/?>/gi, " ") // remove <br>
    .replace(/<[^>]+>/g, "") // remove all HTML
    .replace(/\s+/g, " ")
    .trim();

export default function AdvertisingRecommendationSection({
  data,
}: AdvertisingRecommendationSectionProps) {
  if (!data) return null;

  return (
    <section id="web_intro">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {/* Section title */}
            {data.title && (
              <div className="all_heading_t">
                <h2>{cleanText(data.title)}</h2>
              </div>
            )}

            {/* Subsection list */}
            <div className="list_a">
              <ul>
                {data.subsections?.map(
                  (item, index) =>
                    item.description && (
                      <li key={index}>
                        {cleanText(item.description)}
                      </li>
                    )
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
