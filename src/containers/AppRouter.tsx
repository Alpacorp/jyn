import { Layout } from "@containers/Layout";
import { Home } from "@pages/Home";
import { FC } from "react";
import { Route, Routes } from "react-router-dom";

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
