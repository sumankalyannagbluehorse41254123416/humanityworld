"use client";

import type { CMSSection } from "../../types/cms";

/* Clean CMS HTML */
const cleanText = (html = "") =>
  html
    .replace(/<p>(\s|&nbsp;)*<\/p>/gi, "")
    .replace(/<\/?(p|ul|li)[^>]*>/gi, "")
    .replace(/&nbsp;/gi, " ")
    .trim();

export default function AdvertisingCookiesSection({
  data,
}: {
  data?: CMSSection;
}) {
  if (!data) return null;

  return (
    <section id="web_intro">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">

            {/* h2 → section.title */}
            {data.title && (
              <div className="all_heading_t">
                <h2>{cleanText(data.title)}</h2>
              </div>
            )}

            {/* li → subsection.description */}
            {data.subsections && data.subsections.length > 0 && (
              <div className="list_a">
                <ul>
                  {data.subsections.map((item, index) =>
                    item.description ? (
                      <li key={index}>
                        {cleanText(item.description)}
                      </li>
                    ) : null
                  )}
                </ul>
              </div>
            )}

          </div>
        </div>
      </div>
    </section>
  );
}
