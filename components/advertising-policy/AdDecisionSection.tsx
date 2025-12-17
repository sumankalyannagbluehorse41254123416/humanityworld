interface Section {
  title?: string;
  shortDescription?: string;
  description?: string;
  subsections?: Section[];
}

interface Props {
  data?: Section;
}

/* ---------------- Helper: Strip HTML ---------------- */
const stripHtml = (html?: string) => {
  if (!html) return "";
  return html.replace(/<[^>]*>/g, "").trim();
};

export default function AdDecisionSection({ data }: Props) {
  if (!data) return null;

  return (
    <section id="data">
      <div className="container">
        <div className="row col-lg-12">
          
          {/* Section Title */}
          <div className="all_heading_t">
            <h2>{stripHtml(data.title)}</h2>
          </div>

          {/* List */}
          <div className="list_a">
            <ul className="data_list">
              {data.subsections?.map((item, index) => (
                <li key={index}>
                  <p>
                    {stripHtml(
                      item.description || item.shortDescription
                    )}
                  </p>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
