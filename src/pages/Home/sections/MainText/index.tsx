import { FC } from "react";
import { SquareIcon } from "../../../../components/Icons/SquareIcon";

export const MainText: FC = () => {
  return (
    <section className="text-center my-8">
      <h2 className="text-main text-xl font-rubikRegular">
        <span className="font-semibold">Cuéntanos tu caso sin costo</span> para
        tomar decisiones y{" "}
        <span className="font-semibold">exigir tus derechos</span>
      </h2>
      <h3 className="text-2xl text-secondary font-bold font-martelRegular my-8">
        Te damos la asesoría y representación jurídica
      </h3>
      <SquareIcon />
    </section>
  );
};
