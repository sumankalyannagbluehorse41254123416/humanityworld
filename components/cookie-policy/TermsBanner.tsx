"use client";

import React from "react";

/* -------- Types -------- */
interface TermsBannerData {
  bannerImage?: string;
}

interface TermsBannerProps {
  data?: TermsBannerData; // section[76]
}

export default function TermsBanner({ data }: TermsBannerProps) {
  if (!data?.bannerImage) return null;

  return (
    <div
      className="main_banner_top"
      style={{
        backgroundImage: `url(${data.bannerImage})`,
        height: "550px",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    />
  );
}
