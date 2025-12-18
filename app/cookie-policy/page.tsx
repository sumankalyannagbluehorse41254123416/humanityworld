import TermsBanner from "@/components/cookie-policy/TermsBanner";
import CookiePolicySection from "@/components/cookie-policy/CookiePolicySection";
import WhyCookiesSection from "@/components/cookie-policy/WhyCookiesSection";
import AuthenticationSection from "@/components/cookie-policy/AuthenticationSection";
import SecurityIntegritySection from "@/components/cookie-policy/SecurityIntegritySection";
import AdvertisingRecommendationSection from "@/components/cookie-policy/AdvertisingRecommendationSection";
import SiteFeaturesSection from "@/components/cookie-policy/SiteFeaturesSection";
import PerformanceSection from "@/components/cookie-policy/PerformanceSection";
import CookieSection from "@/components/cookie-policy/CookieSection";
import CookieControlSection from "@/components/cookie-policy/CookieControlSection";
import MoreInfoAdvertisingSection from "@/components/cookie-policy/MoreInfoAdvertisingSection";
import MoreInformationSection from "@/components/cookie-policy/MoreInformationSection";
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
export default async function CookiePolicy() {
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
    console.error("Fetch Error (AchievementsPage):", error);
  }

  /* ---------------- Resolve sections safely ---------------- */
  const sections: Section[] =
    siteData.pageItemdataWithSubsection ??
    siteData.data?.pageItemdataWithSubsection ??
    [];
  const termsBannerSection = sections[76];
  const cookiePolicySection = sections[77];
  const whyCookiesSection = sections[78];
  const authenticationSection = sections[79];
  const securityIntegritySection = sections[80];
  const advertisingRecommendationSection = sections[81];
  const siteFeaturesSection = sections[82];
  const performanceSection = sections[83];
  const section84 = sections[84];
  const section85 = sections[85];
  const section86 = sections[86];
  const section87 = sections[87];
  const section88 = sections[88];
  const moreInfoAdvertisingSection = sections[88];
  const moreInformationSection = sections[89];
  return (
    <>
      <TermsBanner data={termsBannerSection} />
      <CookiePolicySection data={cookiePolicySection} />
      <WhyCookiesSection data={whyCookiesSection} />
      <AuthenticationSection data={authenticationSection} />
      <SecurityIntegritySection data={securityIntegritySection} />
      <AdvertisingRecommendationSection
        data={advertisingRecommendationSection}
      />
      <SiteFeaturesSection data={siteFeaturesSection} />
      <PerformanceSection data={performanceSection} />
      <CookieSection
        section84={section84}
        section85={section85}
        section86={section86}
      />
      <CookieControlSection section87={section87} section88={section88} />
      <MoreInfoAdvertisingSection data={moreInfoAdvertisingSection} />
      <MoreInformationSection data={moreInformationSection} />
    </>
  );
}
