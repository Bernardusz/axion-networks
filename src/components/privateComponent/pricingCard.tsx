import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import React from "react";
import BenefitIcon from "@/assets/BenefitIcon.svg?react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export type pricingCardProps = {
    title: string;
    text: string;
    priceYearly: string;
    priceMonthly: string;
    anually: boolean;
    setAnually: React.Dispatch<React.SetStateAction<boolean>>;
    benefits: string[];
};

const PricingCard = ({
    title,
    text,
    priceYearly,
    priceMonthly,
    anually,
    setAnually,
    benefits,
    ...props
}: pricingCardProps) => {
    return (
        <Card
            {...props}
            className="flex flex-col justify-between transition-transform duration-300 hover:scale-[1.03]"
        >
            <div className="flex min-h-100 min-w-100 flex-col px-2 py-2">
                <CardHeader className={`flex h-26 flex-row justify-between`}>
                    <div className="flex flex-col gap-1">
                        <CardTitle>
                            <h4>{title}</h4>
                        </CardTitle>
                        <CardDescription>
                            <p>{text}</p>
                        </CardDescription>
                    </div>
                    <CardAction className="flex flex-row items-center gap-4">
                        <p className="text-base font-medium">Anually</p>
                        <Switch
                            checked={anually}
                            onCheckedChange={() => setAnually(!anually)}
                        />
                    </CardAction>
                </CardHeader>
                <CardContent className="flex flex-col gap-4">
                    <div className="flex w-full flex-col justify-start gap-2">
                        <hr className="w-full" />
                        <div className="flex flex-row items-end gap-2 pl-6">
                            <h4>{anually ? priceYearly : priceMonthly}</h4>
                            <p className="p-deemphasize">per month</p>
                        </div>
                        <hr className="w-full" />
                    </div>
                    <ul className="flex flex-col gap-1">
                        {benefits.map((benefit, index) => (
                            <li
                                key={index}
                                className="flex flex-row items-center gap-2"
                            >
                                <BenefitIcon />
                                <p className="p-deemphasize">{benefit}</p>
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </div>
            <CardAction className="w-full px-8">
                <Button
                    className="w-full"
                    onClick={() =>
                        toast("Coming soon!", {
                            description: "This is a frontend only app!",
                            action: null,
                        })
                    }
                >
                    Start with {title}
                </Button>
            </CardAction>
        </Card>
    );
};

export default PricingCard;
