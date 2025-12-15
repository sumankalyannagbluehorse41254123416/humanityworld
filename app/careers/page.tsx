import BannerCareers from "@/components/careers/BannerCareers";
import CareersSection from "@/components/careers/CareersSection";
import ContentImageSection from "@/components/careers/ContentImageSection";
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

export default async function careers() {
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

  /* ---------------- Banner (index 24) ---------------- */
  const bannerSection = sections[24];
  const bannerImage =
    bannerSection?.bannerImage || bannerSection?.image;

  /* ---------------- Careers Heading (index 25) ---------------- */
  const careersSection = sections[25];
  const careersTitle = careersSection?.title;
  const careersShortDescription = stripHtml(
    careersSection?.shortDescription || ""
  );

  /* ---------------- Content + Image (index 26) ---------------- */
  const contentSection = sections[26];

  const contentTitle = contentSection?.title;
  const contentShortDescription = stripHtml(
    contentSection?.shortDescription || ""
  );

  const subsectionDescription = stripHtml(
    contentSection?.subsections?.[0]?.description || ""
  );

  const contentImage =
    contentSection?.image ||
    contentSection?.subsections?.[0]?.image;

  return (
    <>
      <BannerCareers bannerImage={bannerImage} />

      <CareersSection
        title={careersTitle}
        shortDescription={careersShortDescription}
      />

      <ContentImageSection
        title={contentTitle}
        shortDescription={contentShortDescription}
        subsectionDescription={subsectionDescription}
        image={contentImage}
      />
    </>
  );
}
