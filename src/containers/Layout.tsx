import { FC } from "react";
import { Header } from "../components/Header";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <main>
      <Header />
      <div className="max-w-screen-lg w-full mx-auto px-3 max-[500px]:px-5">
        {children}
      </div>
    </main>
  );
};
