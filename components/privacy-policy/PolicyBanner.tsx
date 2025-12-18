"use client";

/* ---------------- Types ---------------- */
interface Section {
  image?: string;
  bannerImage?: string;
}

interface PolicyBannerProps {
  section: Section | null;
}

export default function PolicyBanner({ section }: PolicyBannerProps) {
  const bgImage =
    section?.bannerImage ||
    section?.image ||
    "/images/policy2.jpeg";

  return (
    <div
      className="main_banner_top"
      style={{
        backgroundImage: `url("${bgImage}")`,
        height: "550px",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    />
  );
}
