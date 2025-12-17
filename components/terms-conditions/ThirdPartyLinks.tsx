"use client";

import React from "react";

interface Props {
  data?: {
    title?: string;
    shortDescription?: string;
  };
}

// Clean CMS junk (<p>, &nbsp;)
const cleanText = (text: string = "") =>
  text
    .replace(/<p>(\s|&nbsp;)*<\/p>/gi, "")
    .replace(/<\/?p[^>]*>/gi, "")
    .replace(/&nbsp;/gi, " ")
    .trim();

export default function ThirdPartyLinks({ data }: Props) {
  if (!data) return null;

  return (
    <section id="LINKS">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">

            {/* Section Title */}
            {data?.title && (
              <div className="all_heading_t">
                <h2>{cleanText(data.title)}</h2>
              </div>
            )}

            {/* Section Description */}
            {data?.shortDescription && (
              <div className="proparty_content">
                <p>{cleanText(data.shortDescription)}</p>
              </div>
            )}

          </div>
        </div>
      </div>
    </section>
  );
}
