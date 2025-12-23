import type React from "react";

const FlexSection = ({ children }: { children: React.ReactNode }) => {
    return (
        <section className="section flex min-h-60 w-full flex-1 flex-col justify-center gap-16 md:gap-24 xl:flex-row xl:gap-8">
            {children}
        </section>
    );
};

export default FlexSection;
