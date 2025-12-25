import MainCard from "@/components/privateComponent/mainCard";
const ProductsGidPage = () => {
    return (
        <div className="page">
            <section>
                <img
                    src="/images/ai-generated-8994400_1280.jpg"
                    alt=""
                    className="block h-[70vh] w-full object-cover"
                />
                <div className="section flex flex-col gap-4 xl:px-32">
                    <h2>Git Integrated Deployment</h2>
                    <p>From commit to production in seconds.</p>
                </div>
            </section>
            <section className="section grid grid-cols-1 gap-12 xl:grid-cols-2 xl:px-64">
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
            </section>
        </div>
    );
};

export default ProductsGidPage;
