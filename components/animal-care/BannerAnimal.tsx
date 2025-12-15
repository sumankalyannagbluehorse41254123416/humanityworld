"use client";

interface BannerAnimalProps {
  bannerImage?: string;
}

export default function BannerAnimal({ bannerImage }: BannerAnimalProps) {
  return (
    <section>
      <div
        className="all_banner"
        style={{
          backgroundImage: bannerImage
            ? `url(${bannerImage})`
            : "url('/images/animail_care.jpg')", // fallback
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "500px",
        }}
      ></div>
    </section>
  );
}
