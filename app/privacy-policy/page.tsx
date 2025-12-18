import PolicyBanner from "@/components/privacy-policy/PolicyBanner";
import PrivacyPolicySection from "@/components/privacy-policy/PrivacyPolicySection";
import InformationWeCollect from "@/components/privacy-policy/InformationWeCollect";
import InfoCollectedAutomatically from "@/components/privacy-policy/InfoCollectedAutomatically";
import HowWeUseInfo from "@/components/privacy-policy/HowWeUseInfo";
import DisclosureInfo from "@/components/privacy-policy/DisclosureInfo";
import CookiesPolicy from "@/components/privacy-policy/CookiesPolicy";
import CookiesUsage from "@/components/privacy-policy/CookiesUsage";
import CookieChoices from "@/components/privacy-policy/CookieChoices";
import ThirdPartyCookies from "@/components/privacy-policy/ThirdPartyCookies";
import DataSecurity from "@/components/privacy-policy/DataSecurity";
import YourChoices from "@/components/privacy-policy/YourChoices";
import SecuritySection from "@/components/privacy-policy/SecuritySection";
import ContactPrivacySection from "@/components/privacy-policy/ContactPrivacySection";
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

export default async function PrivacyPolicyPage() {
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
    console.error("Fetch Error (PrivacyPolicyPage):", error);
  }

  /* ---------------- Resolve sections safely ---------------- */
  const sections: Section[] =
    siteData.pageItemdataWithSubsection ??
    siteData.data?.pageItemdataWithSubsection ??
    [];

  const policyBannerSection = sections[95] || null;
  const privacyPolicyIntroSection = sections[96] || null;
  const informationWeCollectSection = sections[97] || null;
  const infoCollectedAutomaticallySection = sections[98] || null;
  const howWeUseInfoSection = sections[99] || null;
  const disclosureInfoSection = sections[100] || null;
  const cookiesPolicySection = sections[101] || null;
  const cookiesUsageSection = sections[102] || null;
  const cookieChoicesSection = sections[103] || null;
  const thirdPartyCookiesSection = sections[104] || null;
  const dataSecuritySection = sections[105] || null;
  const yourChoicesSection = sections[106] || null;
  const securitySection = sections[107] || null;
  const contactPrivacySection = sections[108] || null;

  return (
    <>
      <PolicyBanner section={policyBannerSection} />
      <PrivacyPolicySection section={privacyPolicyIntroSection} />
      <InformationWeCollect section={informationWeCollectSection} />
      <InfoCollectedAutomatically section={infoCollectedAutomaticallySection} />
      <HowWeUseInfo section={howWeUseInfoSection} />
      <DisclosureInfo section={disclosureInfoSection} />
      <CookiesPolicy section={cookiesPolicySection} />
      <CookiesUsage section={cookiesUsageSection} />
      <CookieChoices section={cookieChoicesSection} />
      <ThirdPartyCookies section={thirdPartyCookiesSection} />
      <DataSecurity section={dataSecuritySection} />
      <YourChoices section={yourChoicesSection} />
      <SecuritySection section={securitySection} />
      <ContactPrivacySection section={contactPrivacySection} />
    </>
  );
}
