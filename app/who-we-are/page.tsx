import BannerSection from "@/components/who-we-are/BannerSection";
import WhoWeAreSection from "@/components/who-we-are/WhoWeAreSection";
import InspiringJourney from "@/components/who-we-are/InspiringJourney";
import { headers } from "next/headers";
import { fetchPageData } from "@/services/fetchData.service";

// Remove HTML tags helper
const stripHtml = (html: string = "") =>
  html
    .replace(/<[^>]*>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();

// Types
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

export default async function WhoWeAre() {
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
    console.error("Fetch Error:", error);
  }

  const sections =
    siteData.pageItemdataWithSubsection ||
    siteData.data?.pageItemdataWithSubsection ||
    [];

  // Banner Section (Index 6)
  const bannerImage = sections[6]?.bannerImage || sections[6]?.image || "";

  // Who We Are Section (Index 7)
  const section7 = sections[7] || {};

  // Inspiring Journey Section (Index 8)
  const section8 = sections[8] || {};

  return (
    <>
      {/* Banner */}
      <BannerSection bannerImage={bannerImage} />

      {/* Who We Are */}
      <WhoWeAreSection
        title={stripHtml(section7.title)}
        shortDescription={stripHtml(section7.shortDescription)}
        image={section7.image}
      />

      {/* Inspiring Journey */}
      <InspiringJourney
        title={stripHtml(section8.title)}
        shortDescription={stripHtml(section8.shortDescription)}
        image={section8.image}
      />
    </>
  );
}
