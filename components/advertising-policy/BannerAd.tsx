"use client";

import Image from "next/image";

export default function BannerAd() {
  return (
    <div
      className="main_banner_top"
      style={{
        backgroundImage: "url(/images/policy3.jpeg)",
        height: "550px",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    ></div>
  );
}
