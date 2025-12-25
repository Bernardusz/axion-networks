import MainCard from "@/components/privateComponent/mainCard";
const ProductsCpanelPage = () => {
    return (
        <div className="page">
            <section>
                <img
                    src="/images/ai-generated-8994400_1280.jpg"
                    alt=""
                    className="block h-[70vh] w-full object-cover"
                />
                <div className="section flex flex-col gap-4 xl:px-32">
                    <h2>Control Panel</h2>
                    <p>Full hosting control, minus the terminal.</p>
                </div>
            </section>
            <section className="section grid grid-cols-1 gap-12 xl:grid-cols-2 xl:px-64">
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
            </section>
        </div>
    );
};

export default ProductsCpanelPage;
