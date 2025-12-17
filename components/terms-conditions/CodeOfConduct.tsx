"use client";

import React from "react";

/* ---------------- Types ---------------- */

interface SubSection {
  title?: string;
  description?: string;
}

interface CodeOfConductProps {
  title?: string;
  shortDescription?: string;
  subsections?: SubSection[];
}

/* ---------------- Utils ---------------- */

const cleanText = (html: string = "") =>
  html
    .replace(/&nbsp;/gi, " ")      // remove &nbsp;
    .replace(/<\/?p[^>]*>/g, "")   // remove <p> tags
    .replace(/<[^>]+>/g, "")       // remove all HTML tags
    .replace(/\s+/g, " ")          // collapse multiple spaces
    .trim();

/* ---------------- Component ---------------- */

export default function CodeOfConduct({
  title,
  shortDescription,
  subsections = [],
}: CodeOfConductProps) {
  return (
    <section id="condact">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="condact_conyent">
              {/* Section Title */}
              <div className="all_heading_t">
                <h2>{title}</h2>
              </div>

              <div className="list_a condact_pera">
                <ul>
                  {/* 1️⃣ First LI → section shortDescription */}
                  {shortDescription && (
                    <li className="few_li">
                      {cleanText(shortDescription)}
                    </li>
                  )}

                  {/* 2️⃣ & 3️⃣ → first subsection */}
                  {subsections?.[0]?.title && (
                    <li className="few_li">
                      {cleanText(subsections[0].title)}
                    </li>
                  )}

                  {subsections?.[0]?.description && (
                    <li className="few_li">
                      {cleanText(subsections[0].description)}
                    </li>
                  )}

                  {/* 4️⃣ Remaining subsections */}
                  {subsections.slice(1).map((item, index) => (
                    <React.Fragment key={index}>
                      {item?.title && (
                        <li>{cleanText(item.title)}</li>
                      )}
                      {item?.description && (
                        <p>{cleanText(item.description)}</p>
                      )}
                    </React.Fragment>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
