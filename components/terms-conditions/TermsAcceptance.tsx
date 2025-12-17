"use client";

interface TermsAcceptanceProps {
  title?: string;
  shortDescription?: string;
}

const cleanText = (html: string = "") =>
  html
    .replace(/<\/?p[^>]*>/g, "")
    .replace(/<[^>]+>/g, "")
    .trim();

export default function TermsAcceptance({
  title,
  shortDescription,
}: TermsAcceptanceProps) {
  return (
    <section id="terms">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="terms_content">
              <div className="all_heading_t">
                <h2>{title}</h2>
              </div>

              <p>{cleanText(shortDescription)}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
