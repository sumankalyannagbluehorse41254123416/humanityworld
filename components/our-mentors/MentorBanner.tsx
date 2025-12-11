"use client";

import React from "react";

export default function MentorBanner({ image }: { image?: string }) {
  const bgImage = image || "/images/default-banner.jpg";

  return (
    <section>
      <div
        className="all_banner"
        style={{
          backgroundImage: `url('${bgImage}')`,
        }}
      ></div>
    </section>
  );
}
