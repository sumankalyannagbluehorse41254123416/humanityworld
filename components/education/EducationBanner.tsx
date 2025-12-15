"use client";
interface EducationBannerProps {
  bannerImage?: string;
}

export default function EducationBanner({ bannerImage }: EducationBannerProps) {
  return (
    <section>
      <div
        className="all_banner"
        style={{
          backgroundImage: bannerImage
            ? `url(${bannerImage})`
            : "url('/images/education_banner.jpg')", // fallback
        }}
      />
    </section>
  );
}
