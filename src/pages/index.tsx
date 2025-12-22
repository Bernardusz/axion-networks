import Carousel from "@/components/privateComponent/carousel";
import MainCard from "@/components/privateComponent/mainCard";
import ReverseCard from "@/components/privateComponent/reverseCard";
import TestimonyCard from "@/components/privateComponent/testimonyCard";
import TitleParagraph from "@/components/privateComponent/titleParagraph";
import FlexSection from "@/components/section/flexSection";
import { Button } from "@/components/ui/button"

const HomePage = () => {
	// const toggleMode = useMode((state) => state.toggleMode)
    return (
        <div className="page">
			<section className="bg-linear-to-br gap-8 from-background via-primary dark:via-secondary to-background from-25% via-50% to-75% h-[80vh] flex flex-col justify-center items-center p-24">
				<h1 className="text-center">Secure and Robust Server</h1>
				<p>A secure and robust VPS with 100% uptime. Perfect for your apps, projects, and businesses.</p>
				<div className="flex flex-row w-full justify-between px-8">
					<Button className="btn-primary">Host Now</Button>
					<Button className="btn-primary">Learn More</Button>
				</div>
			</section>
			<section className="grid grid-cols-3 h-120 border-border border-8">
				{/* <img
					src="/public/images/pexels-joshsorenson-1054397.jpg" alt=""
					className="col-span-1 row-span-1"
				/>
				<img
					src="/public/images/pexels-joshsorenson-1054397.jpg" alt=""
					className="col-span-1 row-span-2"
				/>
				<img
					src="/public/images/pexels-joshsorenson-1054397.jpg" alt=""
					className="col-span-1 row-span-1"
				/>
				<img
					src="/public/images/pexels-joshsorenson-1054397.jpg" alt=""
					className="col-span-1 row-span-2"
				/>
				<img
					src="/public/images/pexels-joshsorenson-1054397.jpg" alt=""
					className="col-span-2 row-span-1"
				/>
				<img
					src="/public/images/pexels-joshsorenson-1054397.jpg" alt=""
					className="col-span-1 row-span-1"
				/>
				<img
					src="/public/images/pexels-joshsorenson-1054397.jpg" alt=""
					className="col-span-1 row-span-1"
				/>
				<img
					src="/public/images/pexels-joshsorenson-1054397.jpg" alt=""
					className="col-span-1 row-span-1"
				/> */}
				ADD IMAGES LATER
			</section>
			<section>
				<TitleParagraph
					title="Choose how much control"
					text="Axion Networks is a VPS Company that gives you the control to decide your need. You decide your need not us."	
				/>
			</section>
			<FlexSection>
				<MainCard
					imageSrc="/images/abstract-cybersecurity-concept-design.jpg"
					imageAlt="an img"
					title="Git Integrated Development"
					text="Immediately deploy your app as soon as it’s finished. No worries about config, Nginx, Linux or Reverse Proxies. Everything is handled for you"
					to="/products"
					linkText="Learn More ->"
				/>
				<MainCard
					imageSrc="/images/abstract-cybersecurity-concept-design.jpg"
					imageAlt="an img"
					title="Git Integrated Development"
					text="Immediately deploy your app as soon as it’s finished. No worries about config, Nginx, Linux or Reverse Proxies. Everything is handled for you"
					to="/products"
					linkText="Learn More ->"
				/>
				<MainCard
					imageSrc="/images/abstract-cybersecurity-concept-design.jpg"
					imageAlt="an img"
					title="Git Integrated Development"
					text="Immediately deploy your app as soon as it’s finished. No worries about config, Nginx, Linux or Reverse Proxies. Everything is handled for you"
					to="/products"
					linkText="Learn More ->"
				/>
			</FlexSection>
			<section>
				<TitleParagraph
					title="Robust and Secure Infrastructure"
					text="Making sure you can Deploy and Secure your apps at ease. Scale your apps and products without any problem."	
				/>
			</section>
			<FlexSection>
				<ReverseCard
					title="Security First"
					text="Extensive security and Firewall are set up to make sure your apps and products are safe. No compromise guaranteed."
					to="/products"
					linkText="Learn More ->"
					imageSrc="/images/abstract-cybersecurity-concept-design.jpg"
					imageAlt="an img"
				/>
				<ReverseCard
					title="Security First"
					text="Extensive security and Firewall are set up to make sure your apps and products are safe. No compromise guaranteed."
					to="/products"
					linkText="Learn More ->"
					imageSrc="/images/abstract-cybersecurity-concept-design.jpg"
					imageAlt="an img"
				/>
				<ReverseCard
					title="Security First"
					text="Extensive security and Firewall are set up to make sure your apps and products are safe. No compromise guaranteed."
					to="/products"
					linkText="Learn More ->"
					imageSrc="/images/abstract-cybersecurity-concept-design.jpg"
					imageAlt="an img"
				/>
			</FlexSection>
			<section>
				<Carousel>
					<TestimonyCard
						text="“Axion Networks helped us to deploy our apps rapidly and later scale to VPS when we needed it!”"
						imageSrc="/images/abstract-cybersecurity-concept-design.jpg"
						imageAlt="an img"
						name="Bernardusz"
						role="Full Stack Software Engineer"
					/>
					<TestimonyCard
						text="“Axion Networks helped us to deploy our apps rapidly and later scale to VPS when we needed it!”"
						imageSrc="/images/abstract-cybersecurity-concept-design.jpg"
						imageAlt="an img"
						name="Bernardusz"
						role="Full Stack Software Engineer"
					/>
					<TestimonyCard
						text="“Axion Networks helped us to deploy our apps rapidly and later scale to VPS when we needed it!”"
						imageSrc="/images/abstract-cybersecurity-concept-design.jpg"
						imageAlt="an img"
						name="Bernardusz"
						role="Full Stack Software Engineer"
					/>
					<TestimonyCard
						text="“Axion Networks helped us to deploy our apps rapidly and later scale to VPS when we needed it!”"
						imageSrc="/images/abstract-cybersecurity-concept-design.jpg"
						imageAlt="an img"
						name="Bernardusz"
						role="Full Stack Software Engineer"
					/>
					<TestimonyCard
						text="“Axion Networks helped us to deploy our apps rapidly and later scale to VPS when we needed it!”"
						imageSrc="/images/abstract-cybersecurity-concept-design.jpg"
						imageAlt="an img"
						name="Bernardusz"
						role="Full Stack Software Engineer"
					/>
				</Carousel>
			</section>
        </div>
    );
};

export default HomePage;
