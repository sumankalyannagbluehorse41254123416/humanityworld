import BannerSectionHomeless from "@/components/homeless-support/BannerSectionHomeless";
import HomelessSupportSection from "@/components/homeless-support/HomelessSupportSection";
import { headers } from "next/headers";
import { fetchPageData } from "@/services/fetchData.service";

// Helper to remove unwanted HTML tags
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

export default async function HomelessSupport() {
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

  /* ---------------- Resolve sections safely ---------------- */
  const sections: Section[] =
    siteData.pageItemdataWithSubsection ||
    siteData.data?.pageItemdataWithSubsection ||
    [];

  /* ---------------- Banner Section (index 33) ---------------- */
  const homelessBannerSection = sections[33];
  const homelessBannerImage =
    homelessBannerSection?.image ||
    homelessBannerSection?.bannerImage;

  /* ---------------- Content Section (index 34) ---------------- */
  const homelessSection = sections[34];

  const title = homelessSection?.title;

  const shortDescription = stripHtml(
    homelessSection?.shortDescription || ""
  );

  const descriptionOne = stripHtml(
    homelessSection?.subsections?.[0]?.description || ""
  );

  const descriptionTwo = stripHtml(
    homelessSection?.subsections?.[1]?.description || ""
  );

  const image = homelessSection?.image;

  return (
    <>
      <BannerSectionHomeless bannerImage={homelessBannerImage} />

      <HomelessSupportSection
        title={title}
        shortDescription={shortDescription}
        descriptionOne={descriptionOne}
        descriptionTwo={descriptionTwo}
        image={image}
      />
    </>
  );
}
