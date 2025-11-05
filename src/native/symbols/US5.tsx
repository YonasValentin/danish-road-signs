import React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

export interface US5Props extends Omit<SvgProps, 'viewBox'> {
  width?: number | string;
  height?: number | string;
}

export const US5: React.FC<US5Props> = ({
  width = 100,
  height = 100,
  ...props
}) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 100 100"
    {...props}
  >
    <Path d="m5.8924e-5 448.76h378.79c0-102.98 83.34-186.32 186.32-186.32 102.91 0 183.84 83.34 183.84 186.32h250.9l-0.10842-448.76h-762.79c-79.174 0-116.14 38.172-116.14 123.32l-6e-5 260.25h-120.82z"/>
 <Path d="m563.95 307.12c79.227 0 141.12 64.401 141.12 143.63 0 76.791-61.893 141.19-141.12 141.19-79.227 0-143.63-64.401-143.63-141.19 0-79.227 64.401-143.63 143.63-143.63"/>
  </Svg>
);

US5.displayName = 'US5';
