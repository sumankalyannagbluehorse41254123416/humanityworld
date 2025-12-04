"use client";

export default function InformationWeCollect() {
  return (
    <section id="data">
      <div className="container">
        <div className="row col-lg-12">
          <div className="all_heading_t">
            <h2>Information we collect</h2>
          </div>

          <div className="list_a">
            <ul className="data_list">
              <li>Personal Information:</li>
              <p>
                We may collect personal information from you when you voluntarily
                provide it to us. This information may include, but is not
                limited to, your name, email address, postal address, phone
                number, and any other information you provide through forms on
                our website.
              </p>

              <li>Non-Personal Information:</li>
              <p>
                We may also automatically collect certain non-personal
                information when you visit our website. This may include your IP
                address, browser type, operating system, and the pages you visit
                on our website. We use cookies and similar technologies to
                collect this information, as explained in our Cookie Policy.
              </p>

              <li>Usage Information:</li>
              <p>
                We collect information about how you interact with our website
                and services, including IP addresses, browser types, access
                times, and pages viewed. This information is collected through
                cookies and other tracking technologies.
              </p>

              <li>Location Information:</li>
              <p>
                If you permit location services, we may collect and store
                information about your location to facilitate valet parking
                services and enhance your experience.
              </p>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
