import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

type reverseCardProps = {
    imageSrc: string;
    imageAlt: string;
    title: string;
    text: string;
    action: React.ReactNode;
    type: "flex-col" | "flex-row";
};

const ReverseCard = ({
    title,
    text,
    imageSrc,
    imageAlt,
    action,
    type,
    ...props
}: reverseCardProps) => {
    return (
        <Card
            {...props}
            className="gap-12 transition-transform duration-300 hover:scale-[1.03]"
        >
            <CardHeader className={`flex ${type} gap-4`}>
                <div className="flex flex-col gap-4">
                    <CardTitle>
                        <h4>{title}</h4>
                    </CardTitle>
                    <CardDescription>
                        <p>{text}</p>
                    </CardDescription>
                </div>
                <CardAction>{action}</CardAction>
            </CardHeader>
            <CardContent>
                <img
                    src={imageSrc}
                    className="aspect-video max-h-64 min-w-full object-cover"
                    alt={imageAlt}
                />
            </CardContent>
        </Card>
    );
};

export default ReverseCard;
