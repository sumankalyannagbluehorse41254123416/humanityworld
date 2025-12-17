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

export default async function TermsConditions() {
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

  const bannerImage = sections?.[44]?.image;
  const termsSection = sections?.[45];
  const acceptanceSection = sections?.[46];
  const websiteInteractionSection = sections?.[47];
  const copyrightSection = sections?.[48];
  const dataInformationSection = sections?.[49];
  const codeOfConductSection = sections?.[50];
  const fundraisingSection = sections?.[51];
  const intellectualPropertySection = sections?.[52];
  const thirdPartyLinksSection = sections?.[53];
  const limitationSection = sections?.[54];
  const indemnificationSection = sections?.[55];
  const enterAgreementSection = sections?.[56];
  const governingLawSection = sections?.[57];
  const contactUsSection = sections?.[58];
  return (
    <>
      <BannerTermsConditions image={bannerImage} />

      <TermsSection
        title={termsSection?.title}
        shortDescription={termsSection?.shortDescription}
      />
      <TermsAcceptance
        title={acceptanceSection?.title}
        shortDescription={acceptanceSection?.shortDescription}
      />
      <WebsiteInteraction
        title={websiteInteractionSection?.title}
        shortDescription={websiteInteractionSection?.shortDescription}
        subsections={websiteInteractionSection?.subsections}
      />
      <CopyrightNotice
        title={copyrightSection?.title}
        shortDescription={copyrightSection?.shortDescription}
      />
      <DataInformation
        title={dataInformationSection?.title}
        subsections={dataInformationSection?.subsections}
      />

      <CodeOfConduct
        title={codeOfConductSection?.title}
        shortDescription={codeOfConductSection?.shortDescription}
        subsections={codeOfConductSection?.subsections}
      />
      <FundraisingDonorPolicy data={fundraisingSection} />
      <IntellectualProperty data={intellectualPropertySection} />
      <ThirdPartyLinks data={thirdPartyLinksSection} />
      <LimitationSection data={limitationSection} />
      <IndemnificationSection data={indemnificationSection} />
      <EnterAgreementSection data={enterAgreementSection} />
      <GoverningLawSection data={governingLawSection} />
      <ContactUsSection data={contactUsSection} />
    </>
  );
}
