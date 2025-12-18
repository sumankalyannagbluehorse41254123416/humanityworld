"use client";

/* ---------------- Helpers ---------------- */
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

interface DataSecurityProps {
  section: Section | null;
}

export default function DataSecurity({ section }: DataSecurityProps) {
  const title = cleanText(section?.title || "");
  const shortDesc = cleanText(section?.shortDescription || "");
  const subsections = section?.subsections || [];

  // First 4 → list items, rest → paragraphs
  const listItems = subsections.slice(0, 4);
  const extraParas = subsections.slice(4);

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
              {/* Short Description */}
              {shortDesc && <h6>{shortDesc}</h6>}

              {/* List */}
              {listItems.length > 0 && (
                <ul className="data_list">
                  {listItems.map((item, index) => (
                    <li key={index}>
                      {cleanText(item.title)}
                      <p>{cleanText(item.description)}</p>
                    </li>
                  ))}
                </ul>
              )}

              {/* Extra Paragraphs */}
              {extraParas.map((item, index) => (
                <p key={index}>{cleanText(item.description)}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
