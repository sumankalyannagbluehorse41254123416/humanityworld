"use client";

import React from "react";
import Image from "next/image";

interface EmpowerProps {
  data: {
    title?: string;
    shortDescription?: string;
    image?: string;
  };
}

const EmpowerSection = ({ data }: EmpowerProps) => {
  return (
    <div data-elementor-type="wp-page" data-elementor-id="662" className="elementor elementor-662">
      <section
        className="elementor-section elementor-top-section elementor-element elementor-element-7c130d2 bg-y elementor-section-boxed elementor-section-height-default elementor-section-height-default empower_section"
        style={{ background: "#90ee90" }}
      >
        <div className="elementor-container elementor-column-gap-default">
          <div
            className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-41ecf1a"
            data-id="41ecf1a"
            data-element_type="column"
          >
            <div className="elementor-widget-wrap elementor-element-populated newBox">

              <section
                className="elementor-section elementor-inner-section elementor-element elementor-element-6ecb52a elementor-section-boxed elementor-section-height-default elementor-section-height-default"
              >
                <div className="elementor-container elementor-column-gap-default">

                  {/* --- LEFT SIDE IMAGE (NO DESIGN CHANGED) --- */}
                  <div
                    className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-d4e617f"
                  >
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div
                        className="elementor-element elementor-element-6d8a55a animated-slow elementor-absolute elementor-widget__width-initial elementor-hidden-mobile elementor-widget elementor-widget-image animated pulse hoods_img"
                      >
                        <div className="elementor-widget-container elementor-widget-container11">
                          <Image
                            src={data.image || "/images/1703154375256.png"}
                            alt={data.title || ""}
                            width={383}
                            height={894}
                            priority
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* --- RIGHT SIDE TEXT (NO CSS/HTML CHANGE) --- */}
                  <div
                    className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-7f3e878"
                  >
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div className="elementor-element elementor-element-426706a elementor-widget elementor-widget-heading">
                        <div className="elementor-widget-container">
                          <h2 className="elementor-heading-title elementor-size-default empower_text">
                            {data.title}
                          </h2>
                        </div>
                      </div>

                      <div className="elementor-element elementor-element-ea0c1fa elementor-widget elementor-widget-heading">
                        <div className="elementor-widget-container">
                          <span className="elementor-heading-title elementor-size-medium especially_text">
                            {data.shortDescription}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </section>

              {/* (unchanged rest content) */}
              <section className="elementor-section elementor-inner-section elementor-element elementor-element-2bba130">
                <div className="elementor-container elementor-column-gap-default"></div>
              </section>

              <section className="elementor-section elementor-inner-section elementor-element elementor-element-b28db76">
                <div className="elementor-container elementor-column-gap-default">
                  <div className="elementor-column elementor-col-33"></div>
                  <div className="elementor-column elementor-col-33"></div>
                  <div className="elementor-column elementor-col-33"></div>
                </div>
              </section>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EmpowerSection;
