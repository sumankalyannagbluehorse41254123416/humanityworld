import HeroBanner from "@/components/our-approach/HeroBanner";
import ApproachSection from "@/components/our-approach/ApproachSection";
import ProgramsSection from "@/components/our-approach/ProgramsSection";
import EmpathySection from "@/components/our-approach/EmpathySection";
import { headers } from "next/headers";
import { fetchPageData } from "@/services/fetchData.service";

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

export default async function OurApproach() {
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

  // Hero Banner → array index 9
  const section9 = sections[9] || {};
  const bannerImage = section9.bannerImage || section9.image || "";

  const section10 = sections[10] || {};

  const approachSubDescription = section10.subsections?.[0]?.description || "";

  const section11 = sections[11] || {};
  const programTitle = section11.title || "";
  const programSubsections = section11.subsections || [];

  const section12 = sections[12] || {};

  return (
    <>
      <HeroBanner bannerImage={bannerImage} />
      <ApproachSection
        title={section10.title}
        shortDescription={section10.shortDescription}
        image={section10.image}
        subDescription={approachSubDescription}
      />
      <ProgramsSection title={programTitle} subsections={programSubsections} />
      <EmpathySection
        title={section12.title}
        shortDescription={section12.shortDescription}
        image={section12.image}
      />
    </>
  );
}
