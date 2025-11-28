"use client";

import React from "react";

export default function BannerSection() {
  return (
    <section>
      <div
        className="all_banner"
        style={{
          backgroundImage: "url('/images/who_banner.jpeg')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "473.6px",
          width: "100%",
        }}
      ></div>
    </section>
  );
}
