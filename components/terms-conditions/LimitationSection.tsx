"use client";

import React from "react";

interface SubSection {
  description?: string;
  subsections?: SubSection[];
}

interface Props {
  data?: {
    title?: string;
    subsections?: SubSection[];
  };
}

const cleanText = (text: string = "") =>
  text
    .replace(/<p>(\s|&nbsp;)*<\/p>/gi, "")
    .replace(/<\/?(p|ul|li)[^>]*>/gi, "")
    .replace(/&nbsp;/gi, " ")
    .trim();

export default function LimitationSection({ data }: Props) {
  if (!data) return null;

  return (
    <section id="limitation">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">

            {data.title && (
              <div className="all_heading_t">
                <h2>{cleanText(data.title)}</h2>
              </div>
            )}

            <div className="limitation_content">
              <ul>
                {data.subsections?.map((item, index) => (
                  <li key={index}>
                    {cleanText(item.description)}

                    {item.subsections && item.subsections.length > 0 && (
                      <ul className="nest_list">
                        {item.subsections.map((sub, subIndex) => (
                          <li key={subIndex}>
                            {cleanText(sub.description)}
                          </li>
                        ))}
                      </ul>
                    )}
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
