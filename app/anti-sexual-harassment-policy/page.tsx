import AntiHarassmentHeader from "@/components/anti-sexual-harassment-policy/AntiHarassmentHeader";
import BannerSectionAntiSex from "@/components/anti-sexual-harassment-policy/BannerSectionAntiSex";
import AntiHarassmentScopeSection from "@/components/anti-sexual-harassment-policy/AntiHarassmentScopeSection";
import DefinitionsSection from "@/components/anti-sexual-harassment-policy/DefinitionsSection";
import ZeroToleranceSection from "@/components/anti-sexual-harassment-policy/ZeroToleranceSection";
import ResponsibilitiesSection from "@/components/anti-sexual-harassment-policy/ResponsibilitiesSection";
import ActionAgainstOffenders from "@/components/anti-sexual-harassment-policy/ActionAgainstOffenders";
import AwarenessTraining from "@/components/anti-sexual-harassment-policy/AwarenessTraining";
import PropertySection from "@/components/anti-sexual-harassment-policy/PropertySection";
export default function AdvertisingPolicy() {
  return (
    <>
      <BannerSectionAntiSex/>
      <AntiHarassmentHeader/>
      <AntiHarassmentScopeSection/>
      <DefinitionsSection/>
      <ZeroToleranceSection/>
      <ResponsibilitiesSection/>
      <ActionAgainstOffenders/>
      <AwarenessTraining/>
      <PropertySection/>
    </>
  );
}
