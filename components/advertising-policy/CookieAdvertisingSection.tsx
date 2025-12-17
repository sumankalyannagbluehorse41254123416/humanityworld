"use client";

import type { CMSSection } from "../../types/cms";

/* Clean CMS HTML */
const cleanText = (html = "") =>
  html
    .replace(/<p>(\s|&nbsp;)*<\/p>/gi, "")
    .replace(/<\/?p[^>]*>/gi, "")
    .replace(/&nbsp;/gi, " ")
    .trim();

export default function CookieAdvertisingSection({
  data,
}: {
  data?: CMSSection;
}) {
  if (!data) return null;

  return (
    <section id="terms">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="terms_content">

              {/* h2 → section.title */}
              {data.title && (
                <div className="all_heading_t">
                  <h2>{cleanText(data.title)}</h2>
                </div>
              )}

              {/* p → subsection.description */}
              {data.subsections?.map((item, index) => (
                item.description ? (
                  <p key={index}>
                    {cleanText(item.description)}
                  </p>
                ) : null
              ))}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
