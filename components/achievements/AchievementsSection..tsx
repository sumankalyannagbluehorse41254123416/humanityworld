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

interface AchievementsSectionProps {
  sections: Section[];
}

/* ---------------- Helpers ---------------- */
const cleanText = (html: string = "") =>
  html
    .replace(/<[^>]*>/g, "")
    .replace(/&nbsp;|&#160;/gi, " ")
    .replace(/\s+/g, " ")
    .trim();

export default function AchievementsSection({
  sections,
}: AchievementsSectionProps) {
  const section = sections?.[40];

  if (!section) return null;

  const sub0 = section.subsections?.[0];
  const sub1 = section.subsections?.[1];

  return (
    <section id="achivement" className="achivement_text">
      <div className="container">

        {/* Main Heading */}
        {sub1?.title && (
          <h1 className="text-center mb-4">
            {cleanText(sub1.title)}
          </h1>
        )}

        {/* ========== IMPACT SECTION ========== */}
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 col-12 impct_per">
            <div className="work_heading education_mt">
              <h2>{cleanText(section.title)}</h2>
            </div>

            {section.shortDescription && (
              <p>{cleanText(section.shortDescription)}</p>
            )}
          </div>

          <div className="col-lg-6 col-md-12 col-sm-12 col-12">
            {section.image && (
              <div className="impact_img">
                <Image
                  src={section.image}
                  alt={cleanText(section.title) || "Impact"}
                  width={600}
                  height={400}
                  // style={{ width: "100%", height: "auto" }}
                />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ========== INNOVATIONS SECTION ========== */}
      <section id="middle_sect">
        <div className="container">
          <div className="row">

            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
              {sub0?.image && (
                <div className="inovation_img">
                  <Image
                    src={sub0.image}
                    alt={cleanText(sub0.title) || "Innovation"}
                    width={600}
                    height={400}
                    // style={{ width: "100%", height: "auto" }}
                  />
                </div>
              )}
            </div>

            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
              {sub0?.title && (
                <div className="heding education_mt">
                  <h2>{cleanText(sub0.title)}</h2>
                </div>
              )}

              <div className="inovate_text">
                {sub0?.description && (
                  <p>{cleanText(sub0.description)}</p>
                )}

                {sub1?.description && (
                  <p>{cleanText(sub1.description)}</p>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>
    </section>
  );
}
