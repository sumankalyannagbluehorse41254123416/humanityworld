"use client";

interface BannerSectionHomelessProps {
  bannerImage?: string;
}

export default function BannerSectionHomeless({
  bannerImage,
}: BannerSectionHomelessProps) {
  return (
    <section>
      <div
        className="banner_work"
        style={{
          backgroundImage: bannerImage
            ? `url(${bannerImage})`
            : "none",
          height: "500px",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></div>
    </section>
  );
}
