"use client";

import React from "react";

/* ---------------- Types ---------------- */
interface SubSection {
  title?: string;
  description?: string;
}

interface Section {
  title?: string;
  subsections?: SubSection[];
}

interface RefundPolicyProps {
  section: Section | null;
}

/* ---------------- Helper ---------------- */
const cleanText = (html: string = "") =>
  html.replace(/<[^>]*>/g, "").trim();

export default function RefundPolicy({ section }: RefundPolicyProps) {
  const sectionTitle = section?.title || "Interaction";

  // first subsection description
  const description =
    section?.subsections?.[0]?.description || "";

  return (
    <section>
      <div className="row">
        <div className="col-lg-12">
          <div className="heading">
            <h2>HUMANITY WORLD FOUNDATION</h2>
            <h6>REFUND POLICY</h6>
          </div>

          <div className="first_pera">
            <div className="all_heading_t">
              {/* ✅ Dynamic h2 */}
              <h2>{sectionTitle}</h2>
            </div>

            <div className="container">
              {/* ✅ Dynamic paragraph */}
              {description && (
                <p>{cleanText(description)}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
