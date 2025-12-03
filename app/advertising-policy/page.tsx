import BannerAd from "@/components/advertising-policy/BannerAd";
import AdvertisingPolicy from "@/components/advertising-policy/AdvertisingPolicy";
import CookieAdvertisingSection from "@/components/advertising-policy/CookieAdvertisingSection";
import AdvertisingCookiesSection from "@/components/advertising-policy/AdvertisingCookiesSection";
import AdvertisingTechSection from "@/components/advertising-policy/AdvertisingTechSection";
import LocationSection from "@/components/advertising-policy/LocationSection";
import AdvertisingIdentifiersSection from "@/components/advertising-policy/AdvertisingIdentifiersSection";
import AdDecisionSection from "@/components/advertising-policy/AdDecisionSection";

export default function AdvertisingPolicyPage() {
    return (
        <>
            <BannerAd />
            <AdvertisingPolicy />
            <CookieAdvertisingSection/>
            <AdvertisingCookiesSection/>
            <AdvertisingTechSection/>
            <LocationSection/>
            <AdvertisingIdentifiersSection/>
            <AdDecisionSection/>
            
        </>
    );
}
