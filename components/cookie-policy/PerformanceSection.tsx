"use client";

import React from "react";

/* ---------- Types ---------- */
interface SubSection {
  description?: string;
}

interface SectionData {
  title?: string;
  subsections?: SubSection[];
}

interface PerformanceSectionProps {
  data?: SectionData; // sections[83]
}

/* ---------- Helper ---------- */
const cleanText = (html: string = "") =>
  html
    .replace(/<\/?p[^>]*>/gi, "")
    .replace(/<br\s*\/?>/gi, " ")
    .replace(/<[^>]+>/g, "")
    .replace(/\s+/g, " ")
    .trim();

export default function PerformanceSection({
  data,
}: PerformanceSectionProps) {
  if (!data) return null;

  return (
    <section id="copy_right">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {/* Title */}
            {data.title && (
              <div className="all_heading_t">
                <h2>{cleanText(data.title)}</h2>
              </div>
            )}

            {/* Paragraphs */}
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
