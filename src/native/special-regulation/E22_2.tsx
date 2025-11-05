import React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

export interface E22_2Props extends Omit<SvgProps, 'viewBox'> {
  width?: number | string;
  height?: number | string;
}

export const E22_2: React.FC<E22_2Props> = ({
  width = 100,
  height = 100,
  ...props
}) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 1000 1000"
    {...props}
  >
    <Path d="M0 96C0 41 38 0 96 0h808c48 0 96 38 96 96v808c0 55-38 99-96 96H96c-55 0-96-38-96-96z" fill="#0071bb"/>
 <Path d="M10 96.072c0-47 39-86 86-86h808c47 0 86 39 86 86v808c0 47-39 86-86 86H96c-47 0-86-39-86-86z" fill="#fff"/>
 <Path d="M42 96.072c0-25.946 27-54 54-54h808c26 0 54 27 54 54v810c0 26-27 52-54 52H96c-26 0-54-27-54-54z" fill="#0071bb"/>
 <Path d="m266.95 87.804c-15.551 0-24.474 13.051-24.474 23.239v568.2c0 13.014 11.774 23.788 24.497 23.788h466.11c14.015 0 24.443-11.499 24.443-24.448v-566.28c0-14.12-11.43-24.492-24.466-24.492z" fill="#fff" />
 <Path d="M267.48 112.8h465.05v565.22H267.48z" fill="#f1b72a"/>
 <Path d="m236.78 724.6v74.174h20.244v76.795h53.771v-76.795h14.688v76.795h53.771v-76.83h79.299a45.958 45.958 0 0 0 45.566 40.469 45.958 45.958 0 0 0 45.564-40.469h72.977v76.83h53.77v-76.795h14.689v76.795h53.73v-76.795h18.592v-74.174h-526.66-0.00195z" fill="#fff"/>
  </Svg>
);

E22_2.displayName = 'E22_2';
