import React from 'react';

export interface E11_9Props extends React.SVGProps<SVGSVGElement> {
  width?: number | string;
  height?: number | string;
}

export const E11_9: React.FC<E11_9Props> = ({
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
 <path d="m499.34 128.19-130.89 189.19 96.51-13.558v148.89h-180.22l12.418-89.336-184.19 126.62 185.19 130.73-13.439-94.309h180.24v341.43l70.069-0.0946 0.417-341.33 161.96-4e-3 -12.616 94.309 185.07-130.73-184.63-126.12 12.176 88.836-162.38 1e-5v-149.01l96.322 14.401z" fill="#fff" />
  </svg>
);

E11_9.displayName = 'E11_9';
