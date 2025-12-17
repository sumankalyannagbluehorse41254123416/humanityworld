"use client";

interface CopyrightNoticeProps {
  title?: string;
  shortDescription?: string;
}

const cleanText = (html: string = "") =>
  html
    .replace(/<\/?p[^>]*>/g, "")
    .replace(/<[^>]+>/g, "")
    .trim();

export default function CopyrightNotice({
  title,
  shortDescription,
}: CopyrightNoticeProps) {
  return (
    <section id="copy_right">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="all_heading_t">
              <h2>{title}</h2>
            </div>

            <div className="copy_pera">
              <p>{cleanText(shortDescription)}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
