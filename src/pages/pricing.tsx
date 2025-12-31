import MainCard from "@/components/privateComponent/mainCard";
import PricingCard from "@/components/privateComponent/pricingCard";
import FlexSection from "@/components/section/flexSection";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useHead } from "@unhead/react";

const PricingPage = () => {
    const [anually, setAnually] = useState<boolean>(true);
    useHead({
        title: "Pricing | Axion Networks",
        meta: [
            {
                name: "description",
                content:
                    "VPS Pricing | A VPS deployment for you to deploy your app.",
            },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1",
            },
            { name: "robots", content: "index, follow" },

            // Open Graph (Social sharing)
            { property: "og:title", content: "Pricing | Axion Networks" },
            {
                property: "og:description",
                content:
                    "VPS Pricing | A VPS deployment for you to deploy your app.",
            },
            { property: "og:type", content: "website" },
            // Twitter Card
            { name: "twitter:card", content: "summary_large_image" },
            { name: "twitter:title", content: "Pricing | Axion Networks" },
            {
                name: "twitter:description",
                content:
                    "VPS Pricing | A VPS deployment for you to deploy your app.",
            },
        ],
        link: [
            { rel: "icon", type: "image/png", href: "/icon/Axion Icon.svg" },
        ],
    });
    return (
        <div className="page mb-16">
            <section className="section mt-[20vh] flex flex-col items-center justify-center gap-8">
                <h1 className="text-center">Pricing</h1>
                <p>Pick how much power your apps need</p>
            </section>
            <FlexSection className="">
                <PricingCard
                    title="Begginer"
                    text="Start building with confidence."
                    priceYearly="6$"
                    priceMonthly="8$"
                    anually={anually}
                    setAnually={setAnually}
                    benefits={[
                        "1 vCPU",
                        "4 GB Ram",
                        "50 GB SSD Storage",
                        "1 TB Bandwidth",
                        "Firewall Ready",
                        "Community Support",
                        "DDoS Protection",
                        "Dashboard Monitoring",
                        "Full Root Access",
                    ]}
                />
                <PricingCard
                    title="Advanced"
                    text="Advanced infrastructure. Advanced scalability."
                    priceYearly="20$"
                    priceMonthly="25$"
                    anually={anually}
                    setAnually={setAnually}
                    benefits={[
                        "2 vCPU",
                        "8 GB Ram",
                        "100 GB SSD Storage",
                        "4 TB Bandwidth",
                        "Everything on the Beginner tier",
                        "Automatic Backup",
                    ]}
                />
                <PricingCard
                    title="Professional"
                    text="Power when your product starts to matter."
                    priceYearly="55$"
                    priceMonthly="60$"
                    anually={anually}
                    setAnually={setAnually}
                    benefits={[
                        "4 vCPU",
                        "16 GB Ram",
                        "200 GB SSD Storage",
                        "16 TB Bandwidth",
                        "Priority Support",
                        "Everything on the Advanced Tier",
                    ]}
                />
            </FlexSection>

            <section className="flex w-full justify-center px-8 xl:-mt-10">
                <MainCard
                    title="Enterprise"
                    text="Infrastructure that doesn’t blink"
                    type="flex-col"
                    action={
                        <Button
                            className="w-full"
                            onClick={() =>
                                toast("Coming soon!", {
                                    description: "This is a frontend only app!",
                                    action: null,
                                })
                            }
                        >
                            Start with Enterprise
                        </Button>
                    }
                    className="w-full max-w-7xl p-8"
                />
            </section>
        </div>
    );
};

export default PricingPage;
