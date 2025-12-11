"use client";

import React from "react";

interface BannerProps {
  bannerImage?: string;
}

const BannerSectionTeam: React.FC<BannerProps> = ({ bannerImage }) => {
  return (
    <section>
      <div
        className="all_banner"
        style={{
          backgroundImage: `url(${bannerImage || "/images/team-transformed.jpg"})`,
          height: "400px",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
    </section>
  );
};

export default BannerSectionTeam;
