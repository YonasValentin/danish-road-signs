import React from 'react';

export interface E11_4Props extends React.SVGProps<SVGSVGElement> {
  width?: number | string;
  height?: number | string;
}

export const E11_4: React.FC<E11_4Props> = ({
  width = 100,
  height = 100,
  ...props
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 1000 1000"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="m0 96c0-55 38-96 96-96h808c48 0 96 38 96 96v808c0 55-38 99-96 96h-808c-55 0-96-38-96-96z" fill="#0071bb"/>
 <path d="m10 96.072c0-47 39-86 86-86h808c47 0 86 39 86 86v808c0 47-39 86-86 86h-808c-47 0-86-39-86-86z" fill="#fff"/>
 <path d="m42 96.072c0-25.946 27-54 54-54h808c26 0 54 27 54 54v810c0 26-27 52-54 52h-808c-26 0-54-27-54-54z" fill="#0071bb"/>
 <path d="m353.07 198.07-212.19 148.03 212.68 147.12c-5.9798-38.238-10.371-74.483-12.919-108.41l343.09 0.29425c15.963 3.762 26.525 2.1116 30.303 36.521l3.3959 379.92c2e-3 0.21108 0.12794 0.38443 0.33679 0.38443h74.668c0.21109 0 0.33678-0.17591 0.33678-0.38443v-416.15c-7.6365-74.323-45.535-80.589-85.92-81.356l-368.52-0.34862c1.0129-40.125 12.2-74.37 14.75-105.62z" fill="#fff"/>
  </svg>
);

E11_4.displayName = 'E11_4';
