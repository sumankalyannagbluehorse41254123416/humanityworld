"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

/* ---------------- Utils ---------------- */
const cleanText = (html: string = "") =>
  html
    .replace(/<\/?p[^>]*>/gi, "") // remove <p> tags
    .replace(/<[^>]+>/g, "")     // remove other html tags
    .replace(/&nbsp;/gi, " ")    // fix nbsp
    .replace(/\s+/g, " ")        // normalize spaces
    .trim();

/* ---------------- Types ---------------- */
interface SubSection {
  image?: string;
  title?: string;
  description?: string;
}

interface TestimonialsProps {
  sectionTitle?: string;
  shortDescription?: string;
  subsections?: SubSection[];
}

export default function Testimonials({
  sectionTitle,
  shortDescription,
  subsections = [],
}: TestimonialsProps) {
  const carouselRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const jqueryScript = document.createElement("script");
    jqueryScript.src =
      "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js";
    jqueryScript.async = true;
    document.body.appendChild(jqueryScript);

    jqueryScript.onload = () => {
      const owlScript = document.createElement("script");
      owlScript.src =
        "https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js";
      owlScript.async = true;
      document.body.appendChild(owlScript);

      owlScript.onload = () => {
        const $ = (window as any).$;
        if ($ && carouselRef.current) {
          $(carouselRef.current).owlCarousel({
            loop: true,
            margin: 12,
            nav: false,
            dots: true,
            autoplay: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: true,
            responsive: {
              0: { items: 1 },
              991: { items: 1 },
              1024: { items: 2 },
            },
          });
        }
      };
    };

    /* Load Owl CSS */
    const owlCSS = document.createElement("link");
    owlCSS.rel = "stylesheet";
    owlCSS.href =
      "https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css";
    document.head.appendChild(owlCSS);

    const owlThemeCSS = document.createElement("link");
    owlThemeCSS.rel = "stylesheet";
    owlThemeCSS.href =
      "https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css";
    document.head.appendChild(owlThemeCSS);

    return () => {
      const $ = (window as any).$;
      if ($ && carouselRef.current) {
        $(carouselRef.current).trigger("destroy.owl.carousel");
      }
    };
  }, []);

  return (
    <section className="testimonial-area">
      <div className="container">
        {sectionTitle && (
          <div className="sec-title white-title">
            <h2>{cleanText(sectionTitle)}</h2>
          </div>
        )}

        <div
          className="testimonial-content owl-carousel owl-theme"
          ref={carouselRef}
        >
          {subsections.map((item, index) => (
            <div className="item" key={index}>
              <div className="single-testimonial">
                <div className="round-1 round"></div>
                <div className="round-2 round"></div>

                {/* Section shortDescription */}
                <p>{cleanText(shortDescription)}</p>

                <div className="client-info">
                  <div className="client-video">
                    <Image
                      src={item.image || "/images/placeholder-user.jpg"}
                      alt={item.title || "Client"}
                      width={40}
                      height={40}
                      className="rounded-full object-cover"
                      sizes="40px"
                    />
                  </div>

                  <div className="client-details">
                    <h6>{cleanText(item.title)}</h6>
                    <span>{cleanText(item.description)}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
