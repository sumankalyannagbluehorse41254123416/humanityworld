"use client";

interface Section {
  title?: string;
  shortDescription?: string;
  description?: string;
  subsections?: Section[];
}

interface Props {
  data?: Section;
}

/* ---- helper to remove unwanted HTML ---- */
const stripHtml = (html?: string) =>
  html ? html.replace(/<[^>]*>/g, "").trim() : "";

export default function AntiHarassmentScopeSection({ data }: Props) {
  if (!data) return null;

  const subsection = data.subsections?.[0];

  return (
    <section id="terms">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="terms_content">
              
              {/* First Paragraph */}
              <p>{stripHtml(data.shortDescription)}</p>

              {/* Subsection Title */}
              {subsection?.title && (
                <div className="all_heading_t">
                  <h2>{stripHtml(subsection.title)}</h2>
                </div>
              )}

              {/* Second Paragraph */}
              {subsection?.description && (
                <p>{stripHtml(subsection.description)}</p>
              )}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
