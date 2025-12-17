import Gallery from "@/components/gallery/Gallery";
import { headers } from "next/headers";
import { fetchPageData } from "@/services/fetchData.service";

/* ---------------- Types ---------------- */
interface Section {
  title?: string;
  shortDescription?: string;
  image?: string;
  subsections?: Section[];
}

interface SiteData {
  pageItemdataWithSubsection?: Section[];
  data?: {
    pageItemdataWithSubsection?: Section[];
  };
}

export default async function gallery() {
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
    console.error("Fetch Error (GalleryPage):", error);
  }

  const sections =
    siteData.pageItemdataWithSubsection ??
    siteData.data?.pageItemdataWithSubsection ??
    [];

  /* -------- index 43 -------- */
  const gallerySection = sections[43];

  return (
    <>
      <Gallery
        title={gallerySection?.title}
        shortDescription={gallerySection?.shortDescription}
        subsections={gallerySection?.subsections}
      />
    </>
  );
}
