import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

type testimonyCardProps = {
    text: string;
    imageSrc: string;
    imageAlt: string;
    name: string;
    role: string;
};

const TestimonyCard = ({
    text,
    imageSrc,
    imageAlt,
    name,
    role,
}: testimonyCardProps) => {
    return (
        <div className="bg-card flex h-fit w-120 flex-col justify-start gap-4 rounded-xl">
            <p className="p-8 text-justify text-2xl">{text}</p>
            <div className="flex flex-row items-center justify-start gap-2 px-4">
                <Avatar className="h-12 w-12">
                    <AvatarImage src={imageSrc} alt={imageAlt} />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                    <h4 className="text-base">{name}</h4>
                    <p className="p-deemphasize">{role}</p>
                </div>
            </div>
        </div>
    );
};

export default TestimonyCard;
