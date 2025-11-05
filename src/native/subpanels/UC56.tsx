import React from 'react';
import Svg, { Defs, Path, Rect, SvgProps } from 'react-native-svg';

export interface UC56Props extends Omit<SvgProps, 'viewBox'> {
  width?: number | string;
  height?: number | string;
}

export const UC56: React.FC<UC56Props> = ({
  width = 100,
  height = 100,
  ...props
}) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 83.314385 37.018385"
    {...props}
  >
    
  <Defs
     id="defs1225" />
  <Rect
     id="rect1410"
     width="83.31443"
     height="37.018322"
     x="0"
     y="0"
     ry="4.7399964" />
  <Rect
     id="rect2457"
     width="78.574425"
     height="32.278324"
     x="2.3700027"
     y="2.3699985"
     ry="2.369998" />
  <Path
     d="M 78.57298,30.864586 V 18.408075 l -6.90785,-6.758774 -6.85762,6.808947 v 12.406338 z"
     id="path1288" />
  <Path
     d="M 62.03313,30.864586 V 26.42711 l -5.19599,-5.194518 -5.14286,5.194518 v 2.116178 H 48.81959 V 21.180942 L 46.09692,18.458248 H 34.99953 l -2.72125,2.722694 v 9.683644 z"
     id="path2466" />
  <Path
     d="M 29.6043,30.864586 V 21.180942 L 25.36901,6.1537354 21.18241,21.180942 v 5.195995 h -2.57217 v -1.614433 l -6.90932,-6.859123 -6.95947,6.859123 v 6.102082 z"
     id="path2468" />
  </Svg>
);

UC56.displayName = 'UC56';
