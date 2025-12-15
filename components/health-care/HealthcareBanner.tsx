"use client";
interface HealthcareBannerProps {
  bannerImage?: string;
}

export default function HealthcareBanner({
  bannerImage,
}: HealthcareBannerProps) {
  return (
    <section>
      <div
        className="all_banner"
        style={{
          backgroundImage: bannerImage
            ? `url(${bannerImage})`
            : "url('/images/helath_care.jpeg')", // fallback
        }}
      />
    </section>
  );
}
