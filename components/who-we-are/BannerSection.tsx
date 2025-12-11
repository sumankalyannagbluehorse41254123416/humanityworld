"use client";

interface BannerProps {
  bannerImage?: string;
}

export default function BannerSection({ bannerImage }: BannerProps) {
  return (
    <section>
      <div
        className="all_banner"
        style={{
          backgroundImage: `url('${bannerImage || "/images/who_banner.jpeg"}')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "473.6px",
          width: "100%",
        }}
      ></div>
    </section>
  );
}
