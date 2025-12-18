"use client";

interface Section {
  image?: string;
}

interface Props {
  data?: Section;
}

export default function BannerSectionAntiSex({ data }: Props) {
  if (!data?.image) return null;

  return (
    <div
      className="main_banner_top"
      style={{
        backgroundImage: `url(${data.image})`,
        height: "550px",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    />
  );
}
