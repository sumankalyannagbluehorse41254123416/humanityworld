"use client";

import React from "react";

interface CMSSection {
  title?: string;
  shortDescription?: string;
  description?: string;
  subsections?: CMSSection[];
}

// Remove CMS unwanted tags
const cleanText = (text: string = "") =>
  text
    .replace(/<p>(\s|&nbsp;)*<\/p>/gi, "")
    .replace(/<\/?(p|ul|li)[^>]*>/gi, "")
    .replace(/&nbsp;/gi, " ")
    .trim();

export default function IndemnificationSection({ data }: { data?: CMSSection }) {
  if (!data) return null;

  return (
    <section id="indimenificution">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">

            {data.title && (
              <div className="all_heading_t">
                <h2>{cleanText(data.title)}</h2>
              </div>
            )}

            <div className="menificition_content limitation_content">
              <ul>
                {data.shortDescription && (
                  <li>{cleanText(data.shortDescription)}</li>
                )}

                {data.subsections?.length ? (
                  <ul className="nest_list">
                    {data.subsections.map((item, index) => (
                      <li key={index}>
                        {cleanText(item.description)}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
