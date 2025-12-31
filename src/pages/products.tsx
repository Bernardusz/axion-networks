import MainCard from "@/components/privateComponent/mainCard";
import TitleParagraph from "@/components/privateComponent/titleParagraph";
import DarkArrow from "@/assets/CarouselArrow - D.svg?react";
import LightArrow from "@/assets/CarouselArrow - L.svg?react";
import useMode from "@/context/useMode";
import FlexSection from "@/components/section/flexSection";
import CallToAction from "@/components/staticComponent/callToAction";
import { Link } from "react-router-dom";

const ProductsPage = () => {
    const mode = useMode(state => state.mode);
    return (
        <div className="page">
            <section className="section flex flex-col items-center justify-center gap-8">
                <h1 className="text-center">Choose how you deploy</h1>
                <p>
                    From simple Git-based workflows to full VPS control — choose
                    what fits your scale.
                </p>
            </section>
            <section className="section">
                <img
                    loading="lazy"
                    src="/images/website-hosting-concept-with-circuits.jpg"
                    alt=""
                    className="max-h-160 w-full rounded-xl object-cover"
                />
                <p className="p-deemphasize mt-2 text-center">
                    One platform. Multiple deployment strategies.
                </p>
            </section>
            <section className="section flex w-full flex-col gap-8 xl:w-4/5">
                <h3>Who is this for</h3>
                <div className="flex w-full flex-col justify-between gap-6 md:flex-row md:gap-16">
                    <div>
                        <h4>Just starting out</h4>
                        <p className="text-sm opacity-80">
                            Push your code and let us handle the rest.
                        </p>
                    </div>
                    <div>
                        <h4>Growing projects</h4>
                        <p className="text-sm opacity-80">
                            Balance control and simplicity with a modern control
                            panel.
                        </p>
                    </div>
                    <div>
                        <h4>Power users</h4>
                        <p className="text-sm opacity-80">
                            Full root access. No restrictions.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section flex w-full flex-col gap-16 xl:w-4/5">
                <TitleParagraph
					variant="h3"
                    title="Deploy with no limitation"
                    text="We don't decide how you host your apps, you do. Your apps - Your needs - Your way"
                />
            </section>
            <FlexSection>
                <Link to="gid">
                    <MainCard
                        imageSrc="/images/scott-rodgerson-PSpf_XgOM5w-unsplash.jpg"
                        imageAlt="an img"
                        title="Git Integrated Deployment"
                        text="Best for teams that deploy often"
                        action={
                            mode === "dark" ? <DarkArrow /> : <LightArrow />
                        }
                        type="flex-row"
                    />
                </Link>
                <Link to="cpanel">
                    <MainCard
                        imageSrc="/images/scott-rodgerson-PSpf_XgOM5w-unsplash.jpg"
                        imageAlt="an img"
                        title="Control Panel"
                        text="Ideal if you want visibility without SSH"
                        action={
                            mode === "dark" ? <DarkArrow /> : <LightArrow />
                        }
                        type="flex-row"
                    />
                </Link>
                <Link to="vps">
                    <MainCard
                        imageSrc="/images/scott-rodgerson-PSpf_XgOM5w-unsplash.jpg"
                        imageAlt="an img"
                        title="Virtual Private Server"
                        text="Maximum freedom for custom stacks"
                        action={
                            mode === "dark" ? <DarkArrow /> : <LightArrow />
                        }
                        type="flex-row"
                    />
                </Link>
            </FlexSection>
            <section className="section w-full">
                <h3>Why People Trust Us</h3>
                <ul className="mt-6 grid gap-4 md:grid-cols-3">
                    <li>
                        <h4>No vendor lock-in</h4>
                        <p className="p-deemphasize">
                            Your infrastructure stays portable.
                        </p>
                    </li>
                    <li>
                        <h4>Transparent pricing</h4>
                        <p className="p-deemphasize">
                            No hidden limits, no surprise fees.
                        </p>
                    </li>
                    <li>
                        <h4>Built for developers</h4>
                        <p className="p-deemphasize">
                            CLI-friendly, API-first, and automation-ready.
                        </p>
                    </li>
                </ul>
            </section>

            <CallToAction />
        </div>
    );
};

export default ProductsPage;
