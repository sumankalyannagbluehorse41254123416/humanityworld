"use client";

import { useState, useEffect } from "react";
import { fetchFormFields } from "@/services/fetchFormFields";
import { handleSubmitForm } from "@/services/donationsubmit";

/* ================= TYPES ================= */

interface FormField {
  name: string;
  label: string;
  type: string;
  required: boolean;
  placeholder?: string;
}

interface FormResponse {
  success: boolean;
  fields: FormField[];
}

interface ContactFormValues {
  [key: string]: string;
}

interface DonateSectionProps {
  section?: {
    title?: string;
    subsections?: { description?: string }[];
  };
}

/* ================= HELPERS ================= */

const trimText = (text?: string) =>
  text
    ?.replace(/<[^>]*>/g, "")
    ?.replace(/&nbsp;/g, " ")
    ?.replace(/\s+/g, " ")
    ?.trim();

/* ================= COMPONENT ================= */

export default function DonateSection({ section }: DonateSectionProps) {
  const [fields, setFields] = useState<FormField[]>([]);
  const [formData, setFormData] = useState<ContactFormValues>({});
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");

  /* ---------- FETCH CMS FORM ---------- */
  useEffect(() => {
    const loadForm = async () => {
      try {
        const res = (await fetchFormFields(
          { host: "localhost:3000" },
          "15dc72b2-5c80-4662-914a-e3e761b93bad"
        )) as FormResponse;

        if (res?.success) {
          setFields(res.fields);

          const initial: ContactFormValues = {};
          res.fields.forEach((f) => (initial[f.name] = ""));
          setFormData(initial);
        }
      } catch (err) {
        console.error("CMS fetch error:", err);
      }
    };

    loadForm();
  }, []);

  /* ---------- FIELD CHANGE ---------- */
  const handleChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  /* ---------- DONATION AMOUNT ---------- */
  const pay = (value?: string) => {
    const finalAmount = value || amount;

    if (!finalAmount || isNaN(Number(finalAmount))) {
      alert("Please enter a valid donation amount.");
      return;
    }

    setAmount(finalAmount);
    setFormData((prev) => ({ ...prev, amount: finalAmount }));
  };

  /* ---------- SUBMIT ---------- */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setMsg("");

    for (const field of fields) {
      if (field.required && !formData[field.name]?.trim()) {
        setError(`${field.label} is required`);
        return;
      }
    }

    try {
      setLoading(true);
      const res = await handleSubmitForm("localhost:3000", formData);

      if (res?.success) {
        setMsg("Donation submitted successfully!");

        const cleared: ContactFormValues = {};
        fields.forEach((f) => (cleared[f.name] = ""));
        setFormData(cleared);
        setAmount("");
      } else {
        setError("Submission failed. Try again.");
      }
    } catch {
      setError("Something went wrong. Please try later.");
    } finally {
      setLoading(false);
    }
  };

  /* ================= JSX ================= */

  return (
    <div className="container mt-3">
      <div className="inrDonation row">
        <h2 className="text-center topTitle mb-3">
          {trimText(section?.title)}
        </h2>

        <div className="col-lg-12">
          <div className="donet_pera">
            <p>{trimText(section?.subsections?.[0]?.description)}</p>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="donet_pera">
            <p>{trimText(section?.subsections?.[1]?.description)}</p>
          </div>
        </div>

        {/* ================= DONATION FORM ================= */}
        <div className="col-lg-6">
          <div className="paymentBox mt">
            <h3>Online Donation</h3>
            <p>Your Donation Supports Our Mission</p>

            <form onSubmit={handleSubmit}>
              {/* Preset amounts */}
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

              {/* Amount (only number) */}
              <div className="inputBox mb-3">
                <span>₹</span>
                <input
                  type="text"
                  name="amount"
                  placeholder="Other Amount"
                  required
                  value={amount}
                  onChange={(e) => {
                    const val = e.target.value.replace(/\D/g, "");
                    setAmount(val);
                    handleChange("amount", val);
                  }}
                  onKeyPress={(e) => {
                    if (!/[0-9]/.test(e.key)) e.preventDefault();
                  }}
                />
              </div>

              {/* ================= CMS FIELDS ================= */}
              {fields
                .filter((f) => f.name !== "amount")
                .map((field) => {
                  const isName = field.name
                    .toLowerCase()
                    .includes("name");

                  return (
                    <div className="inputBox mb-3" key={field.name}>
                      {isName && (
                        <span className="inputIcon">
                          <i className="ri-user-fill"></i>
                        </span>
                      )}

                      <input
                        type={field.type || "text"}
                        name={field.name}
                        required={field.required}
                        placeholder={field.placeholder || field.label}
                        value={formData[field.name] || ""}
                        onChange={(e) =>
                          handleChange(field.name, e.target.value)
                        }
                      />
                    </div>
                  );
                })}

              {error && <p className="text-danger">{error}</p>}
              {msg && <p className="text-success">{msg}</p>}

              <div className="donate_box">
                <button
                  type="submit"
                  className="theme-btn activeBtn"
                  disabled={loading}
                >
                  {loading ? "Submitting..." : "Donate and Support"}
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="col-lg-12">
          <div className="donet_pera">
            <p>{trimText(section?.subsections?.[2]?.description)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
