"use client";

interface Section {
  id?: number;
  title?: string;
  shortDescription?: string;
  description?: string;
  image?: string;
  bannerImage?: string;
  subsections?: Section[];
}

// Remove unwanted <p> tags and all HTML
const cleanText = (html: string = "") =>
  html
    .replace(/<\/?p[^>]*>/g, "")   // remove <p>...</p>
    .replace(/<[^>]+>/g, "")       // remove all HTML tags
    .replace(/&nbsp;/g, " ")       // remove &nbsp;
    .replace(/\s+/g, " ")          // clean extra spaces
    .trim();

export default function MissionVisionSection({ section }: { section?: Section }) {
  const mainTitle = cleanText(section?.title || "VISION & MISSION");
  const subsections = section?.subsections || [];

  const vision = subsections[0] || {};
  const mission = subsections[1] || {};

  return (
    <section id="mission_vission">
      <div className="container">
        <div className="approch_heading">
          <h2>{mainTitle}</h2>
        </div>

        <div className="row">
          {/* Vision */}
          <div className="col-lg-6 col-md-12 col-sm-12 col-12 pb-4 pb-lg-0">
            <div className="mv">
              <h2>{cleanText(vision.title || "HWF's Vision")}</h2>
              <h6></h6>
              <p>{cleanText(vision.description || "")}</p>
            </div>
          </div>

          {/* Mission */}
          <div className="col-lg-6 col-md-12 col-sm-12 col-12 pb-4 pb-lg-0">
            <div className="mv">
              <h2>{cleanText(mission.title || "HWF's Mission")}</h2>
              <h6></h6>
              <p>{cleanText(mission.description || "")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
