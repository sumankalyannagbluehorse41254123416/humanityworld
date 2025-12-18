"use client";

/* ---------------- Helper ---------------- */
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

interface CookiesPolicyProps {
  section: Section | null;
}

export default function CookiesPolicy({ section }: CookiesPolicyProps) {
  const title = cleanText(section?.title || "Cookies Policy");
  const description = cleanText(section?.shortDescription || "");

  return (
    <section id="copy_right">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {/* Heading */}
            <div className="all_heading_t">
              <h2>{title}</h2>
            </div>

            {/* Content */}
            <div className="copy_pera">
              {description && <p>{description}</p>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
