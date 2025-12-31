import { useHead } from "@unhead/react";
const CreditsPage = () => {
    useHead({
        title: "Credits | Axion Networks",
        meta: [
            {
                name: "description",
                content:
                    "Credits for all images I used | A VPS deployment for you to deploy your app.",
            },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1",
            },
            { name: "robots", content: "index, follow" },

            // Open Graph (Social sharing)
            { property: "og:title", content: "Credits | Axion Networks" },
            {
                property: "og:description",
                content:
                    "Credits for all images I used | A VPS deployment for you to deploy your app.",
            },
            { property: "og:type", content: "website" },
            // Twitter Card
            { name: "twitter:card", content: "summary_large_image" },
            { name: "twitter:title", content: "Credits | Axion Networks" },
            {
                name: "twitter:description",
                content:
                    "Credits for all images I used | A VPS deployment for you to deploy your app.",
            },
        ],
        link: [
            { rel: "icon", type: "image/png", href: "/icon/Axion Icon.svg" },
        ],
    });
    return (
        <div className="page mb-16 justify-center gap-4 xl:pt-30">
            <section className="section flex flex-col justify-center gap-2">
                <h1 className="text-center">Credits</h1>
                <p>
                    Credits for all the images I used, respect and thanks for
                    these guys.
                </p>
            </section>
            <div className="link-primary flex flex-col gap-4 text-center">
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.freepik.com/free-photo/cloud-storage-background-remixed-from-public-domain-by-nasa_15606925.htm"
                >
                    Image by http://rawpixel.com/ on Freepik
                </a>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.freepik.com/free-photo/website-hosting-concept-with-circuits_26412535.htm"
                >
                    Image by freepik
                </a>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.freepik.com/free-photo/modern-data-center-providing-cloud-services-enabling-businesses-access-computing-resources-storage-demand-internet-server-room-infrastructure-3d-render-animation_56001615.htm"
                >
                    Image by DC Studio on Freepik
                </a>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.freepik.com/free-ai-image/abstract-cybersecurity-concept-design_352784913.htm"
                >
                    Image by freepik
                </a>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.freepik.com/free-photo/cropped-image-businessman-sitting-by-table-cafe-analyzing-indicators-laptop-computer-while-using-wristwatch_6876015.htm"
                >
                    Image by drobotdean on Freepik
                </a>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.pexels.com/photo/close-up-photo-of-programming-of-codes-546819/"
                >
                    Photo by luis gomes
                </a>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.pexels.com/photo/software-engineer-standing-beside-server-racks-1181354/"
                >
                    Photo by Christina Morillo
                </a>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.pexels.com/photo/data-codes-through-eyeglasses-577585/"
                >
                    Photo by Kevin Ku
                </a>
                <p>
                    Gambar oleh{" "}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://pixabay.com/id/users/geralt-9301/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=8211245"
                    >
                        Gerd Altmann
                    </a>{" "}
                    dari{" "}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://pixabay.com/id//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=8211245"
                    >
                        Pixabay
                    </a>
                </p>
                <p>
                    Photo by{" "}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://unsplash.com/@tvick?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                    >
                        Taylor Vick
                    </a>
                    on{" "}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://unsplash.com/photos/cable-network-M5tzZtFCOfs?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                    >
                        Unsplash
                    </a>
                </p>
                <p>
                    Gambar oleh{" "}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://pixabay.com/id/users/geralt-9301/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=8994400"
                    >
                        Gerd Altmann
                    </a>{" "}
                    dari{" "}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://pixabay.com/id//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=8994400"
                    >
                        Pixabay
                    </a>
                </p>
                <p>
                    Photo by{" "}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://unsplash.com/@kowalikus?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                    >
                        Krzysztof Kowalik
                    </a>{" "}
                    on{" "}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://unsplash.com/photos/a-wall-that-has-a-bunch-of-lights-on-it-KiH2-tdGQRY?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                    >
                        Unsplash
                    </a>
                </p>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.pexels.com/photo/ethernet-cables-plugged-on-a-server-rack-1054397/"
                >
                    Photo by Josh Sorenson
                </a>
                <p>
                    Photo by
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://unsplash.com/@scottrodgerson?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                    >
                        Scott Rodgerson
                    </a>
                    on
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://unsplash.com/photos/a-bunch-of-blue-wires-connected-to-each-other-PSpf_XgOM5w?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                    >
                        Unsplash
                    </a>
                </p>
                <p>
                    Photo by
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://unsplash.com/@matthieu_cabri?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                    >
                        Matthieu Beaumont
                    </a>
                    on
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://unsplash.com/photos/a-very-large-array-of-electronic-equipment-in-a-room-iYnpYeyu57k?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                    >
                        Unsplash
                    </a>
                </p>
                <p>
                    Photo by
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://unsplash.com/@floriankrumm?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                    >
                        Florian Krumm
                    </a>
                    on
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://unsplash.com/photos/a-close-up-of-a-computer-motherboard-with-wires-yLDabpoCL3s?"
                    >
                        Unsplash
                    </a>
                </p>{" "}
                <p>
                    Photo by
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://unsplash.com/@wildmax?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                    >
                        Massimo Botturi
                    </a>
                    on
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://unsplash.com/photos/electronic-wire-lot-zFYUsLk_50Y?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                    >
                        Unsplash
                    </a>
                </p>
            </div>
        </div>
    );
};

export default CreditsPage;
