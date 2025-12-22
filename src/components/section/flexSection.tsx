import type React from "react";

const FlexSection = ({ children }: {children: React.ReactNode}) => {
	return (
		<section className="w-full flex flex-col xl:flex-row justify-center gap-16 md:gap-24 xl:gap-8 h-60 flex-1">
			{children}
		</section>
	);
};

export default FlexSection;