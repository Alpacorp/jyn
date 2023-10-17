import { FC } from "react";
import { jynWhite, whatsApp } from "../../assets/shared";

export const Header: FC = () => {
  return (
    <header className="flex justify-around items-center fixed top-0 w-full bg-main z-40">
      <div>
        <img
          src={jynWhite}
          className="h-28 w-64 m-3"
          alt="JyN Abogados Logo"
          title="JyN Abogados"
        />
      </div>
      <div>
        <img
          className="w-9 h-9 m-3"
          src={whatsApp}
          alt="WhatsApp"
          title="Contáctanos"
        />
      </div>
    </header>
  );
};
