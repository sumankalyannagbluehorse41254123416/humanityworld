"use client";

interface BannerTermsConditionsProps {
  image?: string;
}

export default function BannerTermsConditions({
  image,
}: BannerTermsConditionsProps) {
  return (
    <div
      className="main_banner_top"
      style={{
        backgroundImage: `url(${image || "/images/polic1.jpg"})`,
        height: "550px",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    ></div>
  );
}
