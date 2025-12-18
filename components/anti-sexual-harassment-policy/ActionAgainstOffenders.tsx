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

interface ActionAgainstOffendersProps {
  data?: SectionData; // section[73]
}

/* -------- Helper to clean HTML -------- */
const cleanText = (html: string = "") =>
  html
    .replace(/<\/?p[^>]*>/gi, "") // remove <p> tags
    .replace(/<br\s*\/?>/gi, " ") // remove <br>
    .replace(/<[^>]+>/g, "") // remove any other HTML
    .replace(/\s+/g, " ")
    .trim();

export default function ActionAgainstOffenders({
  data,
}: ActionAgainstOffendersProps) {
  if (!data) return null;

  return (
    <section id="condact">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="condact_conyent">
              {/* Section Title */}
              {data.title && (
                <div className="all_heading_t">
                  <h2>{cleanText(data.title)}</h2>
                </div>
              )}

              {/* Subsection Descriptions */}
              <div className="list_a condact_pera">
                <ul>
                  {data.subsections?.map((item, index) => (
                    <li key={index} style={{ listStyle: "none" }}>
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
      </div>
    </section>
  );
}
