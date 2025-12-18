"use client";

import React from "react";

/* -------- Types -------- */
interface SectionData {
  shortDescription?: string;
}

interface PropertySectionProps {
  data?: SectionData; // section[75]
}

/* -------- Helper to clean HTML -------- */
const cleanText = (html: string = "") =>
  html
    .replace(/<\/?p[^>]*>/gi, "") // remove <p> tags
    .replace(/<br\s*\/?>/gi, " ") // remove <br>
    .replace(/<[^>]+>/g, "") // remove all HTML
    .replace(/\s+/g, " ")
    .trim();

export default function PropertySection({ data }: PropertySectionProps) {
  if (!data?.shortDescription) return null;

  return (
    <section id="prop">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="proparty_content">
              <p>{cleanText(data.shortDescription)}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
