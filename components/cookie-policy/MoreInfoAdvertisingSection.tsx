"use client";

import React from "react";

/* ---------- Types ---------- */
interface SubSection {
  title?: string;
  description?: string;
}

interface SectionData {
  subsections?: SubSection[];
}

interface MoreInfoAdvertisingSectionProps {
  data?: SectionData;
}

/* ---------- Helper to clean CMS HTML ---------- */
const cleanText = (html: string = "") =>
  html
    .replace(/<\/?p[^>]*>/gi, "")
    .replace(/<br\s*\/?>/gi, " ")
    .replace(/<[^>]+>/g, "")
    .replace(/\s+/g, " ")
    .trim();

export default function MoreInfoAdvertisingSection({
  data,
}: MoreInfoAdvertisingSectionProps) {
  if (!data?.subsections?.length) return null;

  return (
    <section id="donor">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="donor_content list_a">
              <ul className="data_list">

                {data.subsections.map((item, index) => (
                  <React.Fragment key={index}>
                    {item.title && (
                      <li>{cleanText(item.title)}</li>
                    )}

                    {item.description && (
                      <p>{cleanText(item.description)}</p>
                    )}
                  </React.Fragment>
                ))}

              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
