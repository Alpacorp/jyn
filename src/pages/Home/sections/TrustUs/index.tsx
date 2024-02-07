import { FC } from "react";

import { useDataTrustUs } from "@pages/Home/sections";

import { SquareIcon } from "@components/Icons";
import { Title } from "@components/Title";

import { useIntersection } from "@hooks/useIntersection";

export const TrustUs: FC = () => {
  const { dataTrustUs } = useDataTrustUs();

  const isVisible = useIntersection(0.2, "trust");

  return (
    <section id="trust" className="text-center bg-nude py-12">
      <div className={`max-w-screen-lg w-full mx-auto px-3 max-[500px]:px-5`}>
        <Title className="text-main mb-4">¿Por qué confiar en nosotros?</Title>
        <SquareIcon />
        <div className="flex flex-wrap justify-center gap-7 mt-7">
          {dataTrustUs.map((item) => (
            <div
              key={item.id}
              className={`max-w-[300px] w-full border border-main rounded-lg flex flex-col items-center p-4 justify-start
                hover:shadow-xl hover:scale-105 transition-all duration-100
              ${
                isVisible
                  ? "opacity-100 transform translate-y-0 transition ease-in duration-500"
                  : "opacity-0 transform translate-y-20"
              }
              ${item.shadow && "bg-main"}
              `}
            >
              <div className="flex justify-center">{item.icon}</div>
              <h3
                className={`text-xl text-main font-rubikSemiBold my-8 ${
                  item.shadow && "text-white"
                }`}
              >
                {item.title}
              </h3>
              <p
                className={`font-rubikRegular ${
                  item.shadow ? "text-white" : "text-black"
                }`}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
