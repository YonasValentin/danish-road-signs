import React from 'react';
import Svg, { SvgProps } from 'react-native-svg';

export interface M61Props extends Omit<SvgProps, 'viewBox'> {
  width?: number | string;
  height?: number | string;
}

export const M61: React.FC<M61Props> = ({
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
    
  <defs
     id="defs2252" />
  <rect
     id="rect22364"
     width="105.56875"
     height="105.56875"
     x="0.13229166"
     y="0.13228078"
     ry="6.4362597" />
  <rect
     id="rect19919"
     width="99.488167"
     height="99.488197"
     x="3.1725776"
     y="3.1725707"
     ry="3.3959801" />
  <rect
     id="rect21520"
     width="75.892845"
     height="75.892868"
     x="14.970235"
     y="14.970221"
     ry="3.3959801" />
  <path
     d="m 67.629475,78.465956 c 2.05151,0 3.47875,1.42466 3.47875,3.20937 0,1.78471 -1.42724,3.211955 -3.47875,3.211955 h -29.69768 c -1.96083,0 -3.47611,-1.427245 -3.47611,-3.211955 0,-1.78471 1.51528,-3.20937 3.47611,-3.20937 h 5.17283 V 51.086603 h -5.35155 c -2.04886,0 -3.47618,-1.515319 -3.47618,-3.20937 0,-1.78471 1.42732,-3.209363 3.47618,-3.209363 l 23.27633,-0.09068 c 0.71516,0 1.33664,0.624264 1.33664,1.427253 v 5.082147 27.379352 z"
     id="path838" />
  <ellipse
     id="path1441"
     cx="52.333839"
     cy="31.067551"
     rx="10.657681"
     ry="10.657743" />
  </Svg>
);

M61.displayName = 'M61';
