"use client";

/* ---------------- Helper ---------------- */
const cleanText = (html: string = "") =>
  html
    .replace(/<\/?p[^>]*>/g, "") // remove opening & closing <p>
    .replace(/\s+/g, " ")
    .trim();

interface Section {
  title?: string;
  shortDescription?: string;
}

interface DonationRefundSectionProps {
  section: Section | null;
}

export default function DonationRefundSection({
  section,
}: DonationRefundSectionProps) {
  const title = section?.title || "Donation Refunds";
  const description = cleanText(section?.shortDescription);

  return (
    <section id="terms">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="terms_content">
              <div className="all_heading_t">
                <h2>{title}</h2>
              </div>

              {/* ✅ Clean text (NO <p> tag) */}
              {description && <p>{description}</p>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
