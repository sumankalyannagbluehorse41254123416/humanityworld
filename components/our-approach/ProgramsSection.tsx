"use client";

import Image from "next/image";

interface Props {
  title: string;
  subsections: {
    title?: string;
    description?: string;
    image?: string;
  }[];
}

// Function to remove unwanted <p> tags
const stripPTags = (html: string = "") =>
  html
    .replace(/<\/?p[^>]*>/g, "")   // remove <p> and </p>
    .replace(/<p>\s*<\/p>/g, "")   // remove empty <p></p>
    .replace(/\s+/g, " ")          // clean extra spaces
    .trim();

export default function ProgramsSection({ title, subsections }: Props) {
  return (
    <section id="Programs">
      <div className="container">
        <div className="box_heading">
          <h2>{title}</h2>
        </div>

        <div className="row future">
          {subsections?.map((item, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="box_same">
                <div className="icon_png">
                  <Image
                    src={item.image || "/images/placeholder.png"}
                    alt={item.title || "Program"}
                    width={50}
                    height={50}
                  />
                </div>

                <div className="details_box">
                  <h2>{item.title}</h2>

                  {/* Clean Description Without <p> Tag */}
                  <p>{stripPTags(item.description || "")}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
