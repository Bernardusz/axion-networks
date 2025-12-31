import MainCard from "@/components/privateComponent/mainCard";
import TitleParagraph from "@/components/privateComponent/titleParagraph";
import CallToAction from "@/components/staticComponent/callToAction";
import { useHead } from "@unhead/react";
const ProductsVpsPage = () => {
	useHead({
		title: "Products - VPS | Axion Networks",
		meta: [
			{ name: "description", content: "VPS Products - Virtual Private Server | A VPS deployment for you to deploy your app." },
			{ name: "viewport", content: "width=device-width, initial-scale=1" },
			{ name: "robots", content: "index, follow" },

			// Open Graph (Social sharing)
			{ property: "og:title", content: "Products - VPS | Axion Networks" },
			{ property: "og:description", content: "VPS Products - Virtual Private Server | A VPS deployment for you to deploy your app." },
			{ property: "og:type", content: "website" },
			// Twitter Card
			{ name: "twitter:card", content: "summary_large_image" },
			{ name: "twitter:title", content: "Products - VPS | Axion Networks" },
			{ name: "twitter:description", content: "VPS Products - Virtual Private Server | A VPS deployment for you to deploy your app." },
		],
		link: [
			{ rel: "icon", type: "image/png", href: "/icon/Axion Icon.svg" },
		],
		});
    return (
        <div className="page">
            <section className="section w-full">
                <img
                    src="/images/pexels-kevin-ku-92347-577585.jpg"
                    alt=""
                    className="block h-[70vh] w-full rounded-xl object-cover"
                />
                <div className="flex flex-col gap-4 pt-12">
                    <h2>Virtual Private Server</h2>
                    <p>Your server. Your rules.</p>
                </div>
            </section>
            <section className="section flex w-full flex-col gap-4">
                <h3>How it works</h3>
                <div className="flex flex-col justify-between md:flex-row gap-4">
					<TitleParagraph
						className="w-full max-w-1/3"
						title="1. Recieve your SSH keys in dashboard"
						text="After you log in to your account, go to your dashboard and recieve your SSH Key."
					/>
					<TitleParagraph
						className="w-full max-w-1/3"
						title="2. Open your terminal."
						text="Open your terminal (Bash, PowerShell, Command Prompt) or access the online terminal."
					/>
					<TitleParagraph
						className="w-full max-w-1/3"
						title="3. Use SSH to control your VPS"
						text="Access and control your VPS using SSH."
					/>
                </div>
            </section>
            <section className="section flex flex-col gap-8 w-full">
				<h3>What you get</h3>
				<div className="grid grid-cols-1 gap-12 xl:grid-cols-2 w-full">
				<MainCard
                    imageSrc="/images/pexels-kevin-ku-92347-577585.jpg"
                    imageAlt="An imagw"
                    title="Full Root Access"
                    text="Install anything. Configure everything. You’re in complete control of your server."
                    type="flex-col"
                />
                <MainCard
                    imageSrc="/images/florian-krumm-yLDabpoCL3s-unsplash.jpg"
                    imageAlt="An imagw"
                    title="Choose Your Stack"
                    text="Debian, Ubuntu Server, RHEL — run Docker, custom services, databases, and background workers."
                    type="flex-col"
                />
                <MainCard
                    imageSrc="/images/matthieu-beaumont-iYnpYeyu57k-unsplash.jpg"
                    imageAlt="An imagw"
                    title="Isolated Performance"
                    text="Dedicated resources ensure consistent performance with no noisy neighbors."
					type="flex-col"
                />
				<MainCard
                    imageSrc="/images/taylor-vick-M5tzZtFCOfs-unsplash.jpg"
                    imageAlt="An imagw"
                    title="Production-Grade Infrastructure"
                    text="Built for serious workloads, scalability, and advanced networking needs."
                    type="flex-col"
                />
				<MainCard
					imageSrc="/images/abstract-cybersecurity-concept-design.jpg"
					imageAlt="Security"
					title="Automatic Backups & Security"
					text="Daily snapshots, firewall management, and automated security updates keep your server safe."
					type="flex-col"
				/>
				<MainCard
					imageSrc="/images/cropped-image-businessman-sitting-by-table-cafe-analyzing-indicators-laptop-computer-while-using-wristwatch.jpg"
					imageAlt="Monitoring"
					title="Real-Time Monitoring"
					text="Track CPU, RAM, disk, and network usage with live alerts to stay on top of performance."
					type="flex-col"
				/>



				</div>
            </section>
			<section className="section flex w-full flex-col gap-4">
				<h3>Limitations</h3>
				<div className="flex flex-col justify-between md:flex-row gap-4">
					<TitleParagraph
						className="w-full md:w-1/3"
						title="Customizeable to the Root."
						text="Customization to the root, is a benefit for some people. but to some it's overwhelming"
					/>
					<TitleParagraph
						className="w-full md:w-1/3"
						title="Manual setup & Configuration"
						text="You're given a complete VPS that's yours to config and setup, but everything is manual and verbose."
					/>
					<TitleParagraph
						className="w-full md:w-1/3"
						title="Steep Learning Curve"
						text="Custom Linux distro, tweak configuration, networking, install anything. Customizations are limitless, but you must know what you do"
					/>
                </div>
			</section>
			<CallToAction/>
        </div>
    );
};

export default ProductsVpsPage;
