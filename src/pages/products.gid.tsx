import MainCard from "@/components/privateComponent/mainCard";
import TitleParagraph from "@/components/privateComponent/titleParagraph";
import CallToAction from "@/components/staticComponent/callToAction";
const ProductsGidPage = () => {
    return (
        <div className="page">
            <section className="section w-full">
                <img
                    src="/images/ai-generated-8994400_1280.jpg"
                    alt=""
                    className="block h-[70vh] w-full rounded-xl object-cover"
                />
                <div className="flex flex-col gap-4 pt-12">
                    <h2>Git Integrated Deployment</h2>
                    <p>From commit to production in seconds.</p>
                </div>
            </section>
            <section className="section flex w-full flex-col gap-4">
                <h3>How it works</h3>
                <div className="flex flex-col justify-between md:flex-row gap-4">
					<TitleParagraph
						title="1. Connect your Git-based provider."
						text="Connect your Git-based provider account, so you can see all your repositories."
					/>
					<TitleParagraph
						title="2. Configure build settings."
						text="Configure your default build settings for all your repositories."
					/>
					<TitleParagraph
						title="3. Deploy your repositories."
						text="Choose your application's repositories, and it will get deployed and live immediately."
					/>
                </div>
            </section>
            <section className="section flex flex-col gap-8 w-full">
				<h3>What you get</h3>
				<div className="grid grid-cols-1 gap-12 xl:grid-cols-2 w-full">
					<MainCard
                    imageSrc="/images/ai-generated-8994400_1280.jpg"
                    imageAlt="An imagw"
                    title="Git Integrated"
                    text="Deploy your repositories in seconds. Updates are as simple as pushing to Git."
                    type="flex-col"
					/>
					<MainCard
						imageSrc="/images/ai-generated-8994400_1280.jpg"
						imageAlt="An imagw"
						title="Intuitive Dashboard"
						text="Monitor deployments, traffic, and app activity at a glance—clear, fast, and stress-free."
						type="flex-col"
					/>
					<MainCard
						imageSrc="/images/ai-generated-8994400_1280.jpg"
						imageAlt="An imagw"
						title="Deploy in Seconds"
						text="One click is all it takes. Your app goes live instantly, ready for the world."
						type="flex-col"
					/>
					<MainCard
						imageSrc="/images/ai-generated-8994400_1280.jpg"
						imageAlt="An imagw"
						title="Robust performance"
						text="Simplicity never compromises performance. Scale confidently without bottlenecks."
						type="flex-col"
					/>
					<MainCard
						imageSrc="/images/ai-generated-8994400_1280.jpg"
						imageAlt="An imagw"
						title="Environment variables"
						text="Making sure your app variables are always secured and safe."
						type="flex-col"
					/>	
					<MainCard
						imageSrc="/images/ai-generated-8994400_1280.jpg"
						imageAlt="An imagw"
						title="Automatic builds"
						text="Automatically build your app for production every time you push."
						type="flex-col"
					/>	
				</div>
            </section>
			<section className="section flex w-full flex-col gap-4">
				<h3>Limitations</h3>
				<div className="flex flex-col justify-between md:flex-row gap-4">
					<TitleParagraph
						className="w-full md:w-1/3"
						title="Not suitable for customization."
						text="GID focused on simplicity and Developer Experience, however it is not suitable for extreme customization"
					/>
					<TitleParagraph
						className="w-full md:w-1/3"
						title="Limited Deployment Type"
						text="We have a limited set of commonly used deployment runtime."
					/>
					<TitleParagraph
						className="w-full md:w-1/3"
						title="No access to kernel"
						text="We give you dashboard to deploy apps and repositories, but you are unable to access the root or kernel of the server."
					/>
                </div>
			</section>
			<CallToAction/>
        </div>
    );
};

export default ProductsGidPage;
