import type React from "react";

const GridSection = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <section
            className={`section grid min-h-60 w-full grid-cols-1 justify-center gap-6 md:grid-cols-2 md:gap-12 xl:grid-cols-4 xl:gap-8 ${className}`}
        >
            {children}
        </section>
    );
};

export default GridSection;
