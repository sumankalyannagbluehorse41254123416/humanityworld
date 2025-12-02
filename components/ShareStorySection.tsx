"use client";
import Image from "next/image";

export default function ShareStorySection() {
  return (
    <div
      data-elementor-type="wp-page"
      data-elementor-id="662"
      className="elementor elementor-662"
    >
      <section
        className="elementor-section elementor-top-section elementor-element elementor-element-90f2dfd elementor-section-full_width elementor-section-height-default elementor-section-height-default"
        data-id="90f2dfd"
        data-element_type="section"
      >
        <div className="elementor-container elementor-column-gap-default learn_box">
          
          {/* Left Image Column */}
          <div
            className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-3608bee learn_img_box"
            data-id="3608bee"
            data-element_type="column"
          >
            <div className="elementor-widget-wrap elementor-element-populated">
              <div
                className="elementor-element elementor-element-lifeline_gallery elementor-widget elementor-widget-Gallery"
                data-id="lifeline_gallery"
                data-widget_type="Gallery.grid_massonry"
              >
                <div className="elementor-widget-container">
                  <div
                    className="row masonry g-0 height_fix"
                    style={{ position: "relative", height: "404.688px" }}
                  >
                    <div
                      className="col-md-3 col-sm-12 col-lg-3 fltr-itm"
                      style={{ width: "100%" }}
                    >
                      <div className="gallery-box text-center position-relative mb-30 w-100">
                        <a
                          data-fancybox="gallery"
                          className="d-block position-relative"
                          href="#"
                          title="Toys for 6-year-old Babies"
                        >
                          <Image
                            width={200}
                            height={200}
                            src="/images/collage.png"
                            alt="Gallery"
                            className="lif-img"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content Column */}
          <div
            className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-dcb983d toarea-new"
            data-id="dcb983d"
            data-element_type="column"
          >
            <div className="elementor-widget-wrap elementor-element-populated share_box">
              <div
                className="elementor-element elementor-element-fbb1a86 elementor-view-default elementor-mobile-position-top elementor-vertical-align-top elementor-widget elementor-widget-icon-box"
                data-id="fbb1a86"
                data-widget_type="icon-box.default"
              >
                <div className="elementor-widget-container">
                  <div className="elementor-icon-box-wrapper">
                    <div className="elementor-icon-box-icon">
                      <span className="elementor-icon elementor-animation-"></span>
                    </div>

                    <div className="elementor-icon-box-content">
                      <h3 className="elementor-icon-box-title">
                        <span>Share Your Charity Story</span>
                      </h3>

                      <p className="elementor-icon-box-description">
                        Every Member has a story. What's yours?
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* (Optional button or more content can stay here) */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
