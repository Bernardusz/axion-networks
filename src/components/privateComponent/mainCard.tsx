import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

type mainCardProps = {
    imageSrc: string;
    imageAlt: string;
    title: string;
    text: string;
    action: React.ReactNode;
    type: "flex-col" | "flex-row";
};

const MainCard = ({
    imageSrc,
    imageAlt,
    title,
    text,
    action,
    type,
    ...props
}: mainCardProps) => {
    return (
        <Card
            {...props}
            className="transition-transform duration-300 hover:scale-[1.03]"
        >
            <CardContent>
                <img src={imageSrc} alt={imageAlt} />
            </CardContent>
            <CardHeader className={`flex ${type} justify-between gap-4`}>
                <div className="flex flex-col gap-4">
                    <CardTitle>
                        <h4>{title}</h4>
                    </CardTitle>
                    <CardDescription>
                        <p>{text}</p>
                    </CardDescription>
                </div>
                <CardAction
                    className={`items-end justify-end ${type === "flex-row" ? "pt-8 pr-4" : ""}`}
                >
                    {action}
                </CardAction>
            </CardHeader>
        </Card>
    );
};

export default MainCard;
