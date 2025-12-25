import MainCard from "@/components/privateComponent/mainCard";
import PricingCard from "@/components/privateComponent/pricingCard";
import FlexSection from "@/components/section/flexSection";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const PricingPage = () => {
    const [anually, setAnually] = useState<boolean>(true);
    return (
        <div className="page">
            <section className="section mt-[20vh] flex flex-col items-center justify-center gap-8">
                <h1 className="text-center">Choose how you deploy</h1>
                <p>Choose how you deploy - your apps, your way</p>
            </section>
            <FlexSection className="px-16">
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

            <section className="flex w-full justify-center px-16 xl:-mt-14">
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
