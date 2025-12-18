"use client";

/* ---------------- Helper ---------------- */
const cleanText = (html: string = "") =>
  html
    .replace(/<[^>]*>/g, "") // remove all HTML tags
    .replace(/\s+/g, " ")
    .trim();

/* ---------------- Types ---------------- */
interface SubSection {
  description?: string;
}

interface Section {
  title?: string;
  subsections?: SubSection[];
}

interface InfoCollectedAutomaticallyProps {
  section: Section | null;
}

export default function InfoCollectedAutomatically({
  section,
}: InfoCollectedAutomaticallyProps) {
  const title = cleanText(section?.title || "");
  const paragraphs = section?.subsections || [];

  return (
    <section id="terms">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="terms_content">
              {/* Heading */}
              <div className="all_heading_t">
                <h2>{title}</h2>
              </div>

              {/* Paragraphs */}
              {paragraphs.map((item, index) => (
                <p key={index}>{cleanText(item.description)}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
