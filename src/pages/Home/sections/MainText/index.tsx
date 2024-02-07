import { FC } from "react";

import { SquareIcon } from "@components/Icons";

export const MainText: FC = () => {
  return (
    <section className="text-center my-8">
      <h2 className="text-main text-xl font-rubikRegular">
        <span className="font-rubikBold">Cuéntanos tu caso sin costo</span> para
        tomar decisiones y{" "}
        <span className="font-rubikBold">exigir tus derechos</span>
      </h2>
      <h1 className="text-2xl text-secondary font-bold font-martelRegular my-8">
        Te damos asesoría y representación jurídica
      </h1>
      <SquareIcon />
    </section>
  );
};
