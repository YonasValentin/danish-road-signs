import React from 'react';

export interface A11Props extends React.SVGProps<SVGSVGElement> {
  width?: number | string;
  height?: number | string;
}

export const A11: React.FC<A11Props> = ({
  width = 100,
  height = 100,
  ...props
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
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
    
  </defs>
  
  
  <g
     id="layer1"
     transform="translate(190.28609,-157.71711)">
    <g
       id="g5411"
       transform="matrix(2.0001553,0,0,2.0001553,-190.39196,-198.4462)">
      <g
         id="g4198"
         transform="matrix(4.7463793,0,0,-4.7463793,-95.088417,3826.733)">
        <g
           clip-path="url(#clipPath4202)"
           id="g4200">
          <g
             transform="translate(20.3006,732.6832)"
             id="g4206">
            <path
               id="path4208"
               d="m 0,0 c -0.359,0.574 -0.322,1.327 0,1.865 l 19.152,33.21 c 0.358,0.573 0.968,0.968 1.649,0.968 0.681,0 1.291,-0.395 1.614,-0.933 L 41.602,1.901 C 41.925,1.327 41.96,0.574 41.602,0 41.279,-0.61 40.634,-0.969 39.988,-0.969 l -38.374,0 C 0.968,-0.969 0.322,-0.61 0,0" />
          </g>
          <g
             transform="translate(20.3006,732.6832)"
             id="g4210">
            <path
               id="path4212"
               d="m 0,0 c -0.359,0.574 -0.322,1.327 0,1.865 l 19.152,33.21 c 0.358,0.573 0.968,0.968 1.649,0.968 0.681,0 1.291,-0.395 1.614,-0.933 L 41.602,1.901 C 41.925,1.327 41.96,0.574 41.602,0 41.279,-0.61 40.634,-0.969 39.988,-0.969 l -38.374,0 C 0.968,-0.969 0.322,-0.61 0,0 M 35.47,3.551 20.801,28.942 6.133,3.551 l 29.337,0 z" />
          </g>
        </g>
      </g>
      <g
         transform="matrix(4.7463793,0,0,-4.7463793,88.08055,249.90038)"
         id="g4214">
        <path
           id="path4216"
           d="M 0,0 2.51,2.51 4.985,0 l 0,-5.344 3.12,0 0,-2.51 -3.12,0 0,-7.532 -4.985,0 0,7.532 -3.12,0 0,2.51 3.12,0 L 0,0 z" />
      </g>
    </g>
    <g
       transform="translate(-501.54702,586.32528)"
       id="layer1-0" />
  </g>
  </svg>
);

A11.displayName = 'A11';
