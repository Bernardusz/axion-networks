// import MainCard from "@/components/privateComponent/mainCard";
// const ProductsCpanelPage = () => {
//     return (
//         <div className="page">
//             <section>
//                 <img
//                     src="/images/ai-generated-8994400_1280.jpg"
//                     alt=""
//                     className="block h-[70vh] w-full object-cover"
//                 />
//                 <div className="section flex flex-col gap-4 xl:px-32">
//                     <h2>Control Panel</h2>
//                     <p>Full hosting control, minus the terminal.</p>
//                 </div>
//             </section>
//             <section className="section grid grid-cols-1 gap-12 xl:grid-cols-2 xl:px-64">
//                 <MainCard
//                     imageSrc="/images/ai-generated-8994400_1280.jpg"
//                     imageAlt="An imagw"
//                     title="Managed Environtment"
//                     text="Run PHP, Node.js, Python, Laravel, and more—without touching system configuration."
//                     type="flex-col"
//                 />
//                 <MainCard
//                     imageSrc="/images/ai-generated-8994400_1280.jpg"
//                     imageAlt="An imagw"
//                     title="Intuitive Control Panel"
//                     text="A battle-tested dashboard to manage domains, files, databases, emails, and applications effortlessly."
//                     type="flex-col"
//                 />
//                 <MainCard
//                     imageSrc="/images/ai-generated-8994400_1280.jpg"
//                     imageAlt="An imagw"
//                     title="Optimized Performance & Security"
//                     text="Pre-configured servers with isolated accounts, firewall protection, and performance tuning."
//                     type="flex-col"
//                 />
//                 <MainCard
//                     imageSrc="/images/ai-generated-8994400_1280.jpg"
//                     imageAlt="An imagw"
//                     title="No Root, No Risk"
//                     text="We handle the system. You focus on shipping."
//                     type="flex-col"
//                 />
//             </section>
//         </div>
//     );
// };

// export default ProductsCpanelPage;


import MainCard from "@/components/privateComponent/mainCard";
import TitleParagraph from "@/components/privateComponent/titleParagraph";
import CallToAction from "@/components/staticComponent/callToAction";
const ProductsCpanelPage = () => {
    return (
        <div className="page">
            <section className="section w-full">
                <img
                    src="/images/ai-generated-8994400_1280.jpg"
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
						title="1. Go to your dashboard."
						text="After you logged in to your account, go to your dashboard."
					/>
					<TitleParagraph
						title="2. Choose runtime and upload your code. "
						text="Configure your app's runtime, config, settings and upload your code."
					/>
					<TitleParagraph
						title="3. Deploy your apps."
						text="After setting up deploy your app, and it will get deployed and live immediately."
					/>
                </div>
            </section>
            <section className="section flex flex-col gap-8 w-full">
				<h3>What you get</h3>
				<div className="grid grid-cols-1 gap-12 xl:grid-cols-2 w-full">
				<MainCard
                    imageSrc="/images/ai-generated-8994400_1280.jpg"
                    imageAlt="An imagw"
                    title="Managed Environtment"
                    text="Run PHP, Node.js, Python, Laravel, and more—without touching system configuration."
                    type="flex-col"
                />
                <MainCard
                    imageSrc="/images/ai-generated-8994400_1280.jpg"
                    imageAlt="An imagw"
                    title="Intuitive Control Panel"
                    text="A battle-tested dashboard to manage domains, files, databases, emails, and applications effortlessly."
                    type="flex-col"
                />
                <MainCard
                    imageSrc="/images/ai-generated-8994400_1280.jpg"
                    imageAlt="An imagw"
                    title="Optimized Performance & Security"
                    text="Pre-configured servers with isolated accounts, firewall protection, and performance tuning."
                    type="flex-col"
                />
                <MainCard
                    imageSrc="/images/ai-generated-8994400_1280.jpg"
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

export default ProductsCpanelPage;
