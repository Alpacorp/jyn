import { FC } from "react";
import { Hero } from "./sections/Hero";
import { AboutUs } from "./sections/AboutUs";
import { MainText } from "./sections/MainText";

export const Home: FC = () => {
  return (
    <>
      <Hero />
      <MainText />
      <AboutUs />
    </>
  );
};
