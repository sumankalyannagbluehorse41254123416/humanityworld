"use client";

import React from "react";

interface Props {
  image?: string;
}

export default function BannerAd({ image }: Props) {
  if (!image) return null;

  return (
    <div
      className="main_banner_top"
      style={{
        backgroundImage: `url(${image})`,
        height: "550px",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    />
  );
}
