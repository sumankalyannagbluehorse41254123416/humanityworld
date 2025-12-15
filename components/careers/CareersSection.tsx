interface CareersSectionProps {
  title?: string;
  shortDescription?: string;
}

export default function CareersSection({
  title,
  shortDescription,
}: CareersSectionProps) {
  return (
    <section id="same">
      <div className="container">
        <div className="care_heading text-center">
          <h2>{title || "CAREERS"}</h2>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <p className="text-center sub_title_cer">
              {shortDescription ||
                "Exciting developments are on the horizon at HWF!"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
