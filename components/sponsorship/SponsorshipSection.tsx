"use client";

import Image from "next/image";

/* ---------------- Types ---------------- */
interface SubSection {
  id?: number;
  title?: string;
  description?: string;
  image?: string;
}

interface Section {
  id?: number;
  title?: string;
  shortDescription?: string;
  image?: string;
  subsections?: SubSection[];
}

interface SponsorshipSectionProps {
  sections: Section[];
}

/* ---------------- Helpers ---------------- */
/**
 * Cleans CMS text:
 * - Removes HTML tags
 * - Removes &nbsp;
 * - Normalizes extra spaces
 */
const cleanText = (html: string = "") =>
  html
    .replace(/<[^>]*>/g, "")     // remove HTML tags
    .replace(/&nbsp;|&#160;/gi, " ") // remove non-breaking spaces
    .replace(/\s+/g, " ")        // normalize spaces
    .trim();

export default function SponsorshipSection({
  sections,
}: SponsorshipSectionProps) {
  const section = sections?.[38];

  if (!section) return null;

  const sub0 = section.subsections?.[0];
  const sub1 = section.subsections?.[1];

  return (
    <section id="spnsor">
      <div className="container">
        <div className="row">

          {/* Left Content */}
          <div className="col-lg-6">
            <div className="work_heading homeless_one text-center container sponsorship_banner">
              <h2>{cleanText(section.title)}</h2>
            </div>

            <div className="sponsor_content">
              {section.shortDescription && (
                <p>{cleanText(section.shortDescription)}</p>
              )}

              {sub0?.description && (
                <p>{cleanText(sub0.description)}</p>
              )}
            </div>
          </div>

          {/* First Image */}
          <div className="col-lg-6">
            {section.image && (
              <div className="sponsor_img">
                <Image
                  src={section.image}
                  alt={cleanText(section.title) || "Sponsorship"}
                  width={600}
                  height={400}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            )}
          </div>

          {/* Second Image */}
          <div className="col-lg-6 mt-5">
            {sub1?.image && (
              <div className="sponsor_img">
                <Image
                  src={sub1.image}
                  alt="Sponsorship Support"
                  width={600}
                  height={400}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            )}
          </div>

          {/* Final Paragraph */}
          <div className="col-lg-6 mt-lg-5">
            <div className="sponsor_content sponsor_content22">
              {sub1?.description && (
                <p>{cleanText(sub1.description)}</p>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
