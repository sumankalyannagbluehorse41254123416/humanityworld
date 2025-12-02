"use client";
import React from "react";

const images = [
"/images/1696316213321.jpg",
"/images/1696324625772.jpg",
"/images/1696316243110.jpg",
"/images/1696316258031.jpg",
"/images/1696319731443.jpg",
"/images/1696319813570.jpg",
"/images/1696320028628.jpg",
"/images/1696320043830.jpg",
"/images/1696320063511.jpg",
"/images/1696320109746.jpg",
"/images/1696320162884.jpg",
"/images/1696320191973.jpg",
"/images/1696324143633.jpg",
"/images/1696324189947.jpg",
"/images/1696324216981.jpg",
"/images/1696324247296.jpg",
"/images/1696324354957.jpg",
"/images/1696324392473.jpg",
"/images/1696324420592.jpg",
"/images/1696324500030.jpg",
"/images/1696324532057.jpg",
"/images/1696324560210.jpg",
"/images/1696324674252.jpg",
"/images/1696324702785.jpg",
"/images/1696324750106.jpg",
"/images/1696324767921.jpg",
"/images/1696324796032.jpg",
"/images/1696324868167.jpg",
  // ---- Add all image links here ----
];

export default function Gallery() {
  return (
    <div className="container py-5">
      <h2 className="text-center topTitle mb-1">GALLERY</h2>
      <p className="text-center gallery_box">
        Few initiatives, programs and activities that HWF has taken so far.
      </p>

      <div className="row mt-4">
        {images.map((src, index) => (
          <div key={index} className="col-md-3 col-sm-6 mb-3">
            <div className="gallery_img">
              <div className="card">
                <a className="test-popup-link" href={src}>
                  <img src={src} alt={`gallery-${index}`} className="img-fluid" />
                </a>
                <div className="container card_containt">
                  <h4><b></b></h4>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
