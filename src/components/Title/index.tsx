import React, { FC } from "react";

interface TitleProps {
  children?: React.ReactNode;
  className?: string;
}

export const Title: FC<TitleProps> = ({ children, className }) => {
  return (
    <h2 className={`text-2xl font-martelBold ${className}`}>{children}</h2>
  );
};
