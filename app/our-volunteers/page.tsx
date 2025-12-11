import VolunteerBanner from "@/components/our-volunteers/VolunteerBanner";
import VolunteerInfo from "@/components/our-volunteers/VolunteerInfo";
import VolunteersSection from "@/components/our-volunteers/VolunteersSection";
import { headers } from "next/headers";
import { fetchPageData } from "@/services/fetchData.service";

// Remove HTML tags helper
const stripHtml = (html: string) =>
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

export default async function volunteers() {
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

  // ✅ Dynamic Banner Image (index 18)
  const bannerImage = sections[18]?.image || "";

  // ✅ Volunteers section (index 19)
  const volunteerSection = sections[19];

  // ✅ Volunteer Info section (index 20) — can be used later
  const volunteerInfoSection = sections[20] || {};

  return (
    <>
      {/* Dynamic Banner */}
      <VolunteerBanner image={bannerImage} />

      {/* Dynamic Volunteers Section */}
      <VolunteersSection section={volunteerSection} />

      {/* Volunteer Info (dynamic if you want to make it dynamic later) */}
      <VolunteerInfo section={volunteerInfoSection} />
    </>
  );
}
