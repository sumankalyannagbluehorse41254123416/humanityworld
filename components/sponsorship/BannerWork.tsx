"use client";

interface BannerWorkProps {
  bannerImage?: string;
}

export default function BannerWork({ bannerImage }: BannerWorkProps) {
  if (!bannerImage) return null;

  return (
    <section>
      <div
        className="banner_work"
        style={{
          backgroundImage: `url(${bannerImage})`,
          height: "500px",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      />
    </section>
  );
}
