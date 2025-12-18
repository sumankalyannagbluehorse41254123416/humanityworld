"use client";

interface Section {
  title?: string;
  shortDescription?: string;
}

interface Props {
  data?: Section;
}

/* ---- helper to remove unwanted HTML ---- */
const stripHtml = (html?: string) =>
  html ? html.replace(/<[^>]*>/g, "").trim() : "";

export default function ZeroToleranceSection({ data }: Props) {
  if (!data) return null;

  return (
    <section id="copy_right">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">

            {/* Section Title */}
            <div className="all_heading_t">
              <h2>{stripHtml(data.title)}</h2>
            </div>

            {/* Description */}
            <div className="copy_pera">
              <p>{stripHtml(data.shortDescription)}</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
