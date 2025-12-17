"use client";

interface SubSection {
  title?: string;
  shortDescription?: string;
  description?: string;
}

interface WebsiteInteractionProps {
  title?: string;
  shortDescription?: string;
  subsections?: SubSection[];
}

const cleanText = (html: string = "") =>
  html
    .replace(/<\/?p[^>]*>/g, "")
    .replace(/<[^>]+>/g, "")
    .trim();

export default function WebsiteInteraction({
  title,
  shortDescription,
  subsections = [],
}: WebsiteInteractionProps) {
  return (
    <section id="web_intro">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="all_heading_t">
              <h2>{title}</h2>
            </div>

            <div className="list_a">
              <ul>
                {shortDescription && (
                  <li>{cleanText(shortDescription)}</li>
                )}

                {subsections?.[0]?.description && (
                  <li>{cleanText(subsections[0].description)}</li>
                )}

                {subsections?.[1]?.description && (
                  <li>{cleanText(subsections[1].description)}</li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
