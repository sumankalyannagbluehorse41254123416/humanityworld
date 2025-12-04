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
export default function PrivacyPolicyPage() {
  return (
    <>
      <PolicyBanner />
      <PrivacyPolicySection />
      <InformationWeCollect />
      <InfoCollectedAutomatically />
      <HowWeUseInfo />
      <DisclosureInfo />
      <CookiesPolicy />
      <CookiesUsage/>
      <CookieChoices/>
      <ThirdPartyCookies/>
      <DataSecurity/>
      <YourChoices/>
      <SecuritySection/>
      <ContactPrivacySection/>
    </>
  );
}
