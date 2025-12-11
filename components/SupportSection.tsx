"use client";
import Image from "next/image";

interface Subsection {
  image?: string;
  description?: string; // donation
  title?: string;
}

interface SupportData {
  title: string; // section title → h2
  sectionShortDescription: string; // LOCATION comes from here
  subsections: Subsection[];
}

export default function SupportSection({ data }: { data: SupportData }) {
  return (
    <div
      data-elementor-type="wp-page"
      data-elementor-id="662"
      className="elementor elementor-662"
    >
      <section
        className="elementor-section elementor-top-section elementor-element elementor-element-fc952a9 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
        data-id="fc952a9"
        data-element_type="section"
      >
        <div className="elementor-container elementor-column-gap-default">
          <div
            className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-6e6b645"
            data-id="6e6b645"
            data-element_type="column"
          >
            <div className="elementor-widget-wrap elementor-element-populated">

              {/* Dynamic Heading */}
              <div
                className="elementor-element elementor-element-5d3e5aa elementor-widget elementor-widget-heading"
                data-id="5d3e5aa"
                data-widget_type="heading.default"
              >
                <div className="elementor-widget-container">
                  <h2 className="elementor-heading-title elementor-size-default help_box">
                    {data?.title}
                  </h2>
                </div>
              </div>

              {/* Dynamic Cause List */}
              <div
                className="elementor-element elementor-element-lifeline_causes elementor-widget elementor-widget-Causes"
                data-id="lifeline_causes"
                data-widget_type="Causes.7"
              >
                <div className="elementor-widget-container">
                  <div className="row" data-options="[]">

                    {data?.subsections?.map((item, i) => (
                      <CauseCard
                        key={i}
                        img={item.image || "/images/default.png"}
                        donation={item.description || "0"}
                        title={item.title || ""}
                        location={data.sectionShortDescription || ""} // FIXED ✔
                      />
                    ))}

                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

interface CauseCardProps {
  img: string;
  donation: string;
  title: string;
  location: string;
}

const CauseCard = ({ img, donation, title, location }: CauseCardProps) => {
  return (
    <div className="col-md-6 col-sm-6 col-lg-4">
      <div className="cause-item-style2 text-center">
        <figure className="mb-0">
          <Image
            src={img}
            alt={title}
            width={350}
            height={370}
            className="lif-img"
            style={{ objectFit: "cover" }}
          />
        </figure>

        <div className="cause-donation-meta">
          <h4 className="text-white">
            <i className="font-style-normal font-weight-bold">₹</i> {donation}
          </h4>
          <span className="text-white">Needed Donation</span>

          <div className="donation-bar">
            <div className="progress">
              <div className="progress-bar" style={{ width: "59.998909110743%" }}></div>
            </div>
          </div>
        </div>

        <span className="donation-country lif-subtitle">from {location}</span>

        <h3 className="lif-title">
          <a title={title}>{title}</a>
        </h3>
      </div>
    </div>
  );
};
