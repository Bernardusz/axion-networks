import MainCard from "@/components/privateComponent/mainCard";
const ProductsVpsPage = () => {
    return (
        <div className="page">
            <section>
                <img
                    src="/images/ai-generated-8994400_1280.jpg"
                    alt=""
                    className="block h-[70vh] w-full object-cover"
                />
                <div className="section flex flex-col gap-4 xl:px-32">
                    <h2>Virtual Private Server</h2>
                    <p>Your server. Your rules.</p>
                </div>
            </section>
            <section className="section grid grid-cols-1 gap-12 xl:grid-cols-2 xl:px-64">
                <MainCard
                    imageSrc="/images/ai-generated-8994400_1280.jpg"
                    imageAlt="An imagw"
                    title="Full Root Access"
                    text="Install anything. Configure everything. You’re in complete control of your server."
                    type="flex-col"
                />
                <MainCard
                    imageSrc="/images/ai-generated-8994400_1280.jpg"
                    imageAlt="An imagw"
                    title="Choose Your Stack"
                    text="Debian, Ubuntu Server, RHEL—run Docker, custom services, databases, and background workers."
                    type="flex-col"
                />
                <MainCard
                    imageSrc="/images/ai-generated-8994400_1280.jpg"
                    imageAlt="An imagw"
                    title="Isolated Performance"
                    text="Dedicated resources ensure consistent performance with no noisy neighbors."
                    type="flex-col"
                />
                <MainCard
                    imageSrc="/images/ai-generated-8994400_1280.jpg"
                    imageAlt="An imagw"
                    title="Production-Grade Infrastructure"
                    text="Built for serious workloads, scalability, and advanced networking needs."
                    type="flex-col"
                />
            </section>
        </div>
    );
};

export default ProductsVpsPage;
