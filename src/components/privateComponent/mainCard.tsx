import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { NavLink } from "react-router-dom";

type mainCardProps = {
	imageSrc: string,
	imageAlt: string,
	title: string,
	text: string,
	to: string,
	linkText: string
}

const MainCard = ({ imageSrc, imageAlt, title, text, to, linkText }: mainCardProps) => {
	return (
		<Card>
			<CardContent>
				<img src={imageSrc} alt={imageAlt} />
			</CardContent>
			<CardHeader className="gap-4 flex flex-col">
				<CardTitle><h4>{title}</h4></CardTitle>
				<CardDescription>
					<p>{text}</p>
				</CardDescription>
				<CardAction>
					<NavLink
						to={to}
						className="link-primary"
						>
						{linkText}
					</NavLink>
				</CardAction>
			</CardHeader>
		</Card>
	);
};

export default MainCard;