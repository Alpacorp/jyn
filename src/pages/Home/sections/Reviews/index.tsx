import { FC, useEffect, useState } from "react";

import data from "./dataReviews.json";
import { OpenQuote } from "../../../../components/Icons/OpenQuote";
import { CloseQuote } from "../../../../components/Icons/CloseQuote";
import { Arrow } from "../../../../components/Icons/Arrow";
import { Title } from "../../../../components/Title";
import { SquareIcon } from "../../../../components/Icons/SquareIcon";

export const Reviews: FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative text-center overflow-hidden py-12 h-auto bg-gradient-to-t from-main to-transparent">
      <Title className="text-main mb-4">¿Por qué confiar en nosotros?</Title>
      <SquareIcon />
      <div
        className={`flex transition-transform duration-1000 h-[500px]`}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {data.map((item) => (
          <div key={item.id} className={`w-full flex-shrink-0 relative`}>
            <div
              className={`absolute bg-nude flex flex-col items-center justify-center top-[16%] left-0 right-0 m-auto p-4 leading-tight max-w-[450px] w-full rounded-lg shadow-sm z-40 max-[480px]:max-w-[320px]`}
            >
              <h4 className="text-xs p-2 bg-main w-fit text-white font-rubikRegular rounded-xl">
                {item.category}
              </h4>
              <h3 className="text-lg font-rubikRegular text-main my-3">
                {item.type}
              </h3>
              <div className="bg-white rounded-xl max-w-[400px] w-full px-1">
                <div className="flex justify-start ml-4 mb-2 mt-10">
                  <OpenQuote />
                </div>
                <blockquote className="text-xl font-rubikItalic leading-5">
                  {item.review}
                </blockquote>
                <div className="flex justify-end mr-4 mt-2 mb-10">
                  <CloseQuote />
                </div>
                <div className="bg-main rounded-b-xl relative bottom-0">
                  <p className="text-base font-rubikItalic text-white">
                    {item.name}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        className="absolute top-1/2 left-5 transform -translate-y-1/2 max-[480px]:left-2"
        onClick={() => {
          goToPrevSlide();
        }}
      >
        <Arrow className="rotate-180 w-10" />
      </button>
      <button
        className="absolute top-1/2 right-5 transform -translate-y-1/2 max-[480px]:right-2"
        onClick={() => {
          goToNextSlide();
        }}
      >
        <Arrow className="w-10" />
      </button>
    </section>
  );
};
