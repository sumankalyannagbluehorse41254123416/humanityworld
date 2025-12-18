"use client";

interface Section {
  title?: string;
  description?: string;
  subsections?: Section[];
}

interface Props {
  data?: Section;
}

/* ---- helper to remove unwanted HTML ---- */
const stripHtml = (html?: string) =>
  html ? html.replace(/<[^>]*>/g, "").trim() : "";

export default function DefinitionsSection({ data }: Props) {
  if (!data) return null;

  return (
    <section id="web_intro">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">

            {/* Section Title */}
            <div className="all_heading_t">
              <h2>{stripHtml(data.title)}</h2>
            </div>

            {/* Definition List */}
            <div className="list_a">
              <ul>
                {data.subsections?.map((item, index) => (
                  <li key={index}>
                    <strong>{stripHtml(item.title)}:</strong>{" "}
                    {stripHtml(item.description)}
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
