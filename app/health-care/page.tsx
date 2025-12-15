import HealthcareBanner from "@/components/health-care/HealthcareBanner";
import HealthCareSection from "@/components/health-care/HealthCareSection";
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

export default async function helath_care() {
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

  /* ---------------- Healthcare Banner (index 29) ---------------- */
  const healthcareBannerSection = sections[29];
  const healthcareBannerImage =
    healthcareBannerSection?.image ||
    healthcareBannerSection?.bannerImage;

  /* ---------------- Healthcare Section (index 30) ---------------- */
  const healthcareSection = sections[30];

  const healthcareTitle = healthcareSection?.title;
  const healthcareShortDescription = stripHtml(
    healthcareSection?.shortDescription || ""
  );

  const healthcareSubsection = healthcareSection?.subsections?.[0];

  const healthcareSubTitle = healthcareSubsection?.title;
  const healthcareSubDescription = stripHtml(
    healthcareSubsection?.description || ""
  );
  const healthcareSubImage = healthcareSubsection?.image;

  return (
    <>
      <HealthcareBanner bannerImage={healthcareBannerImage} />

      <HealthCareSection
        title={healthcareTitle}
        shortDescription={healthcareShortDescription}
        subTitle={healthcareSubTitle}
        subDescription={healthcareSubDescription}
        subImage={healthcareSubImage}
      />
    </>
  );
}
