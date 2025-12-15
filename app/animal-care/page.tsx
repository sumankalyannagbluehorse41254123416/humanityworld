import BannerAnimal from "@/components/animal-care/BannerAnimal";
import AnimalCare from "@/components/animal-care/AnimalCare";
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

/* ---------------- Page ---------------- */
export default async function AnimalCarePage() {
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
    console.error("Fetch Error (AnimalCarePage):", error);
  }

  /* ---------------- Resolve sections safely ---------------- */
  const sections: Section[] =
    siteData.pageItemdataWithSubsection ??
    siteData.data?.pageItemdataWithSubsection ??
    [];

  /* ---------------- Banner Section (index 35) ---------------- */
  const bannerSection = sections[35];
  const bannerImage =
    bannerSection?.bannerImage ||
    bannerSection?.image ||
    "";

  /* ---------------- Animal Care Section (index 36) ---------------- */
  const animalSection = sections[36];
  const subsections = animalSection?.subsections || [];

  return (
    <>
      <BannerAnimal bannerImage={bannerImage} />

      <AnimalCare
        title={animalSection?.title}
        shortDescription={animalSection?.shortDescription}
        imageOne={animalSection?.image}
        descriptionOne={subsections?.[0]?.description}
        descriptionTwo={subsections?.[1]?.description}
        imageTwo={subsections?.[1]?.image}
      />
    </>
  );
}
