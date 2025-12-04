import RefundPolicy from "@/components/refund-policy/RefundPolicy";
import BannerRefund from "@/components/refund-policy/BannerRefund";
import DonationRefundSection from "@/components/refund-policy/DonationRefundSection";
import EventRefundSection from "@/components/refund-policy/EventRefundSection";
import RefundContactSection from "@/components/refund-policy/RefundContactSection";

export default function RefundPolicyPage() {
    return (
        <>
            <BannerRefund />
            <RefundPolicy />
            <DonationRefundSection/>
            <EventRefundSection/>
            <RefundContactSection/>
        </>
    );
}
