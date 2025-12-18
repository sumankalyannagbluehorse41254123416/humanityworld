"use client";

/* ---------------- Helper ---------------- */
const cleanText = (html: string = "") =>
  html
    .replace(/<[^>]*>/g, "") // remove all HTML tags
    .replace(/\s+/g, " ")
    .trim();

/* ---------------- Types ---------------- */
interface SubSection {
  title?: string;
  description?: string;
}

interface Section {
  title?: string;
  shortDescription?: string;
  subsections?: SubSection[];
}

interface HowWeUseInfoProps {
  section: Section | null;
}

export default function HowWeUseInfo({ section }: HowWeUseInfoProps) {
  const title = cleanText(section?.title || "");
  const intro = cleanText(section?.shortDescription || "");
  const items = section?.subsections || [];

  return (
    <section id="web_intro">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {/* Heading */}
            <div className="all_heading_t">
              <h2>{title}</h2>
            </div>

            <div className="list_a">
              {/* Intro */}
              {intro && <h6>{intro}</h6>}

              {/* List */}
              <ul>
                {items.map((item, index) => (
                  <li key={index}>
                    <strong>{cleanText(item.title)}</strong>{" "}
                    {cleanText(item.description)}
                  </li>
                ))}
              </ul>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
