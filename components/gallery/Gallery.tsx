"use client";

import Image from "next/image";

/* -------- utils -------- */
const cleanText = (html: string = "") => {
  if (!html) return "";
  const textarea = document.createElement("textarea");
  textarea.innerHTML = html;
  return textarea.value
    .replace(/<\/?p[^>]*>/gi, "")
    .replace(/<[^>]+>/g, "")
    .replace(/\s+/g, " ")
    .trim();
};

/* -------- types -------- */
interface SubSection {
  image?: string;
}

interface GalleryProps {
  title?: string;
  shortDescription?: string;
  subsections?: SubSection[];
}

export default function Gallery({
  title,
  shortDescription,
  subsections = [],
}: GalleryProps) {
  return (
    <div className="container py-5">
      {title && <h2 className="text-center topTitle mb-1">{cleanText(title)}</h2>}

      {shortDescription && (
        <p className="text-center gallery_box">
          {cleanText(shortDescription)}
        </p>
      )}

      <div className="row mt-4">
        {subsections.map((item, index) => (
          <div key={index} className="col-md-3 col-sm-6 mb-3">
            <div className="gallery_img">
              <div className="card">
                <a className="test-popup-link" href={item.image}>
                  <Image
                    src={item.image || "/images/placeholder.jpg"}
                    alt={`gallery-${index}`}
                    width={300}
                    height={220}
                    className="img-fluid"
                  />
                </a>

                <div className="container card_containt">
                  <h4><b></b></h4>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
