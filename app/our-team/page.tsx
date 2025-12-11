import BannerSectionTeam from "@/components/our-team/BannerSectionTeam";
import TeamSection from "@/components/our-team/TeamSection";
import TeamList from "@/components/our-team/TeamList";
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
export default async function ourteam() {
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
  const bannerImage = sections[15]?.image || "";
  
  const teamSection = sections[16] || {};
  const teamListSection = sections[17] || {};
  

  return (
    <>
      <BannerSectionTeam bannerImage={bannerImage} />
      <TeamSection section={teamSection} />
      <TeamList section={teamListSection} />
    </>
  );
}
