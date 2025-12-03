
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

export default function CookiePolicy() {
    return (
        <>
            <TermsBanner />
            <CookiePolicySection />
            <WhyCookiesSection />
            <AuthenticationSection />
            <SecurityIntegritySection />
            <AdvertisingRecommendationSection />
            <SiteFeaturesSection />
            <PerformanceSection />
            <CookieSection/>
            <CookieControlSection/>
            <MoreInfoAdvertisingSection/>
            <MoreInformationSection/>
        </>
    );
}