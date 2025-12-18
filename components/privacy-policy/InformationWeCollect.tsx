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
  subsections?: SubSection[];
}

interface InformationWeCollectProps {
  section: Section | null;
}

export default function InformationWeCollect({
  section,
}: InformationWeCollectProps) {
  const title = cleanText(section?.title || "");
  const items = section?.subsections || [];

  return (
    <section id="data">
      <div className="container">
        <div className="row col-lg-12">
          {/* Heading */}
          <div className="all_heading_t">
            <h2>{title}</h2>
          </div>

          {/* List */}
          <div className="list_a">
            <ul className="data_list">
              {items.map((item, index) => (
                <li key={index}>
                  {cleanText(item.title)}
                  <p>{cleanText(item.description)}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
