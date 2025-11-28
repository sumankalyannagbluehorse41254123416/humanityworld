"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import $ from "jquery";

export default function Header() {
  useEffect(() => {
    // We load jQuery only in browser mode
    if (typeof window !== "undefined") {
      import("jquery").then(() => {
        // Load Navigation script
        (function ($: any) {
          if ($.fn.navigation) {
            $("#navigation1").navigation();
            $("#always-hidden-nav").navigation({ hidden: true });
          }
        })($);
      });
    }
  }, []);

  return (
    <header className="header_area" id="mynav">
      <div className="main_header_area animated">
        <div className="container">
          <nav id="navigation1" className="navigation">
            <div className="nav-header">
              <Link className="nav-brand" href="/">
                <Image
                  width={210}
                  height={47.21}
                  src="/images/HWF_logo2.png"
                  alt="Logo"
                />
              </Link>

              <div>
                <Link href="/donate" className="donet_now_top">
                  Donate Now
                </Link>
              </div>

              <div className="nav-toggle"></div>
            </div>

            {/* Menu */}
            <div className="nav-menus-wrapper">
              <ul className="nav-menu align-to-right">

                <li><Link href="/">Home</Link></li>

                <li>
                  <a href="#">About Us</a>
                  <ul className="nav-dropdown">
                    <li><Link href="/who-we-are">Who We Are</Link></li>
                    <li><Link href="/our-approach">Our Approach</Link></li>
                    <li><Link href="/vision-and-mission">Vision & Mission</Link></li>
                    <li><Link href="/our-team">Our Team</Link></li>
                    <li><Link href="/our-volunteers">Our Volunteers</Link></li>
                    <li><Link href="/our-mentors">Our Mentors</Link></li>
                    <li><Link href="/careers">Careers</Link></li>
                  </ul>
                </li>

                <li>
                  <a href="#">Work</a>
                  <ul className="nav-dropdown">
                    <li><Link href="/education">Education</Link></li>
                    <li><Link href="/health-care">Health Care</Link></li>
                    <li><Link href="/women-hygiene">Women Hygiene</Link></li>
                    <li><Link href="/homeless-support">Homeless Support</Link></li>
                  </ul>
                </li>

                <li><Link href="/gallery">Gallery</Link></li>
                <li><Link href="/contact">Contact Us</Link></li>

                <li>
                  <Link href="/donate" className="donet_button">
                    Donate Now
                  </Link>
                </li>

              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
