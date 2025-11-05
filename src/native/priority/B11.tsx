import React from 'react';
import Svg, { ClipPath, Defs, G, Path, SvgProps } from 'react-native-svg';

export interface B11Props extends Omit<SvgProps, 'viewBox'> {
  width?: number | string;
  height?: number | string;
}

export const B11: React.FC<B11Props> = ({
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
    <Defs
     id="defs5323">
    
    
    <ClipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath4202">
      <Path
         d="m 20.045,731.714 42.114,0 0,37.012 -42.114,0 0,-37.012 z"
         id="path4204" />
    </ClipPath>
    
    
    <ClipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath2840">
      <Path
         d="m 77.057,731.714 42.114,0 0,37.012 -42.114,0 0,-37.012 z"
         id="path2842" />
    </ClipPath>
    
    <ClipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath3036">
      <Path
         d="m 134.072,731.751 42.114,0 0,36.975 -42.114,0 0,-36.975 z"
         id="path3038" />
    </ClipPath>
    
    <ClipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath2952">
      <Path
         d="m 191.084,731.751 42.113,0 0,36.975 -42.113,0 0,-36.975 z"
         id="path2954" />
    </ClipPath>
    <ClipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath2936">
      <Path
         d="m 191.084,731.751 42.113,0 0,36.975 -42.113,0 0,-36.975 z"
         id="path2938" />
    </ClipPath>
    
    
    
    <ClipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath3216">
      <Path
         d="m 248.098,731.74 42.114,0 0,36.986 -42.114,0 0,-36.986 z"
         id="path3218" />
    </ClipPath>
    
    <ClipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath2880">
      <Path
         d="m 305.111,731.751 42.114,0 0,36.975 -42.114,0 0,-36.975 z"
         id="path2882" />
    </ClipPath>
  </Defs>
  
  
  <G
     id="layer1"
     transform="translate(193.27847,-163.48736)">
    <Path
       id="path4208"
       d="m -190.65871,172.32706 c 3.02075,-5.6732 9.39048,-8.937 15.34206,-8.83749 l 363.94933,0.18125 c 6.41009,0.2298 12.55004,3.37609 15.77702,8.97821 3.22699,5.60211 2.86814,12.49191 -0.027,17.69838 L 22.114815,505.54977 c -3.191334,5.37706 -9.21989,9.23314 -15.6382116,9.00808 -6.54861299,0.23345 -12.558263,-3.37136 -15.619395,-8.68555 L -190.9819,190.19602 c -3.06114,-5.31419 -3.16902,-12.32954 0.32319,-17.86896" />
    <G
       id="g4210"
       transform="matrix(4.7386018,8.2263062,8.2263062,-4.7386018,-190.65871,172.32706)">
      <Path
         d="m 0,0 c -0.359,0.574 -0.322,1.327 0,1.865 l 19.152,33.21 c 0.358,0.573 0.968,0.968 1.649,0.968 0.681,0 1.291,-0.395 1.614,-0.933 L 41.602,1.901 C 41.925,1.327 41.96,0.574 41.602,0 41.279,-0.61 40.634,-0.969 39.988,-0.969 l -38.374,0 C 0.968,-0.969 0.322,-0.61 0,0 M 35.47,3.551 20.801,28.942 6.133,3.551 l 29.337,0 z"
         id="path4212" />
    </G>
    <G
       transform="translate(-501.54702,586.32528)"
       id="layer1-0" />
  </G>
  </Svg>
);

B11.displayName = 'B11';
