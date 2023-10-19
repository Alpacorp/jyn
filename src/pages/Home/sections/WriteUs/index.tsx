import { FC } from "react";
import { Title } from "../../../../components/Title";
import { SquareIcon } from "../../../../components/Icons/SquareIcon";
import { whatsApp } from "../../../../../public/assets/shared";

export const WriteUs: FC = () => {
  return (
    <section className="relative text-center overflow-hidden py-12 h-auto bg-main">
      <Title className="text-white mb-4">
        Escríbenos{" "}
        <span className="text-pink">para acompañarte en el proceso</span>
      </Title>
      <SquareIcon />
      <div className="flex justify-center m-auto">
        <a href="#" target="_blank">
          <img
            className="w-14 h-14 m-3"
            src={whatsApp}
            alt="WhatsApp"
            title="Contáctanos"
          />
        </a>
      </div>
    </section>
  );
};
