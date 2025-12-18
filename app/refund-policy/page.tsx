import RefundPolicy from "@/components/refund-policy/RefundPolicy";
import BannerRefund from "@/components/refund-policy/BannerRefund";
import DonationRefundSection from "@/components/refund-policy/DonationRefundSection";
import EventRefundSection from "@/components/refund-policy/EventRefundSection";
import RefundContactSection from "@/components/refund-policy/RefundContactSection";
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

export default async function RefundPolicyPage() {
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
    console.error("Fetch Error (RefundPolicyPage):", error);
  }

  /* ---------------- Resolve sections safely ---------------- */
  const sections: Section[] =
    siteData.pageItemdataWithSubsection ??
    siteData.data?.pageItemdataWithSubsection ??
    [];

  const bannerImage =
    sections[90]?.image || sections[90]?.bannerImage || "/images/policy4.jpg";
  const refundPolicySection = sections[91] || null;
  const donationRefundSection = sections[92] || null;
  const eventRefundSection = sections[93] || null;
  const refundContactSection = sections[94] || null;
  return (
    <>
      <BannerRefund bgImage={bannerImage} />

      <RefundPolicy section={refundPolicySection} />
      <DonationRefundSection section={donationRefundSection} />
      <EventRefundSection section={eventRefundSection} />
      <RefundContactSection section={refundContactSection} />
    </>
  );
}
