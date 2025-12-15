interface BannerCareersProps {
  bannerImage?: string;
}

export default function BannerCareers({ bannerImage }: BannerCareersProps) {
  return (
    <section>
      <div
        className="all_banner"
        style={{
          backgroundImage: bannerImage
            ? `url(${bannerImage})`
            : "url('/images/career_banner.jpg')", // fallback
        }}
      />
    </section>
  );
}
