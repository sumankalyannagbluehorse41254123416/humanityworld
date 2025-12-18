import AntiHarassmentHeader from "@/components/anti-sexual-harassment-policy/AntiHarassmentHeader";
import BannerSectionAntiSex from "@/components/anti-sexual-harassment-policy/BannerSectionAntiSex";
import AntiHarassmentScopeSection from "@/components/anti-sexual-harassment-policy/AntiHarassmentScopeSection";
import DefinitionsSection from "@/components/anti-sexual-harassment-policy/DefinitionsSection";
import ZeroToleranceSection from "@/components/anti-sexual-harassment-policy/ZeroToleranceSection";
import ResponsibilitiesSection from "@/components/anti-sexual-harassment-policy/ResponsibilitiesSection";
import ActionAgainstOffenders from "@/components/anti-sexual-harassment-policy/ActionAgainstOffenders";
import AwarenessTraining from "@/components/anti-sexual-harassment-policy/AwarenessTraining";
import PropertySection from "@/components/anti-sexual-harassment-policy/PropertySection";
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
export default async function AdvertisingPolicy() {
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

  const antiSexBannerSection = sections?.[67];
  const antiHarassmentHeaderSection = sections?.[68];
  const antiHarassmentScopeSection = sections?.[69];
  const definitionsSection = sections?.[70];
  const zeroToleranceSection = sections?.[71];
  const responsibilitiesSection = sections[72];
  const actionAgainstOffendersSection = sections[73];
  const awarenessTrainingSection = sections[74];
  const propertySection = sections[75];
  return (
    <>
      <BannerSectionAntiSex data={antiSexBannerSection} />
      <AntiHarassmentHeader data={antiHarassmentHeaderSection} />
      <AntiHarassmentScopeSection data={antiHarassmentScopeSection} />
      <DefinitionsSection data={definitionsSection} />
      <ZeroToleranceSection data={zeroToleranceSection} />
      <ResponsibilitiesSection data={responsibilitiesSection} />
      <ActionAgainstOffenders data={actionAgainstOffendersSection} />
      <AwarenessTraining data={awarenessTrainingSection} />
      <PropertySection data={propertySection} />
    </>
  );
}
