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

interface CookiesUsageProps {
  section: Section | null;
}

export default function CookiesUsage({ section }: CookiesUsageProps) {
  const title = cleanText(section?.title || "How we use Cookies");
  const intro = cleanText(section?.shortDescription || "");
  const items = section?.subsections || [];

  return (
    <section id="condact">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="condact_conyent">
              {/* Heading */}
              <div className="all_heading_t">
                <h2>{title}</h2>
              </div>

              {/* List */}
              <div className="list_a condact_pera">
                <ul>
                  {intro && <h6>{intro}</h6>}

                  {items.map((item, index) => (
                    <li key={index}>
                      <strong>{cleanText(item.title)}</strong>
                      <p>{cleanText(item.description)}</p>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
