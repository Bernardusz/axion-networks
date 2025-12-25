import MainCard from "@/components/privateComponent/mainCard";
import TitleParagraph from "@/components/privateComponent/titleParagraph";
import DarkArrow from "@/assets/CarouselArrow - D.svg?react";
import LightArrow from "@/assets/CarouselArrow - L.svg?react";
import useMode from "@/context/mode";
import FlexSection from "@/components/section/flexSection";
import CallToAction from "@/components/staticComponent/callToAction";
import { Link } from "react-router-dom";

const ProductsPage = () => {
    const mode = useMode(state => state.mode);
    return (
        <div className="page">
            <section className="section mt-[20vh] flex flex-col items-center justify-center gap-8">
                <h1 className="text-center">Choose how you deploy</h1>
                <p>Choose how you deploy - your apps, your way</p>
            </section>
            <section className="section">
                <img
                    loading="lazy"
                    src="/images/website-hosting-concept-with-circuits.jpg"
                    alt=""
                    className="max-h-80 w-full rounded-xl object-cover"
                />
            </section>
            <section className="section flex flex-col gap-16">
                <TitleParagraph
                    title="Deploy with no limitation"
                    text="We don't decide how you host your apps, you do. Your apps - Your needs - Your way"
                />
                <FlexSection>
                    <Link to="gid">
                        <MainCard
                            imageSrc="/images/scott-rodgerson-PSpf_XgOM5w-unsplash.jpg"
                            imageAlt="an img"
                            title="Git Integrated Deployment"
                            text="Easy, Fast and Intuitive"
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
                            text="Middle-ground between Easiness and Control"
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
                            text="A VPS that is truly yours"
                            action={
                                mode === "dark" ? <DarkArrow /> : <LightArrow />
                            }
                            type="flex-row"
                        />
                    </Link>
                </FlexSection>
            </section>
            <CallToAction />
        </div>
    );
};

export default ProductsPage;
