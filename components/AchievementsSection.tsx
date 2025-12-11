"use client";

interface AchievementsProps {
  title: string;
  shortDescription: string;
}

export default function AchievementsSection({ data }: { data: AchievementsProps }) {
  return (
    <section
      className="elementor-section elementor-top-section elementor-element elementor-element-9108c4e elementor-section-boxed elementor-section-height-default elementor-section-height-default"
      data-id="9108c4e"
      data-element_type="section"
    >
      <div className="elementor-container elementor-column-gap-default">
        <div
          className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-077d5ab"
          data-id="077d5ab"
          data-element_type="column"
        >
          <div className="elementor-widget-wrap elementor-element-populated">
            <section
              className="elementor-section elementor-inner-section elementor-element elementor-element-f939ecf elementor-section-boxed elementor-section-height-default elementor-section-height-default"
              data-id="f939ecf"
              data-element_type="section"
            >
              <div className="elementor-container elementor-column-gap-default">
                <div
                  className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-aecb29d"
                  data-id="aecb29d"
                  data-element_type="column"
                >
                  <div className="elementor-widget-wrap elementor-element-populated">

                    {/* Dynamic Heading */}
                    <div
                      className="elementor-element elementor-element-1a67491 elementor-widget elementor-widget-heading"
                      data-id="1a67491"
                      data-element_type="widget"
                      data-widget_type="heading.default"
                    >
                      <div className="elementor-widget-container">
                        <h3
                          className="elementor-heading-title elementor-size-default"
                          style={{ textAlign: "center" }}
                        >
                          {data?.title}
                        </h3>
                        <p style={{ textAlign: "center" }}>{data?.shortDescription}</p>
                      </div>
                    </div>

                    {/* View More Button (NO CHANGE) */}
                    <div
                      className="elementor-element elementor-element-lifeline_events elementor-widget elementor-widget-Events"
                      data-id="lifeline_events"
                      data-element_type="widget"
                      data-widget_type="Events.list-1"
                    >
                      <div className="elementor-widget-container">
                        <div className="event-style1 row">
                          <div className="col-md-12 text-center mb-2">
                            <a
                              href="/achievements"
                              className="theme-btn activeBtn align-middle"
                              style={{ backgroundColor: "#f56a01" }}
                            >
                              View More
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
