import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import { Home } from "../pages/Home";

export const AppRouter: FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </Layout>
  );
};
