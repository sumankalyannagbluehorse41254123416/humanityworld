import Image from "next/image";
import Link from "next/link";

interface ContentImageSectionProps {
  title?: string;
  shortDescription?: string;
  subsectionDescription?: string;
  image?: string;
}

export default function ContentImageSection({
  title,
  shortDescription,
  subsectionDescription,
  image,
}: ContentImageSectionProps) {
  return (
    <section id="content_img">
      <div className="container">
        <div className="row">
          
          {/* Left Content */}
          <div className="col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="left_content_c">
              <h2 className="srt">{title}</h2>

              <p>{shortDescription}</p>

              <p className="explore">{subsectionDescription}</p>

              <p>
                {/* ✅ FIXED: opens contact page in SAME tab */}
                <Link href="/contact">Click Here</Link>
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="right_img_c">
              {image && (
                <Image
                  src={image}
                  alt={title || "Career Image"}
                  width={600}
                  height={400}
                  style={{ width: "100%", height: "auto" }}
                />
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
