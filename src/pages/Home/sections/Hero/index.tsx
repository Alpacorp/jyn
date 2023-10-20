import { FC, useEffect, useRef, useState } from "react";

import { TextBanner } from "../../../../components/TextBanner";

import data from "./dataSlider.json";

interface DataProps {
  id: number;
  url: string;
  text: string;
}

export const Hero: FC = () => {
  const bannerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [animateText, setAnimateText] = useState(false);
  const [showText, setShowText] = useState(true);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const handleSlideTextAnimation = () => {
    setShowText(false);
    setIsTransitioning(true);
    setTimeout(() => {
      setIsTransitioning(false);
      setShowText(true);
    }, 800);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered && !isTransitioning) {
        goToNextSlide();
        handleSlideTextAnimation();
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [isHovered, isTransitioning]);

  useEffect(() => {
    setAnimateText(true);
  }, [currentIndex]);

  return (
    <section
      className="overflow-hidden h-auto mt-48 rounded-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      ref={bannerRef}
    >
      <div
        className={`flex transition-transform duration-1000 h-72 rounded-xl ${
          isTransitioning ? "pointer-events-none" : ""
        }`}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {data.map((item: DataProps) => (
          <div
            key={item.id}
            className={`w-full flex-shrink-0 relative rounded-xl`}
          >
            <img
              src={item.url}
              alt={item.text}
              className="h-full object-cover m-auto rounded-xl max-[380px]:object-center max-[320px]:object-top"
            />
            {showText && (
              <div
                className={`absolute z-40 bottom-0 left-0 right-0 m-auto p-4 text-center text-white leading-tight font-poppins max-w-[54rem] rounded-xl ${
                  animateText ? "animate-fade-in-bottom delay-1000" : ""
                }`}
              >
                <TextBanner
                  content={{
                    id: item.id,
                    text: item.text,
                    url: item.url,
                  }}
                  customClass={
                    "text-2xl font-normal rounded-xl max-[380px]:text-lg max-[320px]:text-md max-[380px]:leading-6 max-[320px]:leading-5"
                  }
                />
              </div>
            )}
            <div className="absolute z-10 inset-0 bg-gradient-to-t from-main to-transparent rounded-xl" />
          </div>
        ))}
      </div>
      <div className="flex justify-center space-x-2 my-4">
        {data.map((image, index) => (
          <button
            key={image.id}
            className={`h-3 rounded-full ${
              index === currentIndex ? "bg-main w-10" : "bg-gray w-3"
            }`}
            onClick={() => {
              setCurrentIndex(index);
              handleSlideTextAnimation();
            }}
          />
        ))}
      </div>
    </section>
  );
};
