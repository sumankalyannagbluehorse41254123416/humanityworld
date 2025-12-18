"use client";

/* ---------------- Helper ---------------- */
const cleanText = (html: string = "") =>
  html
    .replace(/<\/?p[^>]*>/g, "") // remove <p> tags
    .replace(/\s+/g, " ")
    .trim();

interface Section {
  title?: string;
  shortDescription?: string;
}

interface EventRefundSectionProps {
  section: Section | null;
}

export default function EventRefundSection({
  section,
}: EventRefundSectionProps) {
  const title = section?.title || "Event Registration and Merchandise";
  const description = cleanText(section?.shortDescription);

  return (
    <section id="terms">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="terms_content">
              <div className="all_heading_t">
                {/* ✅ Dynamic H2 */}
                <h2>{title}</h2>
              </div>

              {/* ✅ Dynamic Paragraph */}
              {description && <p>{description}</p>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
