export default function BannerAnimal() {
  return (
    <section>
      <div
        className="all_banner"
        style={{
          backgroundImage: `url("/images/animail_care.jpg")`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "500px",
        }}
      ></div>
    </section>
  );
}
