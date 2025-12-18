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

interface AwarenessTrainingProps {
  data?: SectionData; // section[74]
}

/* -------- Helper to clean HTML -------- */
const cleanText = (html: string = "") =>
  html
    .replace(/<\/?p[^>]*>/gi, "") // remove <p> tags
    .replace(/<br\s*\/?>/gi, " ") // remove <br>
    .replace(/<[^>]+>/g, "") // remove all HTML
    .replace(/\s+/g, " ")
    .trim();

export default function AwarenessTraining({
  data,
}: AwarenessTrainingProps) {
  if (!data) return null;

  return (
    <section id="donor">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {/* Section Title */}
            {data.title && (
              <div className="all_heading_t">
                <h2>{cleanText(data.title)}</h2>
              </div>
            )}

            {/* Subsection Descriptions */}
            <div className="donor_content list_a">
              <ul className="data_list">
                {data.subsections?.map((item, index) => (
                  <li key={index}>
                    {item.description && (
                      <p>{cleanText(item.description)}</p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
