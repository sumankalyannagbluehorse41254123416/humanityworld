"use client";

/* ---------------- Helper to clean HTML ---------------- */
const cleanText = (html: string = "") =>
  html
    .replace(/<[^>]*>/g, "") // remove all HTML tags
    .replace(/\s+/g, " ")
    .trim();

/* ---------------- Types ---------------- */
interface Section {
  title?: string;
  shortDescription?: string;
}

interface ThirdPartyCookiesProps {
  section: Section | null;
}

export default function ThirdPartyCookies({ section }: ThirdPartyCookiesProps) {
  const title = cleanText(section?.title || "Third-Party Cookies");
  const description = cleanText(section?.shortDescription || "");

  return (
    <section id="prop">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {/* Heading */}
            <div className="all_heading_t">
              <h2>{title}</h2>
            </div>

            {/* Content */}
            <div className="proparty_content">
              {description && <p>{description}</p>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
