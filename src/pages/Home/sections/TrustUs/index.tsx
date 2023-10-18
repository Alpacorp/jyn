import { FC } from "react";
import { Title } from "../../../../components/Title";
import { SquareIcon } from "../../../../components/Icons/SquareIcon";
import { useDataTrustUs } from "./hooks/useDataTrustUs";

export const TrustUs: FC = () => {
  const { dataTrustUs } = useDataTrustUs();

  return (
    <section className="text-center bg-nude py-12">
      <div className="max-w-screen-lg w-full mx-auto px-3 max-[500px]:px-5">
        <Title className="text-main mb-4">¿Por qué confiar en nosotros?</Title>
        <SquareIcon />
        <div className="flex flex-wrap justify-between gap-7 mt-7">
          {dataTrustUs.map((item) => (
            <div
              key={item.id}
              className={`max-w-[300px] w-full border border-main rounded-lg flex flex-col items-center p-4 justify-start ${
                item.shadow && "bg-main"
              }`}
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
