"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect } from "react";
import Image from "next/image";

// Use the same Section interface as page.tsx
interface Section {
  id?: number;
  title?: string;
  description?: string;
  image?: string;
  // Make sure this matches what you have in page.tsx
  [key: string]: any; // Or be more specific: [key: string]: string | number | boolean | undefined | Section[];
}

interface MentorSectionProps {
  mentors: Section[]; // Change from Subsection[] to Section[]
  shortDescription: string;
}

// Array of roles to cycle through
const roles = ["ADVISORS", "ADVISORS", "ADVISORS", "ADVISORS", ""];

// Helper function to strip HTML tags
const stripHtml = (html: string = ""): string => {
  return html
    .replace(/<[^>]*>/g, "") // Remove HTML tags
    .replace(/&nbsp;/g, " ") // Replace &nbsp; with space
    .replace(/\s+/g, " ") // Collapse multiple spaces
    .trim(); // Trim whitespace
};

export default function MentorSection({ mentors, shortDescription }: MentorSectionProps) {
  // 👉 Fix Bootstrap JS execution on client only
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  // Transform subsections to mentor format with dynamic roles
  const transformedMentors = mentors.map((mentor, index) => ({
    id: mentor.id || index,
    name: stripHtml(mentor.title?.toString()) || `Mentor ${index + 1}`,
    role: roles[index % roles.length],
    img: mentor.image?.toString() || "/images/default-mentor.jpg",
    linkedin: "#",
    description: stripHtml(mentor.description?.toString()) || "No description available.",
  }));

  return (
    <section className="team_box">
      <div className="container">
        <div className="team_inner">
          <div className="row">
            {transformedMentors.map((mentor) => (
              <React.Fragment key={mentor.id}>
                {/* Card */}
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                  <div
                    className="team_card"
                    role="button"
                    data-bs-toggle="modal"
                    data-bs-target={`#team${mentor.id}`}
                  >
                    <Image
                      src={mentor.img}
                      alt={mentor.name}
                      width={400}
                      height={400}
                      className="img-fluid"
                    />
                    <div className="team_con">
                      <span className="team_title">{mentor.name}</span>
                      <span>{mentor.role}</span>
                    </div>
                    <ul>
                      <li>
                        <a href={mentor.linkedin}>
                          <i className="ri-linkedin-fill"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Modal */}
                <div
                  className="modal fade team_about_modal"
                  id={`team${mentor.id}`}
                  tabIndex={-1}
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="mt_header">
                        <Image
                          src={mentor.img}
                          alt={mentor.name}
                          width={800}
                          height={400}
                          className="bg_img"
                        />

                        <button
                          type="button"
                          className="close close_modal"
                          data-bs-dismiss="modal"
                        >
                          <i className="ri-close-line"></i>
                        </button>

                        <Image
                          src={mentor.img}
                          alt={mentor.name}
                          width={200}
                          height={200}
                          className="pr_img"
                        />

                        <div className="mt_con">
                          <h4>{mentor.name}</h4>
                          <span>{mentor.role}</span>
                          <ul>
                            <li>
                              <a href={mentor.linkedin} target="_blank" rel="noopener noreferrer">
                                <i className="ri-linkedin-fill"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="modal_body">
                        <div className="modal_inner">
                          <p>{mentor.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>

        <p className="mt-5 mentors_text">
          {stripHtml(shortDescription) || "These mentors, among others, have been instrumental in shaping HWF's path, and their influence continues to drive our mission forward. We express our heartfelt gratitude for their unwavering support and guidance, which has enabled us to touch lives and bring about meaningful change."}
        </p>
      </div>
    </section>
  );
}