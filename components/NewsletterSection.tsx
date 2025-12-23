"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { fetchFormFields } from "@/services/fetchFormFields";
import { handleSubmitForm } from "@/services/handleSubmitsubscribe";

interface FormField {
  name: string;
  label: string;
  type: string;
  required: boolean;
  placeholder?: string;
}

interface FormResponse {
  success: boolean;
  form: {
    id: number;
    title: string;
  };
  fields: FormField[];
}

interface ContactFormValues {
  [key: string]: string;
}

export default function NewsletterSection() {
  const [fields, setFields] = useState<FormField[]>([]);
  const [formTitle, setFormTitle] = useState("Subscribe");
  const [formData, setFormData] = useState<ContactFormValues>({});
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");

  /* ---------------- Fetch CMS Form ---------------- */
  useEffect(() => {
    const loadForm = async () => {
      try {
        const res = (await fetchFormFields(
          { host: "localhost:3000" },
          "d6589b8f-4919-4c82-9364-403f5174734f"
        )) as FormResponse;

        if (res?.success) {
          setFields(res.fields);
          setFormTitle(res.form?.title || "Subscribe");

          // Initialize form state
          const initialData: ContactFormValues = {};
          res.fields.forEach((f) => (initialData[f.name] = ""));
          setFormData(initialData);
        }
      } catch (err) {
        console.error("Error fetching CMS form:", err);
      }
    };

    loadForm();
  }, []);

  /* ---------------- Email Validation ---------------- */
  const validateEmail = (email: string) => {
    const gmailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.[a-zA-Z]{2,}$/;
    return gmailPattern.test(email);
  };

  /* ---------------- Submit Handler ---------------- */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setMsg("");

    const emailKey = Object.keys(formData).find((k) =>
      k.toLowerCase().includes("email")
    );

    if (emailKey && !validateEmail(formData[emailKey])) {
      setError("Please enter a valid Gmail address");
      return;
    }

    try {
      setLoading(true);

      const res = await handleSubmitForm("localhost:3000", formData);

      if (res?.success) {
        setMsg("Subscribed successfully!");
        setFormData({});
      } else {
        setError("Subscription failed. Try again.");
      }
    } catch (err) {
      setError("Something went wrong. Please try later.");
    } finally {
      setLoading(false);
    }
  };

  /* ---------------- Input Change ---------------- */
  const handleChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="newsltrsec">
      <div className="container">
        <div className="newsletblock15 row align-items-center">

          {/* Logo */}
          <div className="logo45 col-lg-3 col-md-4">
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
          <div className="newshead45 col-lg-3 col-md-3">
            <h2>
              <strong>{formTitle}</strong>
            </h2>
            <h6 className="font-alt">Get latest News & Updates</h6>
          </div>

          {/* CMS Form */}
          <div className="newsform45 col-lg-6 col-md-5">
            <form onSubmit={handleSubmit}>
              <div className="newsinput458">

                {fields.map((field) => (
                  <input
                    key={field.name}
                    type={field.type}
                    className="form-control sub-email newsinput02"
                    placeholder={field.placeholder || field.label}
                    required={field.required}
                    value={formData[field.name] || ""}
                    onChange={(e) =>
                      handleChange(field.name, e.target.value)
                    }
                  />
                ))}

                <button
                  className="btn btn-success btn-lg"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? "Submitting..." : "Subscribe"}
                </button>
              </div>

              {error && (
                <span className="text-danger contact_gap">{error}</span>
              )}

              {msg && (
                <h6 className="text-center text-white mt-2 contact_gap">
                  {msg}
                </h6>
              )}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
