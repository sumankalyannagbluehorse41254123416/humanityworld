"use client";

import React from "react";

interface Section {
  id?: number;
  title?: string;
  description?: string;
  image?: string;
  subsections?: Section[];
}

// Remove unwanted HTML
const cleanText = (html: string = "") =>
  html
    .replace(/<\/?p[^>]*>/g, "")
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const TeamList = ({ section }: { section?: Section }) => {
  const members = section?.subsections || [];

  return (
    <section id="team_main">
      <div className="container">
        <div className="main_t">
          <h6></h6>
        </div>

        <div className="row">

          {members.map((member, index) => (
            <div
              key={index}
              className="col-lg-4 col-md-6 col-sm-12 col-12"
            >
              <div
                className="team__item set-bg"
                style={{
                  backgroundImage: `url(${member.image || "/images/team-transformed.jpg"})`,
                }}
              >
                <div className="team__text">
                  <div className="team__title">
                    <h4>{cleanText(member.title || "")}</h4>
                    <span>{cleanText(member.description || "")}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default TeamList;
