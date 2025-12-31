import MainCard from "@/components/privateComponent/mainCard";
import TitleParagraph from "@/components/privateComponent/titleParagraph";
import CallToAction from "@/components/staticComponent/callToAction";
import { useHead } from "@unhead/react";
const ProductsCpanelPage = () => {
		useHead({
		title: "Products - cPanel | Axion Networks",
		meta: [
			{ name: "description", content: "VPS Products - Control Panel | A VPS deploymet for you to deploy your app." },
			{ name: "viewport", content: "width=device-width, initial-scale=1" },
			{ name: "robots", content: "index, follow" },

			// Open Graph (Social sharing)
			{ property: "og:title", content: "Products - cPanel | Axion Networks" },
			{ property: "og:description", content: "VPS Products - Control Panel | A VPS deploymet for you to deploy your app." },
			{ property: "og:type", content: "website" },
			// Twitter Card
			{ name: "twitter:card", content: "summary_large_image" },
			{ name: "twitter:title", content: "Products - cPanel | Axion Networks" },
			{ name: "twitter:description", content: "VPS Products - Control Panel | A VPS deploymet for you to deploy your app." },
		],
		link: [
			{ rel: "icon", type: "image/png", href: "/icon/Axion Icon.svg" },
		],
		});
    return (
        <div className="page">
            <section className="section w-full">
                <img
                    src="/images/website-hosting-concept-with-circuits.jpg"
                    alt=""
                    className="block h-[70vh] w-full rounded-xl object-cover"
                />
                <div className="flex flex-col gap-4 pt-12">
                    <h2>Control Panel</h2>
                    <p>Full hosting control, minus the terminal.</p>
                </div>
            </section>
            <section className="section flex w-full flex-col gap-4">
                <h3>How it works</h3>
                <div className="flex flex-col justify-between md:flex-row gap-4">
					<TitleParagraph
						className="w-full md:w-1/3"

						title="1. Go to your dashboard."
						text="After you log in to your account, go to your dashboard."
					/>
					<TitleParagraph
						className="w-full md:w-1/3"

						title="2. Choose runtime and upload your code. "
						text="Configure your app's runtime, config, settings and upload your code."
					/>
					<TitleParagraph
						className="w-full md:w-1/3"

						title="3. Deploy your apps."
						text="After setting up deploy your app, and it will get deployed and live immediately."
					/>
                </div>
            </section>
            <section className="section flex flex-col gap-8 w-full">
				<h3>What you get</h3>
				<div className="grid grid-cols-1 gap-12 xl:grid-cols-2 w-full">
				<MainCard
                    imageSrc="/images/pexels-luis-gomes-166706-546819.jpg"
                    imageAlt="An imagw"
                    title="Managed Environtment"
                    text="Run PHP, Node.js, Python, Laravel, and more—without touching system configuration."
                    type="flex-col"
                />
                <MainCard
                    imageSrc="/images/website-hosting-concept-with-circuits.jpg"
                    imageAlt="An imagw"
                    title="Intuitive Control Panel"
                    text="A battle-tested dashboard to manage domains, files, databases, emails, and applications effortlessly."
                    type="flex-col"
                />
                <MainCard
                    imageSrc="/images/florian-krumm-yLDabpoCL3s-unsplash.jpg"
                    imageAlt="An imagw"
                    title="Optimized Performance & Security"
                    text="Pre-configured servers with isolated accounts, firewall protection, and performance tuning."
                    type="flex-col"
                />
				<MainCard
                    imageSrc="/images/pexels-kevin-ku-92347-577585.jpg"
                    imageAlt="An imagw"
                    title="Simplicity with Customization"
                    text="A dashboard that's simple but still customizeable and powerful."
                    type="flex-col"
                />
				<MainCard
                    imageSrc="/images/pexels-divinetechygirl-1181354.jpg"
                    imageAlt="An imagw"
                    title="Automatic Cron Jobs"
                    text="Run automatic cron jobs for your app every time you update, or anytime you desire"
                    type="flex-col"
                />
				<MainCard
                    imageSrc="/images/abstract-cybersecurity-concept-design.jpg"
                    imageAlt="An imagw"
                    title="No Root, No Risk"
                    text="We handle the system. You focus on shipping."
                    type="flex-col"
                />
				</div>
            </section>
			<section className="section flex w-full flex-col gap-4">
				<h3>Limitations</h3>
				<div className="flex flex-col justify-between md:flex-row gap-4">
					<TitleParagraph
						className="w-full md:w-1/3"
						title="Customizeable but not to the root."
						text="cPanel is customizeable, however the customization is limited and not extreme"
					/>
					<TitleParagraph
						className="w-full md:w-1/3"
						title="Limited Deployment Type"
						text="We have a limited set of commonly used deployment runtime."
					/>
					<TitleParagraph
						className="w-full md:w-1/3"
						title="No Access to Root"
						text="No Access to Root is a benefit to some people, but we acknowledge no root access is a limitation to some people"
					/>
                </div>
			</section>
			<CallToAction/>
        </div>
    );
};

export default ProductsCpanelPage;
