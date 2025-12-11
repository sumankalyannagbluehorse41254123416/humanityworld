"use client";

interface HeroBannerProps {
  bannerImage?: string;
}

export default function HeroBanner({ bannerImage }: HeroBannerProps) {
  return (
    <section>
      <div
        className="all_banner"
        style={{
          backgroundImage: `url('${bannerImage || "/images/our_app.jpg"}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "450px",
        }}
      ></div>
    </section>
  );
}
