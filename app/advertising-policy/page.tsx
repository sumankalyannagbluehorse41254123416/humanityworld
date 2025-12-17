import BannerAd from "@/components/advertising-policy/BannerAd";
import AdvertisingPolicy from "@/components/advertising-policy/AdvertisingPolicy";
import CookieAdvertisingSection from "@/components/advertising-policy/CookieAdvertisingSection";
import AdvertisingCookiesSection from "@/components/advertising-policy/AdvertisingCookiesSection";
import AdvertisingTechSection from "@/components/advertising-policy/AdvertisingTechSection";
import LocationSection from "@/components/advertising-policy/LocationSection";
import AdvertisingIdentifiersSection from "@/components/advertising-policy/AdvertisingIdentifiersSection";
import AdDecisionSection from "@/components/advertising-policy/AdDecisionSection";
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
export default async function AdvertisingPolicyPage() {
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
  const bannerImage = sections?.[59]?.image;
  const advertisingPolicySection = sections?.[60];
  const cookieAdvertisingSection = sections?.[61];
  const advertisingCookiesSection = sections?.[62];
  const advertisingTechSection = sections?.[63];
  const locationSection = sections?.[64];
  const advertisingIdentifiersSection = sections?.[65];
  const adDecisionSection = sections?.[66];

  return (
    <>
      <BannerAd image={bannerImage} />
      <AdvertisingPolicy data={advertisingPolicySection} />
      <CookieAdvertisingSection data={cookieAdvertisingSection} />
      <AdvertisingCookiesSection data={advertisingCookiesSection} />
      <AdvertisingTechSection data={advertisingTechSection} />
      <LocationSection data={locationSection} />
      <AdvertisingIdentifiersSection data={advertisingIdentifiersSection} />
      <AdDecisionSection data={adDecisionSection} />
    </>
  );
}
