"use client";

interface TermsSectionProps {
  title?: string;
  shortDescription?: string;
}

const cleanText = (html: string = "") =>
  html
    .replace(/<\/?p[^>]*>/g, "")
    .replace(/<[^>]+>/g, "")
    .trim();

export default function TermsSection({
  title,
  shortDescription,
}: TermsSectionProps) {
  return (
    <section>
      <div className="row">
        <div className="col-lg-12">
          <div className="heading">
            <h2>HUMANITY WORLD FOUNDATION Humanity</h2>
            <h6>TERMS & CONDITIONS</h6>
          </div>

          <div className="first_pera">
            <div className="all_heading_t">
              <h2>{title}</h2>
            </div>

            <div className="container">
              <p>{cleanText(shortDescription)}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
