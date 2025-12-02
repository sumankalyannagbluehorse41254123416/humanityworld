import BannerTermsConditions from "@/components/terms-conditions/BannerTermsConditions";
import CopyrightNotice from "@/components/terms-conditions/CopyrightNotice";
import CodeOfConduct from "@/components/terms-conditions/CodeOfConduct";
import DataInformation from "@/components/terms-conditions/DataInformation";
import TermsAcceptance from "@/components/terms-conditions/TermsAcceptance";
import TermsSection from "@/components/terms-conditions/TermsSection";
import WebsiteInteraction from "@/components/terms-conditions/WebsiteInteraction";
import FundraisingDonorPolicy from "@/components/terms-conditions/FundraisingDonorPolicy";
import IntellectualProperty from "@/components/terms-conditions/IntellectualProperty";
import ThirdPartyLinks from "@/components/terms-conditions/ThirdPartyLinks";
import LimitationSection from "@/components/terms-conditions/LimitationSection";
import IndemnificationSection from "@/components/terms-conditions/IndemnificationSection";
import EnterAgreementSection from "@/components/terms-conditions/EnterAgreementSection";
import GoverningLawSection from "@/components/terms-conditions/GoverningLawSection";
import ContactUsSection from "@/components/terms-conditions/ContactUsSection";


export default function TermsConditions() {
  return (
    <>
      <BannerTermsConditions />
      <TermsSection />
      <TermsAcceptance />
      <WebsiteInteraction />
      <CopyrightNotice />
      <DataInformation />
      <CodeOfConduct />
      <FundraisingDonorPolicy />
      <IntellectualProperty />
      <ThirdPartyLinks/>
    <LimitationSection/>
    <IndemnificationSection/>
    <EnterAgreementSection/>
    <GoverningLawSection/>
    <ContactUsSection/>
    </>
  );
}
