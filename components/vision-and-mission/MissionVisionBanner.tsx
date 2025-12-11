"use client";

interface BannerProps {
  bannerImage?: string;
}

export default function MissionVisionBanner({ bannerImage }: BannerProps) {
  return (
    <section>
      <div
        className="banner all_banner"
        style={{
          backgroundImage: `url(${bannerImage || "/images/Untitled-design-4-1.webp"})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "473.6px",
          width: "100%",
        }}
      ></div>
    </section>
  );
}
