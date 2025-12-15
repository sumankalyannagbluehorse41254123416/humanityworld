import EducationBanner from "@/components/education/EducationBanner";
import EducationSection from "@/components/education/EducationSection";
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

export default async function education() {
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

  /* ---------------- Education Banner (index 27) ---------------- */
  const educationBannerSection = sections[27];
  const educationBannerImage =
    educationBannerSection?.image ||
    educationBannerSection?.bannerImage;

  /* ---------------- Education Section (index 28) ---------------- */
  const educationSection = sections[28];

  const educationTitle = educationSection?.title;
  const educationShortDescription = stripHtml(
    educationSection?.shortDescription || ""
  );
  const educationImage = educationSection?.image;

  return (
    <>
      <EducationBanner bannerImage={educationBannerImage} />

      <EducationSection
        title={educationTitle}
        shortDescription={educationShortDescription}
        image={educationImage}
      />
    </>
  );
}
