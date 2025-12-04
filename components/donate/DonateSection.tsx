"use client";

import { useState } from "react";

export default function DonateSection() {
  const [amount, setAmount] = useState("");

  const pay = (value?: string) => {
    if (value) {
      setAmount(value);
    }

    const finalAmount = value || amount;

    if (!finalAmount || isNaN(Number(finalAmount))) {
      alert("Please enter a valid donation amount.");
      return;
    }

    console.log("Donation Amount:", finalAmount);
  };

  return (
    <div className="container mt-3">
      <div className="inrDonation row">
        <h2 className="text-center topTitle mb-3">DONATE</h2>

        <div className="col-lg-12">
          <div className="donet_pera">
            <p>
              Humanity World Foundation (HWF) is currently focused on extending
              assistance to a wide range of individuals throughout Maharashtra.
              Presently, our efforts are concentrated solely within the
              boundaries of Maharashtra. Nonetheless, our aspiration is to
              develop the capacity to aid thousands of individuals and their
              families across the entire expanse of India by the year 2026. Our
              central objective is to provide comprehensive support spanning
              various sectors. This includes Education, Healthcare, Empowerment
              of Women, Menstrual Health &amp; Awareness initiatives for females
              residing in rural areas, Animal Shelter and Care programs,
              Sponsorship for Children, Provision of Food and Water to the
              Homeless, and Ensuring essential necessities for Children in need.
            </p>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="donet_pera">
            <p>
              Your willingness to extend a helping hand is truly heartwarming.
              Every act of kindness, no matter how small, has the potential to
              make a significant impact on someone's life. Your support can
              become a beacon of hope, illuminating the path toward positive
              change and brighter days for those in need. By offering even the
              smallest contribution, you have the power to transform someone's
              circumstances and bring genuine joy to their life. Your compassion
              can be the catalyst for a big smile that radiates across the face
              of an individual facing challenges. Remember, it's often the
              collective effort of many individuals coming together that creates
              a wave of positive change. Your small act of kindness can join
              forces with others, creating a ripple effect that reaches far and
              wide, touching the lives of those who need it the most.
            </p>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="paymentBox mt">
            <h3>Online Donation</h3>
            <p>Your Donation Supports Our Mission</p>

            <form
              method="POST"
              action="/razorpay"
            >
              <input
                type="hidden"
                name="_token"
                value="LivgKzhDRylzj8tyKl37y3RDNmUhHyWThBlMkryg"
              />

              <div className="w-100 selectareaP">
                {["500", "1000", "1500", "2000", "5000", "10000"].map((val) => (
                  <button
                    key={val}
                    type="button"
                    className="priceSelect"
                    onClick={() => pay(val)}
                  >
                    ₹ {val}
                  </button>
                ))}
              </div>

              <div className="inputBox mb-3">
                <span>₹</span>
                <input
                  type="text"
                  name="amount"
                  placeholder="Other Amount"
                  required
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </div>

              <div className="inputBox mb-3">
                <span>
                  <i className="ri-user-fill"></i>
                </span>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Your Name"
                  required
                />
              </div>

              <div className="col-md-12 px-0">
                <div className="donate_box">
                  <button
                    type="submit"
                    className="theme-btn activeBtn align-middle"
                    onClick={() => pay()}
                  >
                    Donate and Support
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="col-lg-12">
          <div className="donet_pera">
            <p>
              Thank you for considering the impact your kindness can have. Your
              generosity and support are a testament to the goodness that exists
              within humanity, and they hold the potential to brighten the lives
              of others in immeasurable ways.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
