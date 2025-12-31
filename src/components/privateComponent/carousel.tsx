import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import ArrowDark from "@/assets/CarouselArrow - D.svg?react";
import ArrowLight from "@/assets/CarouselArrow - L.svg?react";
import useMode from "@/context/useMode";
const Carousel = ({ children }: { children: React.ReactNode }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel(
        { loop: true, align: "center" },
        [Autoplay()]
    );

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);
    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    const currentMode = useMode(state => state.mode);

    return (
        <div
            className="embla flex flex-col gap-4 overflow-hidden"
            ref={emblaRef}
        >
            <div className="embla__container -ml-8 flex">
                {React.Children.map(children, (child, index) => {
                    // Ensure the child is a valid React element before cloning
                    if (React.isValidElement(child)) {
                        return (
                            <div
                                className="embla__slide flex-[0_0_100%] pl-8 md:flex-[0_0_50%]"
                                key={index}
                            >
                                {React.cloneElement(child)}
                            </div>
                        );
                    }
                    return child; // Return non-element children (like strings or numbers) as is
                })}
            </div>
            {currentMode === "dark" ? (
                <div className="flex flex-row justify-between">
                    <ArrowDark
                        onClick={scrollPrev}
                        className="embla__prev rotate-180"
                    />
                    <ArrowDark onClick={scrollNext} className="embla__next" />
                </div>
            ) : (
                <div className="flex flex-row justify-between">
                    <ArrowLight
                        onClick={scrollPrev}
                        className="embla__prev rotate-180"
                    />
                    <ArrowLight onClick={scrollNext} className="embla__next" />
                </div>
            )}
        </div>
    );
};

export default Carousel;
