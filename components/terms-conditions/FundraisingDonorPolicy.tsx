"use client";

import React from "react";

interface SubSection {
  title?: string;
  description?: string;
}

interface Props {
  data: {
    title?: string;
    subsections?: SubSection[];
  };
}

const cleanText = (text: string = "") =>
  text
    .replace(/<p>(\s|&nbsp;)*<\/p>/gi, "")
    .replace(/<\/?p[^>]*>/gi, "")
    .replace(/&nbsp;/gi, " ")
    .trim();

export default function FundraisingDonorPolicy({ data }: Props) {
  return (
    <section id="donor">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">

            {/* Section Title */}
            {data?.title && (
              <div className="all_heading_t">
                <h2>{cleanText(data.title)}</h2>
              </div>
            )}

            <div className="donor_content list_a">
              <ul className="data_list">
                {data?.subsections?.map((item, index) => (
                  <li key={index}>
                    <strong>{cleanText(item.title)}</strong>
                    <p>{cleanText(item.description)}</p>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
