import { FC } from "react";

import { AboutUs, Hero, MainText } from "@pages/Home/sections";

export const Home: FC = () => {
  return (
    <main>
      <Hero />
      <MainText />
      <AboutUs />
    </main>
  );
};
