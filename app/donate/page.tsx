import DonateSection from "@/components/donate/DonateSection";
import { headers } from "next/headers";
import { fetchPageData } from "@/services/fetchData.service";

interface Section {
  id?: number;
  title?: string;
  description?: string;
  bannerImage?: string;
  subsections?: {
    description?: string;
  }[];
}

interface SiteData {
  pageItemdataWithSubsection?: Section[];
  data?: {
    pageItemdataWithSubsection?: Section[];
  };
}

export default async function Donate() {
  const rqHeaders = await headers();
  const host = rqHeaders.get("host") || "localhost:3000";
  const headersObj = Object.fromEntries(rqHeaders.entries());

  let siteData: SiteData = {};

  try {
    siteData = await fetchPageData(
      { host, ...headersObj },
      "2b2d22d6-3f2c-4708-91e1-927dc37c6a1f"
    );
  } catch (error) {
    console.error("Fetch Error (DonatePage):", error);
  }

  const sections: Section[] =
    siteData.pageItemdataWithSubsection ??
    siteData.data?.pageItemdataWithSubsection ??
    [];

  // Array index 110
  const donateSection = sections[110];

  return <DonateSection section={donateSection} />;
}
