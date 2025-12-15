interface HygieneBannerProps {
  bannerImage?: string;
}

export default function HygieneBanner({ bannerImage }: HygieneBannerProps) {
  return (
    <section>
      <div
        className="all_banner"
        style={{
          backgroundImage: bannerImage
            ? `url(${bannerImage})`
            : "url('/images/hygini.jpg')", // fallback
        }}
      />
    </section>
  );
}
