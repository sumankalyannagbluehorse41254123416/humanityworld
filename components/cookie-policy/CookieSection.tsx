"use client";

import React from "react";

/* ---------- Types ---------- */
interface SubSection {
  description?: string;
}

interface SectionData {
  title?: string;
  shortDescription?: string;
  subsections?: SubSection[];
}

interface CookieSectionProps {
  section84?: SectionData;
  section85?: SectionData;
  section86?: SectionData;
}

/* ---------- Helper ---------- */
const cleanText = (html: string = "") =>
  html
    .replace(/<\/?p[^>]*>/gi, "")
    .replace(/<br\s*\/?>/gi, " ")
    .replace(/<[^>]+>/g, "")
    .replace(/\s+/g, " ")
    .trim();

export default function CookieSection({
  section84,
  section85,
  section86,
}: CookieSectionProps) {
  return (
    <section id="copy_right">
      <div className="container">
        <div className="row">

          {/* ---------- Section 84 ---------- */}
          {section84 && (
            <div className="col-lg-12">
              <div className="all_heading_t">
                <h2>{cleanText(section84.title)}</h2>
              </div>

              <div className="copy_pera">
                {section84.subsections?.map(
                  (item, index) =>
                    item.description && (
                      <p key={index}>{cleanText(item.description)}</p>
                    )
                )}
              </div>
            </div>
          )}

          {/* ---------- Section 85 ---------- */}
          {section85 && (
            <div className="col-lg-12">
              <div className="all_heading_t">
                <h2>{cleanText(section85.title)}</h2>
              </div>

              <div className="copy_pera">
                {section85.shortDescription && (
                  <p>{cleanText(section85.shortDescription)}</p>
                )}
              </div>
            </div>
          )}

          {/* ---------- Section 86 ---------- */}
          {section86 && (
            <div className="col-lg-12">
              <div className="all_heading_t">
                <h2>{cleanText(section86.title)}</h2>
              </div>

              <div className="copy_pera">
                {section86.shortDescription && (
                  <p>{cleanText(section86.shortDescription)}</p>
                )}
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
