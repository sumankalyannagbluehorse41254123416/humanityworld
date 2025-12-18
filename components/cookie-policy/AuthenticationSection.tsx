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

interface AuthenticationSectionProps {
  data?: SectionData; // section[79]
}

/* -------- Helper to clean HTML -------- */
const cleanText = (html: string = "") =>
  html
    .replace(/<\/?p[^>]*>/gi, "") // remove <p> tags
    .replace(/<br\s*\/?>/gi, " ") // remove <br>
    .replace(/<[^>]+>/g, "") // remove all HTML
    .replace(/\s+/g, " ")
    .trim();

export default function AuthenticationSection({
  data,
}: AuthenticationSectionProps) {
  if (!data) return null;

  return (
    <section id="terms">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="terms_content">
              {/* Dynamic title */}
              {data.title && (
                <div className="all_heading_t">
                  <h2>{cleanText(data.title)}</h2>
                </div>
              )}

              {/* Dynamic descriptions */}
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
