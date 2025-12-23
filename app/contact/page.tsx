import ContactSection from "@/components/contact/ContactSection";
import { headers } from "next/headers";
import { fetchPageData } from "@/services/fetchData.service";

interface Section {
  id?: number;
  title?: string;
  shortDescription?: string;
  description?: string;
  image?: string;
  bannerImage?: string;
  subsections?: Section[];
}

interface SiteData {
  pageItemdataWithSubsection?: Section[];
  data?: {
    pageItemdataWithSubsection?: Section[];
  };
}

export default async function Contact() {
  // ✅ headers() MUST be awaited
  const rqHeaders = await headers();

  const host = rqHeaders.get("host") || "localhost:3000";

  // ✅ pass only what your API needs
  const headersObj = {
    host,
    "user-agent": rqHeaders.get("user-agent") || "",
    "accept-language": rqHeaders.get("accept-language") || "",
  };

  let siteData: SiteData = {};

  try {
    siteData = await fetchPageData(
      headersObj,
      "2b2d22d6-3f2c-4708-91e1-927dc37c6a1f"
    );
  } catch (error) {
    console.error("Fetch Error:", error);
  }

  const sections =
    siteData.pageItemdataWithSubsection ||
    siteData.data?.pageItemdataWithSubsection ||
    [];

  const contactSection = sections[109];

  return <ContactSection section={contactSection} />;
}
