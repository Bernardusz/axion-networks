import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { NavLink } from "react-router-dom";

type reverseCardProps = {
    imageSrc: string;
    imageAlt: string;
    title: string;
    text: string;
    to: string;
    linkText: string;
};

const ReverseCard = ({
    title,
    text,
    to,
    linkText,
    imageSrc,
    imageAlt,
}: reverseCardProps) => {
    return (
        <Card className="gap-12">
            <CardHeader className="flex flex-col gap-4">
                <CardTitle>
                    <h4>{title}</h4>
                </CardTitle>
                <CardDescription>
                    <p>{text}</p>
                </CardDescription>
                <CardAction>
                    <NavLink to={to} className="link-primary">
                        {linkText}
                    </NavLink>
                </CardAction>
            </CardHeader>
            <CardContent>
                <img src={imageSrc} alt={imageAlt} />
            </CardContent>
        </Card>
    );
};

export default ReverseCard;
