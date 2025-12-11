"use client";

import React from "react";

interface VolunteerBannerProps {
  image?: string;
}

const VolunteerBanner: React.FC<VolunteerBannerProps> = ({ image }) => {
  return (
    <section>
      <div
        className="all_banner"
        style={{
          backgroundImage: `url('${image}')`,
        }}
      ></div>
    </section>
  );
};

export default VolunteerBanner;
