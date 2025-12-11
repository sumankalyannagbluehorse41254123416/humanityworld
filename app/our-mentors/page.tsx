import MentorBanner from "@/components/our-mentors/MentorBanner";
import MentorHeading from "@/components/our-mentors/MentorHeading";
import MentorSection from "@/components/our-mentors/MentorSection";
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

export default async function OurMentors() {
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

  // ✅ Dynamic sections
  const bannerSection = sections[21] || {};
  const headingSection = sections[22] || {};
  //   const mentorListSection = sections[23] || {};

  return (
    <>
      {/* Pass dynamic data */}
      <MentorBanner image={bannerSection.image} />
      <MentorHeading
        title={stripHtml(headingSection.title || "")}
        shortDescription={stripHtml(headingSection.shortDescription || "")}
      />

      <MentorSection />
    </>
  );
}
