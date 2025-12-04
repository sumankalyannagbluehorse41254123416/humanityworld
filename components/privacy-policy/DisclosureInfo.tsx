"use client";
// app/components/DisclosureInfo.tsx

export default function DisclosureInfo() {
  return (
    <section id="data">
      <div className="container">
        <div className="row col-lg-12">
          <div className="all_heading_t">
            <h2>Disclosure of information to Third Parties</h2>
          </div>

          <div className="list_a">
            <ul className="data_list">
              <h6>
                We do not sell, trade, or rent your personal information to third parties. However, we may share your
                information with trusted third parties for specific purposes, such as:
              </h6>

              <li>Payment Processing:</li>
              <p>
                We may share your payment information with trusted payment processors to facilitate donation
                transactions securely.
              </p>

              <li>Email Delivery:</li>
              <p>
                We may share your email address with reputable email service providers to send you relevant updates and
                communications.
              </p>

              <li>Website Analytics:</li>
              <p>
                We may share non-personal information with analytics providers to better understand how visitors
                interact with our website.
              </p>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
