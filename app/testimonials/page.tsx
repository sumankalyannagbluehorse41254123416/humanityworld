import BannerWorkGallery from "@/components/testimonials/BannerWorkGallery";
import Testimonials from "@/components/testimonials/Testimonials";
import { headers } from "next/headers";
import { fetchPageData } from "@/services/fetchData.service";

/* ---------------- Types ---------------- */
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
export default async function testimonials() {
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
    console.error("Fetch Error (SponsorshipPage):", error);
  }

  /* ---------------- Resolve sections safely ---------------- */
  const sections: Section[] =
    siteData.pageItemdataWithSubsection ??
    siteData.data?.pageItemdataWithSubsection ??
    [];
  const bannerSection = sections[41]; // array index 41
  const bannerImage = bannerSection?.image || bannerSection?.bannerImage;

  const testimonialSection = sections[42];

const sectionTitle = testimonialSection?.title;
const shortDescription = testimonialSection?.shortDescription;
const subsections = testimonialSection?.subsections || [];
  return (
    <>
      <BannerWorkGallery image={bannerImage} />
     
    <Testimonials
      sectionTitle={sectionTitle}
      shortDescription={shortDescription}
      subsections={subsections}
    />
    </>
  );
}
