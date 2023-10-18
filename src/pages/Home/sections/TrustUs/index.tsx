import { FC } from "react";
import { Title } from "../../../../components/Title";
import { Square } from "../../../../components/Icons/Square";
import { useDataTrustUs } from "./hooks/useDataTrustUs";

export const TrustUs: FC = () => {
  const { dataTrustUs } = useDataTrustUs();

  return (
    <section className="text-center bg-nude py-2">
      <Title className="text-main mt-12 mb-4">
        ¿Por qué confiar en nosotros?
      </Title>
      <Square />
      <div className="flex flex-wrap justify-center">
        {dataTrustUs.map((trustUs) => (
          <div key={trustUs.id} className="my-6 max-w-[300px] w-full">
            <div className="flex justify-center">{trustUs.icon}</div>
            <h3 className="text-2xl text-secondary font-bold font-martelRegular my-8">
              {trustUs.title}
            </h3>
            <p className="text-main text-xl font-rubikRegular">
              {trustUs.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
