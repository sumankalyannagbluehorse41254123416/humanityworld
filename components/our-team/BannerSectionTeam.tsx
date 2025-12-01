"use client";

import React from "react";
import Image from "next/image";

const BannerSectionTeam: React.FC = () => {
  return (
    <section>
      <div
        className="all_banner"
        style={{
          backgroundImage:
            "url('/images/team-transformed.jpg')",
          height: "400px",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* If you want to use Next.js Image instead of background: */}
      {/* <div className="relative w-full h-[400px]">
        <Image
          src="https://humanityworldfoundation.com/images/team-transformed.jpg"
          alt="Banner"
          fill
          style={{ objectFit: "cover" }}
        />
      </div> */}
    </section>
  );
};

export default BannerSectionTeam;
