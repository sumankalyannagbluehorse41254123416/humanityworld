"use client";

interface Section {
  title?: string;
}

interface Props {
  data?: Section;
}

export default function AntiHarassmentHeader({ data }: Props) {
  if (!data) return null;

  return (
    <section>
      <div className="row">
        <div className="col-lg-12">
          <div className="heading">
            <h2>HUMANITY WORLD FOUNDATION</h2>
            <h6>{data.title}</h6>
          </div>
        </div>
      </div>
    </section>
  );
}
