import React from 'react';
import Svg, { SvgProps } from 'react-native-svg';

export interface UC62Props extends Omit<SvgProps, 'viewBox'> {
  width?: number | string;
  height?: number | string;
}

export const UC62: React.FC<UC62Props> = ({
  width = 100,
  height = 100,
  ...props
}) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 31.075048 46.611384"
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
  <ellipse
     id="path1251"
     cx="15.536979"
     cy="23.305756"
     rx="11.652534"
     ry="11.65253" />
  <path
     id="ellipse1333"
     d="M 10.392935,16.387547 22.45513,28.449742 c 1.112213,-1.485086 1.717005,-3.288663 1.72495,-5.144043 -3.4e-5,-4.773421 -3.869681,-8.643018 -8.643104,-8.64299 -1.855367,0.0079 -3.658941,0.612665 -5.144041,1.724838 z M 20.681017,30.223967 8.6188222,18.161772 c -1.1121894,1.485054 -1.716981,3.288587 -1.7249503,5.143927 -2.85e-5,4.773467 3.8696381,8.643133 8.6431041,8.643106 1.855367,-0.0079 3.658941,-0.612665 5.144041,-1.724838 z" />
  </Svg>
);

UC62.displayName = 'UC62';
