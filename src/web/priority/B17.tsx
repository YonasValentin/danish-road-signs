import React from 'react';

export interface B17Props extends React.SVGProps<SVGSVGElement> {
  width?: number | string;
  height?: number | string;
}

export const B17: React.FC<B17Props> = ({
  width = 100,
  height = 100,
  ...props
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 401 401"
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
    
    <clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath3970">
      <path
         d="m 248.098,409.341 42.114,0 0,42.114 -42.114,0 0,-42.114 z"
         id="path3972" />
    </clipPath>
  </defs>
  
  
  <g
     id="layer1"
     transform="translate(184.70568,-183.00439)">
    <g
       transform="translate(-501.54702,586.32528)"
       id="layer1-0" />
    <g
       transform="matrix(9.5199733,0,0,-9.5199733,-2546.5963,4480.8406)"
       id="g3966">
      <g
         id="g3968"
         clip-path="url(#clipPath3970)">
        <g
           id="g3974"
           transform="translate(248.7022,431.8569)">
          <path
             d="m 0,0 18.994,18.994 c 0.803,0.805 2.115,0.805 2.918,0 L 40.908,0 c 0.803,-0.803 0.803,-2.115 0,-2.918 L 21.912,-21.914 c -0.803,-0.804 -2.115,-0.804 -2.918,0 L 0,-2.918 C -0.805,-2.115 -0.805,-0.803 0,0"
             id="path3976" />
        </g>
        <g
           id="g3978"
           transform="translate(255.2766,430.3969)">
          <path
             d="M 0,0 13.876,13.878 19.355,8.399 5.478,-5.478 0,0 z M 8.4,-8.4 22.278,5.477 27.753,0 13.876,-13.876 8.4,-8.4 z"
             id="path3980" />
        </g>
        <g
           id="g3982"
           transform="translate(280.4757,438.7955)">
          <path
             d="m 0,0 8.032,-8.033 c 0.199,-0.199 0.201,-0.529 0,-0.73 l -18.99,-18.991 c -0.201,-0.201 -0.529,-0.201 -0.73,0 L -19.721,-19.72 0,0 z m -22.64,-16.796 -8.039,8.033 c -0.198,0.197 -0.201,0.528 0,0.73 l 18.991,18.991 c 0.201,0.201 0.532,0.198 0.73,0 L -2.925,2.919 -22.64,-16.796 z m -9.133,9.857 18.993,18.994 c 0.804,0.805 2.116,0.805 2.92,0 L 9.133,-6.939 c 0.805,-0.804 0.805,-2.114 0,-2.918 L -9.86,-28.852 c -0.804,-0.804 -2.116,-0.804 -2.92,0 l -18.993,18.995 c -0.805,0.804 -0.805,2.114 0,2.918"
             id="path3984" />
        </g>
      </g>
    </g>
  </g>
  </svg>
);

B17.displayName = 'B17';
