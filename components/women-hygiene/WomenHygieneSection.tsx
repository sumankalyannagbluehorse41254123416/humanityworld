"use client";

import Image from "next/image";

interface Section {
  title?: string;
  shortDescription?: string;
  image?: string;
}

// helper to clean HTML
const stripHtml = (html: string = "") =>
  html
    .replace(/<\/?p[^>]*>/g, "")
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();

interface WomenHygieneSectionProps {
  section: Section;
}

export default function WomenHygieneSection({
  section,
}: WomenHygieneSectionProps) {
  if (!section) return null;

  return (
    <section id="health_care">
      <div className="container">
        <div className="row">

          {/* TEXT */}
          <div className="col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="work_heading education_mt">
              <h2>{stripHtml(section.title)}</h2>
            </div>

            <div className="womwn_pera">
              <p>{stripHtml(section.shortDescription)}</p>
            </div>
          </div>

          {/* IMAGE */}
          <div className="col-lg-6 col-md-12 col-sm-12 col-12">
            {section.image && (
              <div className="womwn_img">
                <Image
                  src={section.image}
                  alt={stripHtml(section.title) || "Women Hygiene"}
                  width={600}
                  height={400}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
