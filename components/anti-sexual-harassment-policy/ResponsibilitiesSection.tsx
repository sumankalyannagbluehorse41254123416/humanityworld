"use client";

import React from "react";

/* -------- Types -------- */
interface SubSection {
  title?: string;
  description?: string;
}

interface SectionData {
  title?: string;
  subsections?: SubSection[];
}

interface ResponsibilitiesSectionProps {
  data?: SectionData;
}

/* -------- Helper to remove unwanted HTML -------- */
const cleanText = (html: string = "") =>
  html
    .replace(/<\/?p[^>]*>/gi, "") // remove <p> tags
    .replace(/<br\s*\/?>/gi, " ") // remove <br>
    .replace(/<[^>]+>/g, "") // remove any remaining HTML
    .replace(/\s+/g, " ")
    .trim();

export default function ResponsibilitiesSection({
  data,
}: ResponsibilitiesSectionProps) {
  if (!data) return null;

  return (
    <section id="data">
      <div className="container">
        <div className="row col-lg-12">
          {/* Section Title */}
          {data.title && (
            <div className="all_heading_t">
              <h2>{cleanText(data.title)}</h2>
            </div>
          )}

          {/* Subsections */}
          <div className="list_a">
            <ul className="data_list">
              {data.subsections?.map((item, index) => (
                <li key={index}>
                  {item.title && (
                    <strong>{cleanText(item.title)}</strong>
                  )}
                  {item.description && (
                    <p>{cleanText(item.description)}</p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
