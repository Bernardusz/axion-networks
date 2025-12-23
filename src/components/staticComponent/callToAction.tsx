import { Button } from "@/components/ui/button";

const CallToAction = () => {
	return (
		<div className="px-16 gap-8 flex flex-col justify-center items-center w-full h-140 bg-linear-to-br from-background via-primary dark:via-secondary to-background from-25% via-45% to-75%">
			<h2 className="text-center">Secure. Robust. Always On.</h2>
			<div className="flex w-full flex-row justify-center px-8 gap-16">
				<Button className="btn-primary">Get Started</Button>
				<Button className="btn-primary">Learn More</Button>
			</div>
		</div>
	);
}

export default CallToAction;