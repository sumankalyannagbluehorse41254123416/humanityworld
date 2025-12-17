interface BannerWorkGalleryProps {
  image?: string;
}

export default function BannerWorkGallery({ image }: BannerWorkGalleryProps) {
  return (
    <div
      className="banner_work"
      style={{
        backgroundImage: image ? `url(${image})` : "none",
        height: "500px",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    ></div>
  );
}
