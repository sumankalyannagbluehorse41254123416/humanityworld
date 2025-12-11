"use client";

import Image from "next/image";

interface EmpathyProps {
  title?: string;
  shortDescription?: string;
  image?: string;
}

const cleanText = (html: string = "") =>
  html
    .replace(/<\/?p[^>]*>/g, "")  // remove p tags
    .replace(/<[^>]+>/g, "")      // remove all html tags
    .replace(/\s+/g, " ")
    .trim();

export default function EmpathySection({
  title,
  shortDescription,
  image,
}: EmpathyProps) {
  return (
    <section id="ftremp">
      <div className="container">
        <div className="Empathy">
          <p>HWF&apos;s Hands-On Impact</p>
        </div>

        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="empathy_text">
              <h2>{title}</h2>

              <p>{cleanText(shortDescription || "")}</p>
            </div>
          </div>

          <div className="col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="empathy_img">
              <Image
                src={image || "/images/placeholder.png"}
                alt="Empathy"
                width={500}
                height={450}
                style={{ width: "200", height: "auto" }}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
