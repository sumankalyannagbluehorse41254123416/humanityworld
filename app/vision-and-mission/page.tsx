import MissionVisionBanner from "@/components/vision-and-mission/MissionVisionBanner";
import MissionVisionSection from "@/components/vision-and-mission/MissionVisionSection";
import { headers } from "next/headers";
import { fetchPageData } from "@/services/fetchData.service"; // <-- keep this import if exists

// Remove HTML tags helper
const stripHtml = (html: string) =>
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

export default async function VisionAndMission() {
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

  const bannerImage = sections[13]?.image || "";
  const visionMissionSection = sections[14] || {};
  return (
    <>
      <MissionVisionBanner bannerImage={bannerImage} />
      <MissionVisionSection section={visionMissionSection} />
    </>
  );
}
