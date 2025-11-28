"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");

  const subscribeNew = () => {
    if (!email) {
      setError("Please enter an email address");
      return;
    }
    setError("");
    setMsg("Subscribed successfully!");
  };

  return (
    <section className="newsltrsec">
      <div className="container">
        <div className="newsltcont">
          <div className="container">
            <div className="newsletblock15 row">
              
              {/* Logo */}
              <div className="logo45 col-md-3">
                <Link href="/" className="logobox4">
                  <Image
                    src="/images/HWF_logo2.png"
                    alt="Newsletter Logo"
                    width={200}
                    height={80}
                  />
                </Link>
              </div>

              {/* Headings */}
              <div className="newshead45 col-md-3">
                <h2>
                  <strong>NEWSLETTER</strong>
                </h2>
                <h6 className="font-alt">Get latest News &amp; Updates</h6>
              </div>

              {/* Form */}
              <div className="newsform45 col-md-6">
                <form id="subscribemailform" onSubmit={(e) => e.preventDefault()}>
                  <div className="newsinput458">
                    <input
                      type="email"
                      className="form-control sub-email newsinput02"
                      placeholder="Enter Your Email Address"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />

                    <button
                      className="btn btn-success btn-lg"
                      type="button"
                      onClick={subscribeNew}
                    >
                      Subscribe
                    </button>
                  </div>

                  {/* Error */}
                  {error && (
                    <span id="subEmail" className="text-danger contact_gap">
                      {error}
                    </span>
                  )}

                  {/* Success */}
                  {msg && (
                    <h6 id="msg" className="text-center text-white mt-2 contact_gap">
                      {msg}
                    </h6>
                  )}

                  <div className="clearfix"></div>
                </form>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
