"use client";

interface Props {
  title?: string;
  shortDescription?: string;
}

export default function MentorHeading({ title, shortDescription }: Props) {
  return (
    <section id="mntor">
      <div className="container">
        <div className="heading_mentoe text-center">
          <h2>{title || "OUR MENTORS"}</h2>
          <p>{shortDescription || ""}</p>
        </div>
      </div>
    </section>
  );
}
