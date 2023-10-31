import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { useState, useEffect } from "react";

const Carousel = ({ children: images }) => {
    const autoSlide = true;
    const slideIntervalTime = 2000;
    const [curr, setCurr] = useState(0);
    const prev = () => {
        if (images.length > 0) {
            setCurr(curr === 0 ? images.length - 1 : curr - 1);
        }
    };

    const next = () =>
        setCurr((curr) => (curr === images.length - 1 ? 0 : curr + 1));

    useEffect(() => {
        if (!autoSlide) return;
        const slideInterval = setInterval(next, slideIntervalTime);
        return () => {
            clearInterval(slideInterval);
        };
    }, []);

    return (
        <div className="overflow-hidden touch-none dt:rounded-full relative">
            <div
                style={{ transform: `translateX(-${curr * 100}%)` }}
                className="flex object-cover mbx:h-[30vh] dt:h-[100%]  transition-all duration-200 ease-in"
            >
                {images}
            </div>
            <div className=" absolute flex flex-row inset-0 items-center justify-between">
                <IoIosArrowRoundBack
                    onClick={prev}
                    className="hover:bg-[#fff] hover:text-black cursor-pointer text-white rounded-full transition-all duration-200  ease-in "
                    size={40}
                />
                <IoIosArrowRoundForward
                    onClick={next}
                    className="hover:bg-[#fff] hover:text-black cursor-pointer text-white rounded-full transition-all duration-200  ease-in "
                    size={40}
                />
            </div>
        </div>
    );
};
export default Carousel;
