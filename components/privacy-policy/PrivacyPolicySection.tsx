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

interface PrivacyPolicySectionProps {
  section: Section | null;
}

export default function PrivacyPolicySection({
  section,
}: PrivacyPolicySectionProps) {
  const title = cleanText(section?.title || "");
  const paragraphs = section?.subsections || [];

  return (
    <section>
      <div className="row">
        <div className="col-lg-12">
          {/* Static Page Heading */}
          <div className="heading">
            <h2>HUMANITY WORLD FOUNDATION</h2>
            <h6>PRIVACY POLICY</h6>
          </div>

          <div className="first_pera">
            {/* Dynamic Section Title */}
            <div className="all_heading_t">
              <h2>{title}</h2>
            </div>

            <div className="container">
              {/* Dynamic Paragraphs */}
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
