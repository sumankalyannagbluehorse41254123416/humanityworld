import HygieneBanner from "@/components/women-hygiene/HygieneBanner";
import WomenHygieneSection from "@/components/women-hygiene/WomenHygieneSection";
import { headers } from "next/headers";
import { fetchPageData } from "@/services/fetchData.service";

// Helper to remove unwanted HTML
const stripHtml = (html: string = "") =>
  html
    .replace(/<[^>]*>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();

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
export default async function WomenHygiene() {
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
  const hygieneBannerSection = sections[31];
  const hygieneBannerImage =
    hygieneBannerSection?.image || hygieneBannerSection?.bannerImage;

    const womenHygieneSection = sections[32];
  return (
    <>
      <HygieneBanner bannerImage={hygieneBannerImage} />
       <WomenHygieneSection section={womenHygieneSection} />
    </>
  );
}
