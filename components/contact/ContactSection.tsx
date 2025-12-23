"use client";

import { useState, useEffect } from "react";
import { fetchFormFields } from "@/services/fetchFormFields";
import { handleSubmitForm } from "@/services/handleSubmit";

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

interface CMSSection {
  title?: string;
  shortDescription?: string;
  subsections?: {
    description?: string;
  }[];
}

interface ContactSectionProps {
  section?: CMSSection;
}

const trimText = (text?: string) =>
  text
    ?.replace(/<[^>]*>/g, "")
    ?.replace(/&nbsp;/g, " ")
    ?.replace(/\s+/g, " ")
    ?.trim();

export default function ContactSection({ section }: ContactSectionProps) {
  const [fields, setFields] = useState<FormField[]>([]);
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
          "bfd08b54-0f4c-4c93-8c86-4ead5d60211e"
        )) as FormResponse;

        if (res?.success) {
          setFields(res.fields);

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

  /* ---------------- Submit Handler ---------------- */
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
        setMsg("Message sent successfully!");
        const cleared: ContactFormValues = {};
        fields.forEach((f) => (cleared[f.name] = ""));
        setFormData(cleared);
      } else {
        setError("Submission failed. Try again.");
      }
    } catch {
      setError("Something went wrong. Please try later.");
    } finally {
      setLoading(false);
    }
  };

  /* ---------------- Input Change ---------------- */
  const handleChange = (name: string, value: string) => {
    if (name.toLowerCase().includes("phone")) {
      value = value.replace(/\D/g, "").slice(0, 10);
    }
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section
      className="elementor-section elementor-3449 my-5 elementor-top-section elementor-element elementor-element-6680ab0 elementor-section-content-space-between elementor-section-boxed elementor-section-height-default elementor-section-height-default"
      data-id="6680ab0"
      data-element_type="section"
    >
      <div className="elementor-container elementor-column-gap-default">
        {/* ================= LEFT COLUMN ================= */}
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
                  {trimText(section?.shortDescription)}
                </h2>

                <p>
                  {trimText(section?.subsections?.[0]?.description)}
                </p>
              </div>

              <ul className="contact_sect_1">
                <li>
                  <i className="ri-building-line" />
                  {trimText(section?.subsections?.[1]?.description)}
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* ================= RIGHT COLUMN (FORM) ================= */}
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

            <form id="contact-form" onSubmit={handleSubmit}>
              <div className="row mid-spacing">
                {fields.map((field) => {
                  const isPhone = field.name.toLowerCase().includes("phone");

                  return (
                    <div
                      key={field.name}
                      className={`form-group ${
                        field.type === "textarea"
                          ? "col-lg-12 col-md-12 col-sm-12"
                          : "col-lg-6 col-md-6 col-sm-12"
                      }`}
                    >
                      {field.type === "textarea" ? (
                        <textarea
                          name={field.name}
                          required={field.required}
                          className="message form-control"
                          placeholder={field.placeholder || field.label}
                          value={formData[field.name] || ""}
                          onChange={(e) =>
                            handleChange(field.name, e.target.value)
                          }
                        />
                      ) : (
                        <input
                          type="text"
                          name={field.name}
                          required={field.required}
                          className={
                            isPhone ? "form-control phone" : "form-control"
                          }
                          placeholder={field.placeholder || field.label}
                          value={formData[field.name] || ""}
                          onChange={(e) =>
                            handleChange(field.name, e.target.value)
                          }
                          onKeyPress={(e) => {
                            if (isPhone && !/[0-9]/.test(e.key)) {
                              e.preventDefault();
                            }
                          }}
                          maxLength={isPhone ? 10 : undefined}
                        />
                      )}
                    </div>
                  );
                })}

                <div className="form-group col-lg-12 col-md-12 col-sm-12">
                  <button
                    className="theme-btn btn-style-four"
                    type="submit"
                    disabled={loading}
                    style={{ color: "#f46a01" }}
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </button>

                  {error && <div className="text-danger mt-2">{error}</div>}
                  {msg && <div className="text-success mt-2">{msg}</div>}
                </div>
              </div>
            </form>

          </div>
        </div>
      </div>
    </section>
  );
}
