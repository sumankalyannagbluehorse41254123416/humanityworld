"use client";

import React from "react";

export default function IndemnificationSection() {
  return (
    <section id="indimenificution">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="all_heading_t">
              <h2>Indemnification</h2>
            </div>

            <div className="menificition_content limitation_content">
              <ul>
                <li>
                  You agree to indemnify and hold Humanity World Foundation and its affiliates, officers, employees,
                  volunteers, partners, and agents harmless from and against any claims, liabilities, damages, losses,
                  and expenses, including reasonable attorneys' fees and costs, arising out of or in any way connected
                  with:
                </li>

                <ul className="nest_list">
                  <li>Your use of our Website or services.</li>
                  <li>Your violation of these Terms or any applicable laws.</li>
                  <li>Your violation of any rights of another person or entity.</li>
                  <li>Any content you post, share, or submit through our Website or services.</li>
                  <li>
                    Any unauthorized access to or use of our Website or services by you or anyone using your account.
                  </li>
                </ul>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
