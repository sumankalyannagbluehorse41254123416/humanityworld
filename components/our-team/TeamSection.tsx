"use client";

import React from "react";

interface Section {
  id?: number;
  title?: string;
  shortDescription?: string;
}

interface TeamSectionProps {
  section?: Section;
}

// Optional helper to remove <p> tags or unwanted HTML
const cleanText = (html: string = "") =>
  html
    .replace(/<\/?p[^>]*>/g, "")   // remove <p>...</p>
    .replace(/<[^>]+>/g, "")       // remove all HTML tags
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const TeamSection: React.FC<TeamSectionProps> = ({ section }) => {
  const title = cleanText(section?.title || "OUR TEAM");
  const shortDescription = cleanText(
    section?.shortDescription ||
      "HWF's leadership is composed of Functional Directors who offer strategic guidance."
  );

  return (
    <section>
      <div className="container mt">
        <div className="heading_mentoe text-center">
          <h2>{title}</h2>
          <p>{shortDescription}</p>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
