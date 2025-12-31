import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const CallToAction = () => {
    const navigate = useNavigate();
    return (
        <div className="from-background via-primary dark:via-secondary to-background flex h-140 w-full flex-col items-center justify-center gap-8 bg-linear-to-br from-25% via-45% to-75%">
            <div className="flex flex-col">
                <h2 className="w-full text-center">Secure. Robust.</h2>
                <h2 className="w-full text-center">Always On.</h2>
            </div>
            <div className="flex w-full flex-row justify-center gap-8 px-8">
                <Button
                    className="btn-primary"
                    onClick={() => navigate("/dashboard")}
                >
                    Get Started
                </Button>
                <Button
                    className="btn-primary"
                    onClick={() => navigate("/products")}
                >
                    Learn More
                </Button>
            </div>
        </div>
    );
};

export default CallToAction;
