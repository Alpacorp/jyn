import { FC } from "react";

import { jynWhite } from "@assets/shared";

export const Footer: FC = () => {
  return (
    <footer className="flex flex-col justify-center items-center gap-5 w-full h-16 bg-dark py-20">
      <img src={jynWhite} alt="JyN Abogados" className="w-52" />
      <h4 className="text-white text-sm font-rubikRegular">
        Todos los derechos reservados J&N Abogados - {new Date().getFullYear()}
      </h4>
    </footer>
  );
};
