import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

type testimonyCardProps = {
	text: string,
	imageSrc: string,
	imageAlt: string,
	name: string,
	role: string
}

const TestimonyCard = ({text, imageSrc, imageAlt, name, role}: testimonyCardProps) => {
	return (
		<div className="bg-card gap-4 flex flex-col w-120 h-fit justify-start rounded-xl">
			<p className="text-2xl p-8 text-justify">{text}</p>
			<div className="px-4 flex flex-row gap-2 items-center justify-start">
				<Avatar className="w-12 h-12">
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