"use client";

import { useState } from "react";

export default function ContactSection() {

  const savecontact = () => {
    alert("Form submitted! (Connect backend here)");
  };

  return (
    <section
      className="elementor-section elementor-3449 my-5 elementor-top-section elementor-element elementor-element-6680ab0 elementor-section-content-space-between elementor-section-boxed elementor-section-height-default elementor-section-height-default"
      data-id="6680ab0"
      data-element_type="section"
    >
      <div className="elementor-container elementor-column-gap-default">

        {/* LEFT COLUMN */}
        <div
          className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-4c888c9"
          data-id="4c888c9"
          data-element_type="column"
        >
          <div className="elementor-widget-wrap elementor-element-populated">
            <div
              className="elementor-element elementor-element-481435f elementor-widget elementor-widget-heading"
              data-id="481435f"
              data-element_type="widget"
              data-widget_type="heading.default"
            >
              <div className="elementor-widget-container contact_box">
                <h2 className="elementor-heading-title elementor-size-default">
                  CONTACT US
                </h2>
                <p>
                  We sincerely thank you for taking the time to explore our website. Your presence is highly valued, and we're grateful for your interest in connecting with us. Kindly take a moment to complete the form below, and we assure you that we will respond to your inquiry within 24-48 hours. Your input is essential to us as we strive to make a meaningful difference in the lives of those we serve. Thank you once again for considering HWF.
                </p>
              </div>

              <ul className="contact_sect_1">
                <li>
                  <i className="ri-building-line" /> 102 1st floor, Jairaj
                  Building Opposite Old Income Tax Office, Bandra Kurla Complex,
                  Bandra East, Mumbai, Maharashtra 400051
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN - FORM */}
        <div
          className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-6653e19"
          data-id="6653e19"
          data-element_type="column"
        >
          <div className="elementor-widget-wrap elementor-element-populated">
            <div
              className="elementor-element elementor-element-52cd97f elementor-widget elementor-widget-heading"
              data-id="52cd97f"
              data-element_type="widget"
              data-widget_type="heading.default"
            >
              <div className="elementor-widget-container">
                <h2
                  className="elementor-heading-title elementor-size-default"
                  style={{ textTransform: "uppercase" }}
                >
                  Fill in the form below
                </h2>
              </div>
            </div>

            {/* CONTACT FORM */}
            <div className="elementor-element elementor-element-dc8ebdf elementor-widget elementor-widget-shortcode">
              <div className="elementor-widget-container">
                <div className="elementor-shortcode">
                  <div className="wpcf7 js" id="wpcf7-f5312-p3449-o1">
                    <form id="contact-form">
                      <div className="row mid-spacing">
                        <div className="form-group col-lg-6 col-md-6 col-sm-12">
                          <input
                            type="text"
                            className="name"
                            name="name"
                            id="name"
                            required
                            placeholder="Enter Your Name"
                          />
                        </div>

                        <div className="form-group col-lg-6 col-md-6 col-sm-12">
                          <input
                            type="text"
                            className="phone"
                            name="phone"
                            id="phone"
                            required
                            placeholder="Enter Your Mobile Number"
                          />
                        </div>

                        <div className="form-group col-lg-6 col-md-6 col-sm-12">
                          <input
                            type="email"
                            className="con-email"
                            name="email"
                            id="email"
                            required
                            placeholder="Your email address"
                          />
                        </div>

                        <div className="form-group col-lg-6 col-md-6 col-sm-12">
                          <input
                            type="text"
                            name="sub"
                            id="subject"
                            required
                            placeholder="Subject"
                          />
                        </div>

                        <div className="form-group col-lg-12 col-md-12 col-sm-12">
                          <textarea
                            name="contact_message"
                            id="message"
                            required
                            className="message form-control"
                            placeholder="Write your message..."
                          />
                        </div>

                        <div className="form-group col-lg-12 col-md-12 col-sm-12">
                          <button
                            className="theme-btn btn-style-four"
                            type="button"
                            style={{ color: "#f46a01" }}
                            onClick={savecontact}
                          >
                            Send Message
                          </button>

                          <div id="msgSubmit" className="text-center text-info h4 hidden contact_gap" />
                          <div id="msgSuccess" className="text-center text-success h4 hidden contact_gap" />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
