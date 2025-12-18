"use client";

/* ---------------- Helper ---------------- */
const cleanText = (html: string = "") =>
  html
    .replace(/<\/?p[^>]*>/g, "") // remove <p> tags
    .replace(/\s+/g, " ")
    .trim();

interface SubSection {
  description?: string;
}

interface Section {
  title?: string;
  subsections?: SubSection[];
}

interface SecuritySectionProps {
  section: Section | null;
}

export default function SecuritySection({
  section,
}: SecuritySectionProps) {
  const title = section?.title || "Security";

  return (
    <section id="prop">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="all_heading_t">
              {/* ✅ Dynamic H2 */}
              <h2>{title}</h2>
            </div>

            <div className="proparty_content">
              {/* ✅ Dynamic paragraphs */}
              {section?.subsections?.map((sub, index) => {
                const text = cleanText(sub?.description);
                return text ? <p key={index}>{text}</p> : null;
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
