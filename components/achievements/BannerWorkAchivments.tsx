"use client";

interface BannerWorkAchivmentsProps {
  image?: string;
}

export default function BannerWorkAchivments({
  image,
}: BannerWorkAchivmentsProps) {
  if (!image) return null;

  return (
    <section>
      <div
        className="banner_work"
        style={{
          backgroundImage: `url(${image})`,
          height: "500px",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      />
    </section>
  );
}
