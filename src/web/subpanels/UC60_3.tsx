import React from 'react';

export interface UC60_3Props extends React.SVGProps<SVGSVGElement> {
  width?: number | string;
  height?: number | string;
}

export const UC60_3: React.FC<UC60_3Props> = ({
  width = 100,
  height = 100,
  ...props
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 31.075048 46.611384"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    
  <defs
     id="defs1225" />
  <rect
     id="rect1410"
     width="31.075085"
     height="46.611507"
     x="0"
     y="0"
     ry="4.6748638" />
  <rect
     id="rect2457"
     width="26.333952"
     height="41.871513"
     x="2.3700027"
     y="2.3699985"
     ry="2.3048654" />
  <path
     d="M 16.721967,7.7682028 H 14.351969 V 31.667024 l -3.423585,-0.790761 h -0.06627 c -0.196555,0 -0.327963,0.197692 -0.327963,0.395381 0,0.06513 0,0.131411 0.06514,0.196548 l 4.67372,7.242552 c 0.06627,0.06628 0.197688,0.131411 0.263963,0.131411 0.06627,0 0.197688,-0.06513 0.262829,-0.131411 l 4.674863,-7.242552 c 0.06514,-0.06513 0.06514,-0.131411 0.06514,-0.196548 0,-0.197692 -0.130281,-0.395381 -0.329103,-0.395381 h -0.06514 l -3.423585,0.790761 z"
     id="path554" />
  </svg>
);

UC60_3.displayName = 'UC60_3';
