"use client";

import React from "react";
import Image from "next/image";

const EmpowerSection = () => {
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
              {/* Inner Section */}
              <section
                className="elementor-section elementor-inner-section elementor-element elementor-element-6ecb52a elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                data-id="6ecb52a"
                data-element_type="section"
              >
                <div className="elementor-container elementor-column-gap-default">
                  {/* Left Column */}
                  <div
                    className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-d4e617f"
                    data-id="d4e617f"
                    data-element_type="column"
                  >
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div
                        className="elementor-element elementor-element-6d8a55a animated-slow elementor-absolute elementor-widget__width-initial elementor-hidden-mobile elementor-widget elementor-widget-image animated pulse hoods_img"
                        data-id="6d8a55a"
                        data-element_type="widget"
                      >
                        <div className="elementor-widget-container elementor-widget-container11">
                          <Image
                            src="/images/1703154375256.png"
                            alt="empower"
                            width={383}
                            height={894}
                            priority
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div
                    className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-7f3e878"
                    data-id="7f3e878"
                    data-element_type="column"
                  >
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div
                        className="elementor-element elementor-element-426706a elementor-widget elementor-widget-heading"
                        data-id="426706a"
                      >
                        <div className="elementor-widget-container">
                          <h2 className="elementor-heading-title elementor-size-default empower_text">
                            Empower Underprivileged Children With The Right to Education to Pursue Livelihoods
                          </h2>
                        </div>
                      </div>

                      <div className="elementor-element elementor-element-ea0c1fa elementor-widget elementor-widget-heading">
                        <div className="elementor-widget-container">
                          <span className="elementor-heading-title elementor-size-medium especially_text">
                            Especially Rural Women and Adolescent Girls
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Bottom Section Placeholder (Hidden Images commented out like original) */}
              <section className="elementor-section elementor-inner-section elementor-element elementor-element-2bba130">
                <div className="elementor-container elementor-column-gap-default"></div>
              </section>

              {/* Work Section (icons commented like original) */}
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
