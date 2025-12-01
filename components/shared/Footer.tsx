"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="dark-layer position-relative">
      <div className="fixed-bg"></div>
      <div className="pt-30 pb-80">
        <div className="container">
          <div className="row">

            {/* Logo + Social Icons */}
            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 mt-50">
              <div className="widget widget-box widget_lifeline-blog-post">
                <a href="/" className="footer_img" target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/images/HWF_logo.png"
                    alt="Footer Logo"
                    width={235.2}
                    height={156.82}
                  />
                </a>
              </div>

              <div className="footer_icon">
                <a href="https://facebook.com/" title="facebook" target="_blank" rel="noopener noreferrer">
                  <i className="ri-facebook-circle-fill"></i>
                </a>
                <a href="https://www.linkedin.com/" title="linkedin" target="_blank" rel="noopener noreferrer">
                  <i className="ri-linkedin-box-fill"></i>
                </a>
                <a href="https://pinterest.com/" title="pinterest" target="_blank" rel="noopener noreferrer">
                  <i className="ri-instagram-line"></i>
                </a>
                <a href="https://twitter.com/" title="twitter" target="_blank" rel="noopener noreferrer">
                  <i className="ri-twitter-fill"></i>
                </a>
              </div>
            </div>

            {/* Column: About */}
            <div className="col-xl-2 col-lg-2 col-md-6 col-sm-12">
              <div className="same_ftr_link">
                <h6>About Us</h6>
                <ul>
                  <li><a href="/who-we-are">Who We Are</a></li>
                  <li><a href="/our-approach">Our Approach</a></li>
                  <li><a href="/vision-and-mission">Vision &amp; Mission</a></li>
                  <li><a href="/our-team">Our Team</a></li>
                  <li><a href="/our-volunteers">Our Volunteers</a></li>
                  <li><a href="/our-mentors">Our Mentors</a></li>
                  <li><a href="/careers">Careers</a></li>
                </ul>
              </div>
            </div>

            {/* Column: Work */}
            <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6">
              <div className="same_ftr_link">
                <h6>Work</h6>
                <ul>
                  <li><a href="/education">Education</a></li>
                  <li><a href="/health-care">Health Care</a></li>
                  <li><a href="/women-hygiene">Women Hygiene</a></li>
                  <li><a href="/homeless-support">Homeless Support</a></li>
                  <li><a href="/animal-care">Animal Care</a></li>
                  <li><a href="/sponsorship">Sponsorship</a></li>
                  <li><a href="/achievements">Achievements</a></li>
                </ul>
              </div>
            </div>

            {/* Column: Quick Links */}
            <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6">
              <div className="same_ftr_link">
                <h6>Quick Links</h6>
                <ul>
                  <li><a href="/contact">Contact Us</a></li>
                  <li><a href="/gallery">Gallery</a></li>
                  <li><a href="/donate">Donate</a></li>
                  <li><a href="/testimonials">Testimonials</a></li>
                </ul>
              </div>
            </div>

            {/* Column: Policies */}
            <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6">
              <div className="same_ftr_link">
                <h6>Policies</h6>
                <ul>
                  <li><a href="/terms-conditions">Terms &amp; Conditions</a></li>
                  <li><a href="/advertising-policy">Advertising Policy</a></li>
                  <li><a href="/anti-sexual-harassment-policy">Anti-Sexual Harassment</a></li>
                  <li><a href="/cookie-policy">Cookie Policy</a></li>
                  <li><a href="/refund-policy">Refund Policy</a></li>
                  <li><a href="/privacy-policy">Privacy Policy</a></li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}
