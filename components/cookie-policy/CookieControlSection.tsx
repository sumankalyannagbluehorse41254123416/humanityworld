"use client";

import React from "react";

/* ---------- Types ---------- */
interface SubSection {
  description?: string;
  shortDescription?: string;
}

interface SectionData {
  title?: string;
  shortDescription?: string;
  subsections?: SubSection[];
}

interface CookieControlSectionProps {
  section87?: SectionData;
  section88?: SectionData;
}

/* ---------- Clean CMS HTML ---------- */
const cleanText = (html: string = "") =>
  html
    .replace(/<\/?p[^>]*>/gi, "")
    .replace(/<br\s*\/?>/gi, " ")
    .replace(/<[^>]+>/g, "")
    .replace(/\s+/g, " ")
    .trim();

export default function CookieControlSection({
  section87,
  section88,
}: CookieControlSectionProps) {
  return (
    <section id="condact">
      <div className="container">
        <div className="row">

          {/* ---------- First Block (Index 87) ---------- */}
          {section87 && (
            <div className="col-lg-12">
              <div className="condact_conyent">
                <div className="all_heading_t">
                  <h2>{cleanText(section87.title)}</h2>
                </div>

                <div className="list_a condact_pera">
                  <ul>
                    {section87.subsections?.map((item, index) => {
                      const text =
                        item.shortDescription || item.description;

                      return (
                        text && (
                          <li key={index} className="few_li">
                            {cleanText(text)}
                          </li>
                        )
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* ---------- Second Block (Index 88) ---------- */}
          {section88 && (
            <div className="col-lg-12">
              <div className="condact_conyent">
                <div className="all_heading_t">
                  <h2>{cleanText(section88.title)}</h2>
                </div>

                <div className="list_a condact_pera">
                  <ul>
                    {section88.shortDescription && (
                      <li className="few_li">
                        {cleanText(section88.shortDescription)}
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
