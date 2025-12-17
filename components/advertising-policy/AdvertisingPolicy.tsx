"use client";

interface CMSSection {
  title?: string;
  shortDescription?: string;
}

export default function AdvertisingPolicy({ data }: { data?: CMSSection }) {
  if (!data) return null;

  return (
    <section>
      <div className="row">
        <div className="col-lg-12">
          <div className="heading">
            <h2>HUMANITY WORLD FOUNDATION</h2>
            <h6>{data.title}</h6>
          </div>

          <div className="first_pera">
            <div className="container">
              <p
                dangerouslySetInnerHTML={{
                  __html: data.shortDescription || "",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
