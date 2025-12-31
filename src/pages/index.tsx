import Carousel from "@/components/privateComponent/carousel";
import MainCard from "@/components/privateComponent/mainCard";
import ReverseCard from "@/components/privateComponent/reverseCard";
import TestimonyCard from "@/components/privateComponent/testimonyCard";
import TitleParagraph from "@/components/privateComponent/titleParagraph";
import FlexSection from "@/components/section/flexSection";
import CallToAction from "@/components/staticComponent/callToAction";
import { AccordionContent, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionItem } from "@radix-ui/react-accordion";
import { NavLink, useNavigate } from "react-router-dom";
import { useHead } from "@unhead/react";

const HomePage = () => {
    const navigate = useNavigate();
    useHead({
        title: "Axion Networks",
        meta: [
            {
                name: "description",
                content: "A VPS deployment for you to deploy your app.",
            },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1",
            },
            { name: "robots", content: "index, follow" },

            // Open Graph (Social sharing)
            { property: "og:title", content: "Axion Networks" },
            {
                property: "og:description",
                content: "A VPS deployment for you to deploy your app.",
            },
            { property: "og:type", content: "website" },
            // Twitter Card
            { name: "twitter:card", content: "summary_large_image" },
            { name: "twitter:title", content: "Axion Networks" },
            {
                name: "twitter:description",
                content: "A VPS deployment for you to deploy your app.",
            },
        ],
        link: [
            { rel: "icon", type: "image/png", href: "/icon/Axion Icon.svg" },
        ],
    });
    return (
        <div className="page">
            <section className="from-background via-primary dark:via-secondary to-background mb-16 flex h-[80vh] w-full flex-col items-center justify-center gap-8 bg-linear-to-br from-25% via-50% to-75% p-24">
                <h1 className="text-center">Secure and Robust Server</h1>
                <p>
                    A secure and robust VPS with 100% uptime. Perfect for your
                    apps, projects, and businesses.
                </p>
                <div className="flex w-full flex-row justify-center gap-16 px-8">
                    <Button
                        className="btn-primary"
                        onClick={() => navigate("/dashboard")}
                    >
                        Host Now
                    </Button>
                    <Button
                        className="btn-primary"
                        onClick={() => navigate("/products")}
                    >
                        Learn More
                    </Button>
                </div>
            </section>

            <section className="relative overflow-hidden">
                <div className="from-background pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-linear-to-r to-transparent" />
                <div className="from-background pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-linear-to-l to-transparent" />

                <div className="grid w-[120vw] translate-x-[4vw] grid-flow-dense auto-rows-[160px] grid-cols-4 gap-6">
                    <img
                        src="/images/krzysztof-kowalik-KiH2-tdGQRY-unsplash.jpg"
                        alt=""
                        className="bento-image col-span-2 col-start-2 row-span-1 row-start-2"
                    />
                    <img
                        src="/images/taylor-vick-M5tzZtFCOfs-unsplash.jpg"
                        alt=""
                        className="bento-image col-span-3 row-span-1"
                    />
                    <img
                        src="/images/modern-data-center-providing-cloud-services-enabling-businesses-access-computing-resources-storage-demand-internet-server-room-infrastructure-3d-render-animation.jpg"
                        alt=""
                        className="bento-image col-span-1 row-span-3"
                    />
                    <img
                        src="/images/matthieu-beaumont-iYnpYeyu57k-unsplash.jpg"
                        alt=""
                        className="bento-image col-span-1 row-span-2"
                    />
                    <img
                        src="/images/pexels-joshsorenson-1054397.jpg"
                        alt=""
                        className="bento-image col-span-2 row-span-1"
                    />
                </div>
            </section>

            <section className="section w-full">
                <TitleParagraph
                    variant="h3"
                    title="Choose how much control"
                    text="Axion Networks is a VPS Company that gives you the control to decide your need. You decide your need not us."
                />
            </section>
            <FlexSection>
                <MainCard
                    imageSrc="/images/website-hosting-concept-with-circuits.jpg"
                    imageAlt="an img"
                    title="Git Integrated Development"
                    text="Immediately deploy your app as soon as it’s finished. No worries about config, Nginx, Linux or Reverse Proxies. Everything is handled for you"
                    action={
                        <NavLink to="/products" className="link-primary">
                            Learn More →
                        </NavLink>
                    }
                    type="flex-col"
                />
                <MainCard
                    imageSrc="/images/cropped-image-businessman-sitting-by-table-cafe-analyzing-indicators-laptop-computer-while-using-wristwatch.jpg"
                    imageAlt="an img"
                    title="cPanel - Control Panel"
                    text="An easy and intuitive Linux based Graphical User Interface for your apps. Perfect for the middle-ground between Easiness and Control."
                    action={
                        <NavLink to="/products" className="link-primary">
                            Learn More →
                        </NavLink>
                    }
                    type="flex-col"
                />
                <MainCard
                    imageSrc="/images/matthieu-beaumont-iYnpYeyu57k-unsplash.jpg"
                    imageAlt="an img"
                    title="Virtual Private Server"
                    text="A Linux based computer on the cloud, Secure and Robust for all your needs. Tweak the configs and server with total control in your hands"
                    action={
                        <NavLink to="/products" className="link-primary">
                            Learn More →
                        </NavLink>
                    }
                    type="flex-col"
                />
            </FlexSection>
            <section className="section w-full">
                <TitleParagraph
                    variant="h3"
                    title="Robust and Secure Infrastructure"
                    text="Making sure you can Deploy and Secure your apps at ease. Scale your apps and products without any problem."
                />
            </section>
            <FlexSection>
                <ReverseCard
                    title="Robust Performance"
                    text="Optimized servers and computers on the cloud to make sure your apps can handle users traffic and scalability without any issues."
                    imageSrc="/images/massimo-botturi-zFYUsLk_50Y-unsplash.jpg"
                    imageAlt="an img"
                    action={
                        <NavLink to="/products" className="link-primary">
                            Learn More →
                        </NavLink>
                    }
                    type="flex-col"
                />
                <ReverseCard
                    title="Analytics & Datas"
                    text="Visitors, Traffics and Problems are recorded every single day, so you can understand your customers and your needs better. "
                    imageSrc="/images/pexels-kevin-ku-92347-577585.jpg"
                    imageAlt="an img"
                    action={
                        <NavLink to="/products" className="link-primary">
                            Learn More →
                        </NavLink>
                    }
                    type="flex-col"
                />
                <ReverseCard
                    title="Security First"
                    text="Extensive security and Firewall are set up to make sure your apps and products are safe. No compromise guaranteed."
                    imageSrc="/images/abstract-cybersecurity-concept-design.jpg"
                    imageAlt="an img"
                    action={
                        <NavLink to="/products" className="link-primary">
                            Learn More →
                        </NavLink>
                    }
                    type="flex-col"
                />
            </FlexSection>
            <section className="section flex w-full flex-col gap-16">
                <h3 className="w-9/10">
                    Don't just take our words, take theirs as well
                </h3>
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
            <section className="section flex w-full flex-col justify-start gap-8">
                <h3>Frequently Asked Questions</h3>
                <Accordion
                    type="single"
                    collapsible
                    className="w-full"
                    defaultValue="item-1"
                >
                    <AccordionItem value="item-1">
                        <AccordionTrigger>
                            <h4>Is it really that robust ?</h4>
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4">
                            <p>
                                Our servers have intense maintenence, tested in
                                real production environtment, heavy workloads
                                and massive requests in seconds, barely any
                                sweat.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>
                            <h4>Is it really that robust ?</h4>
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4">
                            <p>
                                Our servers have intense maintenence, tested in
                                real production environtment, heavy workloads
                                and massive requests in seconds, barely any
                                sweat.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>
                            <h4>Is it really that robust ?</h4>
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4">
                            <p>
                                Our servers have intense maintenence, tested in
                                real production environtment, heavy workloads
                                and massive requests in seconds, barely any
                                sweat.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </section>
            <CallToAction />
        </div>
    );
};

export default HomePage;
