"use client";

/* ---------------- Helper: remove ALL HTML tags ---------------- */
const cleanText = (html: string = "") =>
  html
    .replace(/<[^>]*>/g, "") // remove all HTML tags (p, strong, etc.)
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

interface YourChoicesProps {
  section: Section | null;
}

export default function YourChoices({ section }: YourChoicesProps) {
  const title = cleanText(section?.title || "Your Choices");
  const intro = cleanText(section?.shortDescription || "");

  return (
    <section id="donor">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {/* Heading */}
            <div className="all_heading_t">
              <h2>{title}</h2>
            </div>

            <div className="donor_content list_a">
              {/* Intro text */}
              {intro && <h6>{intro}</h6>}

              <ul className="data_list">
                {/* Dynamic list */}
                {section?.subsections?.map((sub, index) => {
                  const liTitle = cleanText(sub?.title || "");
                  const desc = cleanText(sub?.description || "");

                  return (
                    <li key={index}>
                      {liTitle && <strong>{liTitle}</strong>}
                      {desc && <p>{desc}</p>}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
