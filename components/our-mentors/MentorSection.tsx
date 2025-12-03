"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect } from "react";
import Image from "next/image";

const mentors = [
  {
    id: 0,
    name: "Mentor Name 1",
    role: "ADVISORS",
    img: "/images/1692441526400.jpg",
    linkedin: "#",
    description:
      "A visionary leader whose insights have provided us with strategic direction and unwavering support. Their expertise has been instrumental in shaping our mission.",
  },
  {
    id: 1,
    name: "Mentor Name 2",
    role: "ADVISORS",
    img: "/images/1692441574030.jpg",
    linkedin: "#",
    description:
      "A compassionate advocate for change, this mentor has shared their wisdom and experience.",
  },
  {
    id: 2,
    name: "Mentor Name 3",
    role: "ADVISORS",
    img: "/images/1692441647671.jpg",
    linkedin: "#",
    description:
      "A guiding light in our pursuit of making a difference, teaching perseverance and dedication.",
  },
  {
    id: 3,
    name: "Mentor Name 4",
    role: "ADVISORS",
    img: "/images/1692441690544.jpg",
    linkedin: "#",
    description:
      "With a heart dedicated to social impact, this mentor has inspired meaningful collective changes.",
  },
  {
    id: 4,
    name: "Mentor Name 5",
    role: "",
    img: "/images/1692882376082.jpg",
    linkedin: "#",
    description:
      "This mentor's community engagement mindset has fueled our commitment to uplift lives.",
  },
];

export default function MentorSection() {

  // 👉 Fix Bootstrap JS execution on client only
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <section className="team_box">
      <div className="container">
        <div className="team_inner">
          <div className="row">
            {mentors.map((mentor) => (
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
                      <a className="team_title">{mentor.name}</a>
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
                              <a href={mentor.linkedin} target="_blank">
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
          These mentors, among others, have been instrumental in shaping HWF's
          path, and their influence continues to drive our mission forward. We
          express our heartfelt gratitude for their unwavering support and
          guidance, which has enabled us to touch lives and bring about
          meaningful change.
        </p>
      </div>
    </section>
  );
}
