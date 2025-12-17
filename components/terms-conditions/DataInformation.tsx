"use client";

import React from "react";

interface SubSection {
  title?: string;
  description?: string;
}

interface DataInformationProps {
  title?: string;
  subsections?: SubSection[];
}

const cleanText = (html: string = "") =>
  html
    .replace(/<\/?p[^>]*>/g, "")
    .replace(/<[^>]+>/g, "")
    .trim();

export default function DataInformation({
  title,
  subsections = [],
}: DataInformationProps) {
  return (
    <section id="data">
      <div className="container">
        <div className="row col-lg-12">
          <div className="all_heading_t">
            <h2>{title}</h2>
          </div>

          <div className="list_a">
            <ul className="data_list">
              {subsections.map((item, index) => (
                <React.Fragment key={index}>
                  {item?.title && <li>{item.title}</li>}
                  {item?.description && (
                    <p>{cleanText(item.description)}</p>
                  )}
                </React.Fragment>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
