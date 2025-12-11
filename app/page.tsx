import HeroSection from "@/components/HeroSection";
import CategorySection from "@/components/CategorySection";
import EmpowerSection from "@/components/EmpowerSection";
import SupportSection from "@/components/SupportSection";
import ShareStorySection from "@/components/ShareStorySection";
import AchievementsSection from "@/components/AchievementsSection";
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

// ----------------------
// Main Page Component
// ----------------------

export default async function Home() {
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

  // Hero data from section[0]
  const heroSection = sections[0] || {};

  const heroData = {
    title: stripHtml(heroSection.title || ""),
    shortDescription: stripHtml(heroSection.shortDescription || ""),
  };

  const categorySection = sections[1];
  const categoryData =
    categorySection?.subsections?.map((item: Section) => ({
      title: stripHtml(item.title || ""),
      img: item.image || "/images/default.png",
      link:
        "/category/" +
        stripHtml(item.title || "")
          .toLowerCase()
          .replace(/\s+/g, "-"),
    })) || [];

  const empowerSection = sections[2] || {};

  const empowerData = {
    title: stripHtml(empowerSection.title || ""),
    shortDescription: stripHtml(empowerSection.shortDescription || ""),
    image: empowerSection.image,
  };

  const supportSection = sections[3];

  const supportData = {
    title: stripHtml(supportSection?.title || ""),
    sectionShortDescription: stripHtml(supportSection?.shortDescription || ""), 
    subsections:
      supportSection?.subsections?.map((item) => ({
        title: stripHtml(item.title || ""),
        image: item.image || "/images/default.png",
        description: stripHtml(item.description || ""), // Donation
        shortDescription: stripHtml(item.shortDescription || ""), // item location if needed
      })) || [],
  };

  // 5️⃣ SHARE STORY SECTION (Index 4)
const shareSection = sections[4] || {};

const shareData = {
  title: stripHtml(shareSection.title || ""),
  shortDescription: stripHtml(shareSection.shortDescription || ""),
  image: shareSection.image || "/images/collage.png",
};

// 6️⃣ ACHIEVEMENTS SECTION (Index 5)
const achievementsSection = sections[5] || {};

const achievementsData = {
  title: stripHtml(achievementsSection.title || ""),
  shortDescription: stripHtml(achievementsSection.shortDescription || ""),
};


  return (
    <>
      <HeroSection data={heroData} />
      <CategorySection data={categoryData} />
      <EmpowerSection data={empowerData} />
      <SupportSection data={supportData} />
      <ShareStorySection data={shareData} />
      <AchievementsSection data={achievementsData} />
    </>
  );
}
