import React from 'react';
import Svg, { SvgProps } from 'react-native-svg';

export interface D16Props extends Omit<SvgProps, 'viewBox'> {
  width?: number | string;
  height?: number | string;
}

export const D16: React.FC<D16Props> = ({
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
    
    <clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath3420">
      <path
         d="m 305.125,409.34 42.114,0 0,42.114 -42.114,0 0,-42.114 z"
         id="path3422" />
    </clipPath>
    
    <clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath3822">
      <path
         d="m 362.126,409.341 42.114,0 0,42.114 -42.114,0 0,-42.114 z"
         id="path3824" />
    </clipPath>
    
    
    <clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath4098">
      <path
         d="m 20.045,328.96 42.113,0 0,42.115 -42.113,0 0,-42.115 z"
         id="path4100" />
    </clipPath>
    
    <clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath3288">
      <path
         d="m 20.078,726.418 42.185,0 0,42.186 -42.185,0 0,-42.186 z"
         id="path3290" />
    </clipPath>
    
    
    <clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath4202-8">
      <path
         d="m 20.045,731.714 42.114,0 0,37.012 -42.114,0 0,-37.012 z"
         id="path4204-8" />
    </clipPath>
    
    
    <clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath2840-5">
      <path
         d="m 77.057,731.714 42.114,0 0,37.012 -42.114,0 0,-37.012 z"
         id="path2842-5" />
    </clipPath>
    
    <clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath3036-11">
      <path
         d="m 134.072,731.751 42.114,0 0,36.975 -42.114,0 0,-36.975 z"
         id="path3038-52" />
    </clipPath>
    
    <clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath2952-6">
      <path
         d="m 191.084,731.751 42.113,0 0,36.975 -42.113,0 0,-36.975 z"
         id="path2954-1" />
    </clipPath>
    <clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath2936-4">
      <path
         d="m 191.084,731.751 42.113,0 0,36.975 -42.113,0 0,-36.975 z"
         id="path2938-2" />
    </clipPath>
    
    
    
    <clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath3216-6">
      <path
         d="m 248.098,731.74 42.114,0 0,36.986 -42.114,0 0,-36.986 z"
         id="path3218-8" />
    </clipPath>
    
    <clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath2880-7">
      <path
         d="m 305.111,731.751 42.114,0 0,36.975 -42.114,0 0,-36.975 z"
         id="path2882-6" />
    </clipPath>
    
    <clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath3316-8">
      <path
         d="m 77.057,409.341 42.114,0 0,42.114 -42.114,0 0,-42.114 z"
         id="path3318-9" />
    </clipPath>
    
    <clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath3802-7">
      <path
         d="m 134.072,409.341 42.114,0 0,56.174 -42.114,0 0,-56.174 z"
         id="path3804-9" />
    </clipPath>
    
    <clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath3564-4">
      <path
         d="m 191.084,409.341 42.113,0 0,42.113 -42.113,0 0,-42.113 z"
         id="path3566-3" />
    </clipPath>
    
    <clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath3420-2">
      <path
         d="m 305.125,409.34 42.114,0 0,42.114 -42.114,0 0,-42.114 z"
         id="path3422-3" />
    </clipPath>
    
    <clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath3822-4">
      <path
         d="m 362.126,409.341 42.114,0 0,42.114 -42.114,0 0,-42.114 z"
         id="path3824-1" />
    </clipPath>
    
    
    <clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath4098-8">
      <path
         d="m 20.045,328.96 42.113,0 0,42.115 -42.113,0 0,-42.115 z"
         id="path4100-7" />
    </clipPath>
    
    <clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath3336">
      <path
         d="m 77.057,328.96 42.114,0 0,42.115 -42.114,0 0,-42.115 z"
         id="path3338" />
    </clipPath>
    
    <clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath3692">
      <path
         d="m 134.072,328.96 42.114,0 0,42.115 -42.114,0 0,-42.115 z"
         id="path3694" />
    </clipPath>
    
    <clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath3584">
      <path
         d="m 191.084,328.96 42.113,0 0,42.115 -42.113,0 0,-42.115 z"
         id="path3586" />
    </clipPath>
    
    <clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath3990">
      <path
         d="m 248.098,328.96 42.114,0 0,42.115 -42.114,0 0,-42.115 z"
         id="path3992" />
    </clipPath>
    
    <clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath4006">
      <path
         d="m 20.046,204.305 42.114,0 0,42.47 -42.114,0 0,-42.47 z"
         id="path4008" />
    </clipPath>
    
    <clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath3464">
      <path
         d="m 77.053,204.662 42.113,0 0,42.114 -42.113,0 0,-42.114 z"
         id="path3466" />
    </clipPath>
    
    <clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath3866">
      <path
         d="m 134.068,204.642 42.114,0 0,42.115 -42.114,0 0,-42.115 z"
         id="path3868" />
    </clipPath>
    
    <clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath4178">
      <path
         d="m 191.081,204.642 42.114,0 0,42.115 -42.114,0 0,-42.115 z"
         id="path4180" />
    </clipPath>
    
    <clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath3400">
      <path
         d="m 248.093,204.642 42.114,0 0,42.115 -42.114,0 0,-42.115 z"
         id="path3402" />
    </clipPath>
    
    <clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath3778">
      <path
         d="m 305.108,204.642 42.114,0 0,42.115 -42.114,0 0,-42.115 z"
         id="path3780" />
    </clipPath>
    
    <clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath4062">
      <path
         d="m 419.135,204.668 42.113,0 0,42.114 -42.113,0 0,-42.114 z"
         id="path4064" />
    </clipPath>
    
    <clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath4138">
      <path
         d="m 134.077,142.502 42.114,0 0,42.115 -42.114,0 0,-42.115 z"
         id="path4140" />
    </clipPath>
    
    <clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath3548">
      <path
         d="m 20.039,142.502 42.114,0 0,42.115 -42.114,0 0,-42.115 z"
         id="path3550" />
    </clipPath>
    
    
    <clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath4202-2">
      <path
         d="m 20.045,731.714 42.114,0 0,37.012 -42.114,0 0,-37.012 z"
         id="path4204-4" />
    </clipPath>
    
    
    <clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath2840-1">
      <path
         d="m 77.057,731.714 42.114,0 0,37.012 -42.114,0 0,-37.012 z"
         id="path2842-7" />
    </clipPath>
    
    <clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath3036-1">
      <path
         d="m 134.072,731.751 42.114,0 0,36.975 -42.114,0 0,-36.975 z"
         id="path3038-5" />
    </clipPath>
    
    <clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath2952-7">
      <path
         d="m 191.084,731.751 42.113,0 0,36.975 -42.113,0 0,-36.975 z"
         id="path2954-6" />
    </clipPath>
    <clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath2936-1">
      <path
         d="m 191.084,731.751 42.113,0 0,36.975 -42.113,0 0,-36.975 z"
         id="path2938-4" />
    </clipPath>
    
    
    
    <clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath3216-2">
      <path
         d="m 248.098,731.74 42.114,0 0,36.986 -42.114,0 0,-36.986 z"
         id="path3218-1" />
    </clipPath>
    
    <clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath2880-8">
      <path
         d="m 305.111,731.751 42.114,0 0,36.975 -42.114,0 0,-36.975 z"
         id="path2882-5" />
    </clipPath>
    
    <clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath3316-6">
      <path
         d="m 77.057,409.341 42.114,0 0,42.114 -42.114,0 0,-42.114 z"
         id="path3318-1" />
    </clipPath>
    
    <clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath3802-9">
      <path
         d="m 134.072,409.341 42.114,0 0,56.174 -42.114,0 0,-56.174 z"
         id="path3804-2" />
    </clipPath>
    
    <clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath3564-9">
      <path
         d="m 191.084,409.341 42.113,0 0,42.113 -42.113,0 0,-42.113 z"
         id="path3566-5" />
    </clipPath>
    
    <clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath3420-3">
      <path
         d="m 305.125,409.34 42.114,0 0,42.114 -42.114,0 0,-42.114 z"
         id="path3422-1" />
    </clipPath>
    
    <clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath3822-3">
      <path
         d="m 362.126,409.341 42.114,0 0,42.114 -42.114,0 0,-42.114 z"
         id="path3824-3" />
    </clipPath>
    
    
    <clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath3954">
      <path
         d="m 77.054,142.502 42.114,0 0,42.115 -42.114,0 0,-42.115 z"
         id="path3956" />
    </clipPath>
    
    <clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath3028">
      <path
         d="m 191.406,726.418 42.185,0 0,42.186 -42.185,0 0,-42.186 z"
         id="path3030" />
    </clipPath>
    
    <clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath2908">
      <path
         d="m 305.624,726.418 42.185,0 0,42.186 -42.185,0 0,-42.186 z"
         id="path2910" />
    </clipPath>
    
    <clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath3328">
      <path
         d="m 419.845,726.418 42.185,0 0,42.186 -42.185,0 0,-42.186 z"
         id="path3330" />
    </clipPath>
    
    <clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath2856">
      <path
         d="m 476.952,726.418 42.185,0 0,42.186 -42.185,0 0,-42.186 z"
         id="path2858" />
    </clipPath>
    
    <clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath3268">
      <path
         d="m 77.184,664.161 42.185,0 0,42.185 -42.185,0 0,-42.185 z"
         id="path3270" />
    </clipPath>
  </defs>
  
  
  <g
     id="layer1"
     transform="translate(-1020.4051,-338.51353)">
    <g
       transform="translate(-501.54702,586.32528)"
       id="layer1-0" />
    <path
       id="path3274"
       d="m 1220.548,339.16353 c 109.8867,0 199.4929,89.59672 199.4929,199.49292 0,109.89621 -89.6062,199.49293 -199.4929,199.49293 -109.8962,0 -199.4929,-89.59672 -199.4929,-199.49293 0,-109.8962 89.5967,-199.49292 199.4929,-199.49292" />
    <path
       id="path3278"
       d="m 1220.548,339.16353 c 109.8867,0 199.4929,89.59672 199.4929,199.49292 0,109.89621 -89.6062,199.49293 -199.4929,199.49293 -109.8962,0 -199.4929,-89.59672 -199.4929,-199.49293 0,-109.8962 89.5967,-199.49292 199.4929,-199.49292 z" />
    <path
       id="path3282"
       d="m 1220.548,477.11932 -90.28,89.94786 33.8135,22.9852 c 0.3321,0 0.3321,0 0.6738,0.33215 1.6892,1.69874 1.6892,4.0618 0,5.76054 -0.6738,0.6738 -1.3571,1.01545 -2.0214,1.01545 l -92.9942,14.8711 c -1.3476,0 -2.7047,-0.34165 -3.3785,-1.3571 -1.0155,-0.6738 -1.3476,-2.0214 -1.3476,-3.36901 l 14.8711,-92.65256 c 0,-0.6738 0.3416,-1.35709 1.0154,-2.03089 1.6987,-1.68925 4.394,-1.68925 5.7511,0 0.3321,0.34164 0.3321,0.34164 0.6738,0.6738 l 22.653,33.48133 110.57,-110.57001 110.57,110.57001 22.653,-33.48133 c 0.3322,-0.33216 0.3322,-0.33216 0.6738,-0.6738 1.3571,-1.68925 4.0524,-1.68925 5.4189,0 0.6644,0.6738 1.006,1.35709 1.3476,2.03089 l 14.539,92.65256 c 0.3321,1.34761 0,2.69521 -1.0155,3.36901 -0.6738,1.01545 -2.0309,1.3571 -3.388,1.3571 l -92.9847,-14.8711 c -0.6643,0 -1.3476,-0.34165 -2.0309,-1.01545 -1.6797,-1.69874 -1.6797,-4.0618 0,-5.76054 0,-0.33215 0.3512,-0.33215 0.6833,-0.33215 l 33.8135,-22.9852 -90.28,-89.94786 z m 188.0003,61.54377 c 0,-103.47135 -84.5289,-188.00032 -188.0003,-188.00032 -103.4714,0 -188.0003,84.52897 -188.0003,188.00032 0,103.47136 84.5289,188.00033 188.0003,188.00033 103.4714,0 188.0003,-84.52897 188.0003,-188.00033" />
  </g>
  </Svg>
);

D16.displayName = 'D16';
