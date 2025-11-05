import React from 'react';
import Svg, { Defs, Path, Rect, SvgProps } from 'react-native-svg';

export interface M31Props extends Omit<SvgProps, 'viewBox'> {
  width?: number | string;
  height?: number | string;
}

export const M31: React.FC<M31Props> = ({
  width = 100,
  height = 100,
  ...props
}) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 105.83333 105.83334"
    {...props}
  >
    
  <Defs
     id="defs2252" />
  <Rect
     id="rect22364"
     width="105.56875"
     height="105.56875"
     x="0.13229166"
     y="0.13228078"
     ry="6.4362597" />
  <Rect
     id="rect19919"
     width="99.488167"
     height="99.488197"
     x="3.1725776"
     y="3.1725707"
     ry="3.3959801" />
  <Rect
     id="rect21520"
     width="75.892845"
     height="75.892868"
     x="14.970235"
     y="14.970221"
     ry="3.3959801" />
  <Path
     id="path774"
     d="M 63.833818,84.943498 H 85.969934 L 54.737731,35.810061 57.751502,31.065648 c 0.542341,-0.798052 0.255503,-1.776835 -0.423746,-2.197798 -0.751562,-0.480378 -1.655402,-0.286994 -2.138373,0.464571 l -2.272728,3.584795 -2.272728,-3.584795 c -0.482971,-0.751565 -1.386811,-0.944949 -2.138373,-0.464571 -0.679249,0.420963 -0.966087,1.399746 -0.423746,2.197798 l 3.013771,4.744413 -31.232203,49.133437 h 22.136116 l 10.917163,-17.19585 z" />
  </Svg>
);

M31.displayName = 'M31';
