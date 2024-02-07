import { FC, useEffect, useState } from "react";

import { jynWhite, whatsApp } from "@assets/shared";

export const Header: FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 0;
      if (scrolled !== isScrolled) {
        setIsScrolled(scrolled);
      }
    };
    document.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolled]);

  return (
    <header
      className={`flex justify-around items-center fixed top-0 w-full bg-main z-40 ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      <div>
        <img
          src={jynWhite}
          className="h-28 w-80 m-3 max-[420px]:w-60"
          alt="JyN Abogados Logo"
          title="JyN Abogados"
        />
      </div>
      <div>
        <a
          href="https://api.whatsapp.com/send?phone=+573219760860&text=Hola,%20solicito%20su%20asesor%C3%ADa"
          target="_blank"
        >
          <img
            className="w-9 h-9 m-3"
            src={whatsApp}
            alt="WhatsApp"
            title="Contáctanos"
          />
        </a>
      </div>
    </header>
  );
};
