import React from 'react';

export interface E11_6Props extends React.SVGProps<SVGSVGElement> {
  width?: number | string;
  height?: number | string;
}

export const E11_6: React.FC<E11_6Props> = ({
  width = 100,
  height = 100,
  ...props
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="m0 96c0-55 38-96 96-96h808c48 0 96 38 96 96v808c0 55-38 99-96 96h-808c-55 0-96-38-96-96z" fill="#0071bb"/>
 <path d="m10 96.072c0-47 39-86 86-86h808c47 0 86 39 86 86v808c0 47-39 86-86 86h-808c-47 0-86-39-86-86z" fill="#fff"/>
 <path d="m42 96.072c0-25.946 27-54 54-54h808c26 0 54 27 54 54v810c0 26-27 52-54 52h-808c-26 0-54-27-54-54z" fill="#0071bb"/>
 <path d="m593.64 139.66-136.07 196.68 100.24-11.984-0.68326 233.49c0-8.9675-18.349-16.478-36.016-16.478l-179.26 0.52028 13.732-98.245-197.43 137.76 197.86 136.88-11.984-100.87 173.83-0.14381c25.827 0 38.987 22.772 38.987 43.652 0 0-0.0671 128.96-1.0971 201.73 0 0 50.588 0.70147 75.65 0.87373 0.19494 1e-3 0.31319-0.17896 0.31319-0.37454l0.24927-172.65h0.56182l0.31319-0.31319v-367.95l97.683 13.607z" fill="#fff" fillRule="evenodd"/>
  </svg>
);

E11_6.displayName = 'E11_6';
