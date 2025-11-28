"use client";
import React from "react";

export default function TopBar() {
  return (
    <div className="header2-topbar">
      <div className="top-bar">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <ul className="list-unstyled d-sm-flex">
                
                {/* Address */}
                <li className="one same_1">
                  <i className="ri-map-pin-5-fill mr-2"></i>
                  <span>
                    Bandra Kurla Complex, Bandra East, Mumbai, Maharashtra&nbsp;400051
                  </span>
                </li>

                {/* Phone */}
                <li className="same_1">
                  <i className="ri-phone-fill mr-2"></i>
                  <span>+91 9967868731</span>
                </li>

                {/* Email */}
                <li className="same_1">
                  <i className="ri-mail-fill mr-2"></i>
                  <span>shirazhwf@gmail.com</span>
                </li>
              </ul>
            </div>

            {/* Social Icons (Uncomment if needed) */}
            {/* 
            <div className="col-lg-3">
              <div className="social-medias float-right">
                <a href="https://facebook.com/" className="text-theme" target="_blank" rel="noopener noreferrer">
                  <i className="ri-facebook-circle-fill"></i>
                </a>
                <a href="https://www.linkedin.com/" className="text-theme" target="_blank" rel="noopener noreferrer">
                  <i className="ri-linkedin-box-fill"></i>
                </a>
                <a href="https://pinterest.com/" className="text-theme" target="_blank" rel="noopener noreferrer">
                  <i className="ri-instagram-line"></i>
                </a>
                <a href="https://twitter.com/" className="text-theme" target="_blank" rel="noopener noreferrer">
                  <i className="ri-twitter-fill"></i>
                </a>
              </div>
            </div>
            */}
          </div>
        </div>
      </div>
    </div>
  );
}
