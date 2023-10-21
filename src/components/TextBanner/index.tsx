import { FC } from "react";

interface TextBannerProps {
  content: {
    id: number;
    text: string;
  };
  customClass?: string;
}

export const TextBanner: FC<TextBannerProps> = ({ content, customClass }) => {
  return (
    <h2 className={`${customClass}`} key={content.id}>
      {content.text}
    </h2>
  );
};
