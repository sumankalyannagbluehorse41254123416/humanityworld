"use client";

interface BannerRefundProps {
  bgImage: string;
}

export default function BannerRefund({ bgImage }: BannerRefundProps) {
  return (
    <div
      className="main_banner_top"
      style={{
        backgroundImage: `url(${bgImage})`,
        height: "550px",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    ></div>
  );
}
