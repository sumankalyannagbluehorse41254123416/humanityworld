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

interface MoreInformationSectionProps {
  data?: SectionData;
}

/* ---------- Clean CMS HTML ---------- */
const cleanText = (html: string = "") =>
  html
    .replace(/<\/?p[^>]*>/gi, "")
    .replace(/<br\s*\/?>/gi, " ")
    .replace(/<[^>]+>/g, "")
    .replace(/\s+/g, " ")
    .trim();

export default function MoreInformationSection({
  data,
}: MoreInformationSectionProps) {
  if (!data) return null;

  return (
    <section id="prop">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">

            {/* ---------- Section Title ---------- */}
            {data.title && (
              <div className="all_heading_t">
                <h2>{cleanText(data.title)}</h2>
              </div>
            )}

            <div className="proparty_content">

              {/* ---------- Dynamic Paragraphs ---------- */}
              {data.subsections?.map(
                (item, index) =>
                  item.description && (
                    <p key={index}>
                      {cleanText(item.description)}
                    </p>
                  )
              )}

              {/* ---------- FIXED LIST ---------- */}
              <ul>
                <li>By visiting this link: ___________</li>
                <li>E-mail address: _______</li>
              </ul>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
