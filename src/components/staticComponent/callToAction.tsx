import { Button } from "@/components/ui/button";

const CallToAction = () => {
    return (
        <div className="from-background via-primary dark:via-secondary to-background flex h-140 w-full flex-col items-center justify-center gap-8 bg-linear-to-br from-25% via-45% to-75% px-16">
            <h2 className="w-120 text-center">Secure. Robust. Always On.</h2>
            <div className="flex w-full flex-row justify-center gap-16 px-8">
                <Button className="btn-primary">Get Started</Button>
                <Button className="btn-primary">Learn More</Button>
            </div>
        </div>
    );
};

export default CallToAction;
