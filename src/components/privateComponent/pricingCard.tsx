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
import BenefitIcon from "@/assets/BenefitIcon.svg?react"
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export type pricingCardProps = {
    title: string;
    text: string;
	priceYearly: string;
	priceMonthly: string;
	anually: boolean
	setAnually: React.Dispatch<React.SetStateAction<boolean>>
	benefits: string[]
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
            className="transition-transform duration-300 hover:scale-[1.03] flex flex-col justify-between"
        >
			<div className="py-2 px-2 min-h-140 min-w-100 flex flex-col gap-4">
				<CardHeader className={`flex flex-row justify-between`}>
                <div className="flex flex-col gap-1">
                    <CardTitle>
                        <h4>{title}</h4>
                    </CardTitle>
                    <CardDescription>
                        <p>{text}</p>
                    </CardDescription>
                </div>
                <CardAction className="flex gap-4 flex-row items-center">
            		<p className="font-medium text-base">Anually</p>
					<Switch
						checked={anually}
						onCheckedChange={() => setAnually(!anually)}
					/>
                </CardAction>
				</CardHeader>
				<CardContent className="flex flex-col gap-4">
					<div className="w-full justify-start flex flex-col gap-4">
						<hr className="w-full"/>
						<div className="flex flex-row gap-2 items-end pl-6">
							<h4>{anually ? priceYearly : priceMonthly}</h4>
							<p className="p-deemphasize">per month</p>
						</div>
						<hr className="w-full"/>
					</div>
					<ul className="flex flex-col gap-1">
						{benefits.map((benefit, index) => (
							<li key={index} className="flex flex-row gap-2 items-center">
								<BenefitIcon/>
								<p className="p-deemphasize">{benefit}</p>
							</li>
						))}
					</ul>
				</CardContent>
			</div>
			<CardAction className="w-full px-8">
				<Button
				className="w-full"
					onClick={() => toast("Coming soon!", {
						description: "This is a frontend only app!",
						action: null
					})}
				>
					Start with {title}	
				</Button> 
			</CardAction>
        </Card>
    );
};

export default PricingCard;
