"use client";
import Image from "next/image";

interface CategoryItemType {
  title: string;
  img: string;
  link: string;
}

interface CategoriesSectionProps {
  data: CategoryItemType[];
}

export default function CategoriesSection({ data }: CategoriesSectionProps) {
  return (
    <div
      data-elementor-type="wp-page"
      data-elementor-id="662"
      className="elementor elementor-662"
    >
      <section
        className="elementor-section elementor-top-section elementor-element elementor-element-6e09b1b elementor-section-boxed elementor-section-height-default elementor-section-height-default"
        data-id="6e09b1b"
        data-element_type="section"
      >
        <div className="elementor-container elementor-column-gap-default">
          {data.map((item, index) => (
            <CategoryItem
              key={index}
              link={item.link}
              title={item.title}
              img={item.img}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

interface CategoryProps {
  link: string;
  title: string;
  img: string;
}

const CategoryItem = ({ link, title, img }: CategoryProps) => {
  return (
    <div
      className="elementor-column elementor-col-20 elementor-top-column elementor-element elementor-element-5ce5f93"
      data-element_type="column"
    >
      <div className="elementor-widget-wrap elementor-element-populated">
        <div
          className="elementor-element elementor-element-948cdb4 elementor-view-stacked elementor-shape-circle elementor-mobile-position-top elementor-vertical-align-top elementor-widget elementor-widget-icon-box"
          data-widget_type="icon-box.default"
        >
          <div className="elementor-widget-container">
            <div className="elementor-icon-box-wrapper">
              <div className="elementor-icon-box-icon">
                <a href={link} className="elementor-icon elementor-animation-">
                  <Image
                    src={img}
                    alt={title}
                    width={80}
                    height={80}
                    style={{ objectFit: "contain" }}
                  />
                </a>
              </div>
              <div className="elementor-icon-box-content">
                <h3 className="elementor-icon-box-title">
                  <a href={link}>{title}</a>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
