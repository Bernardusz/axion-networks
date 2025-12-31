import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import type { JSX } from "react";

export type mainCardProps = {
    imageSrc?: string;
    imageAlt?: string;
    title: string;
    text: string;
    action?: React.ReactNode;
    type: "flex-col" | "flex-row";
    className?: string;
    extraComponent?: JSX.Element;
};

const MainCard = ({
    imageSrc,
    imageAlt,
    title,
    text,
    action,
    type,
    className,
    extraComponent,
    ...props
}: mainCardProps) => {
    return (
        <Card
            {...props}
            className={`transition-transform duration-300 hover:scale-[1.03] ${className}`}
        >
            {imageSrc && (
                <CardContent>
                    <img
                        src={imageSrc}
                        className="aspect-video max-h-64 min-w-full object-cover"
                        alt={imageAlt}
                    />
                </CardContent>
            )}
            <CardHeader className={`flex ${type} w-full justify-between gap-4`}>
                <div className="flex flex-col gap-4">
                    <CardTitle>
                        <h4>{title}</h4>
                    </CardTitle>
                    <CardDescription>
                        <p>{text}</p>
                    </CardDescription>
                    {extraComponent}
                </div>
                <CardAction
                    className={`items-end justify-end ${type === "flex-row" ? "pt-8 pr-4" : "w-full"}`}
                >
                    {action}
                </CardAction>
            </CardHeader>
        </Card>
    );
};

export default MainCard;
