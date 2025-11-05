import React from 'react';
import Svg, { SvgProps } from 'react-native-svg';

export interface B16Props extends Omit<SvgProps, 'viewBox'> {
  width?: number | string;
  height?: number | string;
}

export const B16: React.FC<B16Props> = ({
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
    <defs
     id="defs5323">
    
    
    <clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath4202">
      <path
         d="m 20.045,731.714 42.114,0 0,37.012 -42.114,0 0,-37.012 z"
         id="path4204" />
    </clipPath>
    
    
    <clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath2840">
      <path
         d="m 77.057,731.714 42.114,0 0,37.012 -42.114,0 0,-37.012 z"
         id="path2842" />
    </clipPath>
    
    <clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath3036">
      <path
         d="m 134.072,731.751 42.114,0 0,36.975 -42.114,0 0,-36.975 z"
         id="path3038" />
    </clipPath>
    
    <clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath2952">
      <path
         d="m 191.084,731.751 42.113,0 0,36.975 -42.113,0 0,-36.975 z"
         id="path2954" />
    </clipPath>
    <clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath2936">
      <path
         d="m 191.084,731.751 42.113,0 0,36.975 -42.113,0 0,-36.975 z"
         id="path2938" />
    </clipPath>
    
    
    
    <clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath3216">
      <path
         d="m 248.098,731.74 42.114,0 0,36.986 -42.114,0 0,-36.986 z"
         id="path3218" />
    </clipPath>
    
    <clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath2880">
      <path
         d="m 305.111,731.751 42.114,0 0,36.975 -42.114,0 0,-36.975 z"
         id="path2882" />
    </clipPath>
    
    <clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath3316">
      <path
         d="m 77.057,409.341 42.114,0 0,42.114 -42.114,0 0,-42.114 z"
         id="path3318" />
    </clipPath>
    
    <clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath3802">
      <path
         d="m 134.072,409.341 42.114,0 0,56.174 -42.114,0 0,-56.174 z"
         id="path3804" />
    </clipPath>
    
    <clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath3564">
      <path
         d="m 191.084,409.341 42.113,0 0,42.113 -42.113,0 0,-42.113 z"
         id="path3566" />
    </clipPath>
  </defs>
  
  
  <g
     id="layer1"
     transform="translate(245.63149,-172.29108)">
    <g
       transform="translate(-501.54702,586.32528)"
       id="layer1-0" />
    <g
       transform="matrix(9.5033185,0,0,-9.5033185,-2061.5655,4462.597)"
       id="g3560">
      <g
         id="g3562"
         clip-path="url(#clipPath3564)">
        <g
           id="g3568"
           transform="translate(192.0202,432.6087)">
          <path
             d="m 0,0 17.908,17.908 c 1.214,1.249 3.212,1.249 4.424,0 L 40.241,0 c 1.249,-1.213 1.249,-3.21 0,-4.423 L 22.332,-22.332 c -1.212,-1.248 -3.21,-1.248 -4.424,0 L 0,-4.423 C -1.248,-3.21 -1.248,-1.213 0,0"
             id="path3570" />
        </g>
        <g
           id="g3572"
           transform="translate(193.1263,431.5029)">
          <path
             d="m 0,0 17.908,17.908 c 0.606,0.607 1.57,0.607 2.212,0 L 38.029,0 c 0.606,-0.607 0.606,-1.605 0,-2.212 L 20.12,-20.12 c -0.642,-0.607 -1.606,-0.607 -2.212,0 L 0,-2.212 C -0.607,-1.605 -0.607,-0.607 0,0"
             id="path3574" />
        </g>
        <g
           id="g3576"
           transform="translate(197.6212,430.3971)">
          <path
             d="M 0,0 14.52,14.519 29.039,0 14.52,-14.519 0,0 z"
             id="path3578" />
        </g>
      </g>
    </g>
  </g>
  </Svg>
);

B16.displayName = 'B16';
