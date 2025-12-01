"use client";
import React from "react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div
      data-elementor-type="wp-page"
      data-elementor-id="662"
      className="elementor elementor-662"
    >
      <section
        className="elementor-section elementor-top-section elementor-element elementor-element-630742a elementor-section-full_width elementor-section-height-default elementor-section-height-default"
        data-id="630742a"
        data-element_type="section"
        data-settings='{"background_background":"classic"}'
      >
        <div className="elementor-container elementor-column-gap-default">
          <div
            className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-a8347c5"
            data-id="a8347c5"
            data-element_type="column"
          >
            <div className="elementor-widget-wrap elementor-element-populated">
              <section
                className="elementor-section elementor-inner-section elementor-element elementor-element-3b87d87 elementor-section-full_width elementor-section-content-middle elementor-section-height-min-height elementor-section-height-default"
                data-id="3b87d87"
                data-element_type="section"
              >
                <div className="elementor-container elementor-column-gap-default">
                  {/* Left Column */}
                  <div
                    className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-948bcaf"
                    data-id="948bcaf"
                    data-element_type="column"
                  >
                    <div className="elementor-widget-wrap elementor-element-populated hwf_pp_img">
                      {/* Heading 1 */}
                      <div
                        className="elementor-element elementor-element-f3298b2 elementor-widget-mobile__width-inherit elementor-widget elementor-widget-heading"
                        data-id="f3298b2"
                        data-element_type="widget"
                        data-widget_type="heading.default"
                      >
                        <div className="elementor-widget-container">
                          <h2 className="elementor-heading-title elementor-size-default">
                            Empowering Lives, Creating Smiles
                          </h2>
                        </div>
                      </div>

                      {/* Heading 2 */}
                      <div
                        className="elementor-element elementor-element-e92cba6 elementor-widget elementor-widget-heading"
                        data-id="e92cba6"
                        data-element_type="widget"
                        data-widget_type="heading.default"
                      >
                        <div className="elementor-widget-container">
                          <span className="elementor-heading-title elementor-size-medium">
                            HWF - Where Compassion Meets Action
                          </span>
                        </div>
                      </div>

                      {/* Button */}
                      <div
                        className="elementor-element elementor-element-11f236c elementor-align-left elementor-tablet-align-center elementor-widget elementor-widget-button"
                        data-id="11f236c"
                        data-element_type="widget"
                        data-widget_type="button.default"
                      >
                        <div className="elementor-widget-container">
                          <div className="elementor-button-wrapper msin">
                            <Link
                              href="/vision-and-mission"
                              className="elementor-button-link elementor-button elementor-size-lg"
                              role="button"
                              style={{ backgroundColor: "#f56a01" }}
                              target="_blank"
                            >
                              <span className="elementor-button-content-wrapper">
                                <span className="elementor-button-text">
                                  Know Our Mission
                                </span>
                              </span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div
                    className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-2884936"
                    data-id="2884936"
                    data-element_type="column"
                    data-settings='{"background_background":"classic"}'
                  >
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div
                        className="elementor-element elementor-element-173bcdf elementor-view-stacked pulse elementor-shape-circle elementor-widget elementor-widget-icon"
                        data-id="173bcdf"
                        data-element_type="widget"
                        data-widget_type="icon.default"
                      >
                        {/* Empty Placeholder - Preserved */}
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
