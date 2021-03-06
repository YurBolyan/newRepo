import React from "react";

function SvgFemaleModal({ humansGender }) {
  return (
    <div>
      <svg
        width="70"
        height="52"
        viewBox="0 0 70 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_312_189)">
          <rect x="10" y="10" width="50" height="32" rx="5" fill="white" />
        </g>
        <path
          d="M29.1928 30.5375L32.066 29.8196L32.2318 29.1564C31.1695 29.0125 30.1393 28.6902 29.1845 28.2032C29.0781 28.1394 29.0102 28.0272 29.003 27.9034C28.9955 27.7796 29.049 27.6598 29.1463 27.5827C29.1598 27.5737 30.5 26.4676 30.5 22.6353C30.5 19.4033 31.2568 17.7644 32.75 17.7644H32.975C33.4931 17.2082 34.2443 16.9302 35 17.015C36.4093 17.015 39.5 18.4306 39.5 22.6353C39.5 26.4676 40.8403 27.5737 40.85 27.5812C41.0158 27.7051 41.0497 27.9399 40.9257 28.1057C40.8966 28.1445 40.8602 28.1774 40.8185 28.2024C39.8646 28.694 38.833 29.0175 37.769 29.1586L37.9348 29.8203L40.8072 30.5382C42.6853 31.0051 44.0027 32.6915 44 34.6253C44 34.8322 43.8321 35 43.625 35H26.375C26.1679 35 26 34.8322 26 34.6253C25.9969 32.6913 27.3144 31.0044 29.1928 30.5375Z"
          fill={humansGender ? "blue" : "#939393"}
        />
        <defs>
          <filter
            id="filter0_d_312_189"
            x="0"
            y="0"
            width="70"
            height="52"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_312_189"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_312_189"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

export default SvgFemaleModal;
