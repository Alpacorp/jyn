import { FC } from "react";

interface ArrowProps {
  className?: string;
}

export const Arrow: FC<ArrowProps> = ({ className }) => {
  return (
    <svg
      width="53"
      height="53"
      viewBox="0 0 53 53"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g filter="url(#filter0_b_246_105)">
        <rect
          x="0.0588379"
          y="0.312012"
          width="52.5602"
          height="52.5602"
          rx="26.2801"
          fill="#350025"
        />
        <path
          d="M19.7688 26.592H32.9088M32.9088 26.592L26.3388 20.022M32.9088 26.592L26.3388 33.162"
          stroke="white"
          strokeWidth="1.87715"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect
          x="1.4667"
          y="1.71987"
          width="49.7445"
          height="49.7445"
          rx="24.8722"
          stroke="#9F688F"
          strokeWidth="2.81572"
        />
      </g>
      <defs>
        <filter
          id="filter0_b_246_105"
          x="-7.94116"
          y="-7.68799"
          width="68.5603"
          height="68.5601"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="4" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_246_105"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_246_105"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
