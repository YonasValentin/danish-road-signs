import React from 'react';
import Svg, { SvgProps } from 'react-native-svg';

export interface D21Props extends Omit<SvgProps, 'viewBox'> {
  width?: number | string;
  height?: number | string;
}

export const D21: React.FC<D21Props> = ({
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
    
    <clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath2968">
      <path
         d="m 134.293,664.161 42.185,0 0,42.185 -42.185,0 0,-42.185 z"
         id="path2970" />
    </clipPath>
  </defs>
  
  
  <g
     id="layer1"
     transform="translate(-620.58012,-348.2231)">
    <g
       transform="translate(-501.54702,586.32528)"
       id="layer1-0" />
    <path
       id="path2974"
       d="m 820.76113,348.8731 c -109.91719,0 -199.53101,89.61383 -199.53101,199.53101 0,109.91719 89.61382,199.53102 199.53101,199.53102 109.9077,0 199.53097,-89.61383 199.53097,-199.53102 0,-109.91718 -89.62327,-199.53101 -199.53097,-199.53101" />
    <path
       id="path2978"
       d="m 820.76113,348.8731 c -109.91719,0 -199.53101,89.61383 -199.53101,199.53101 0,109.91718 89.61382,199.53102 199.53101,199.53102 109.90769,0 199.53097,-89.61384 199.53097,-199.53102 0,-109.91718 -89.62328,-199.53101 -199.53097,-199.53101 z" />
    <path
       id="path2982"
       d="m 867.76924,505.11782 -21.98343,72.7086 6.43556,0 c 2.3635,-18.93651 13.18437,-34.49387 28.74173,-43.95738 l -13.19386,-28.75122 z" />
    <path
       id="path2986"
       d="m 855.25596,496.32444 -90.29725,0 -1.01565,3.37914 63.2451,72.3764 c 1.35735,-0.34172 3.04692,-0.67393 4.39479,-0.67393 l 0.67393,0 22.99908,-75.08161 z" />
    <path
       id="path2990"
       d="m 728.77241,564.6392 c 1.01564,-3.37914 8.11564,-25.36258 8.11564,-25.36258 -2.70521,-0.67394 -5.75214,-1.01565 -8.44786,-1.01565 -26.0555,0 -47.35551,20.62609 -47.35551,46.67209 -0.34171,26.03652 20.63557,47.34602 46.67209,47.67824 26.37822,0 47.34602,-20.9583 47.68773,-47.00431 0,-18.26258 -10.14693,-33.81994 -24.68866,-41.59387 0,0 -6.42607,19.95215 -7.1,21.97394 -3.38863,11.16258 -6.43557,18.946 -9.473,23.3408 -2.03129,3.04692 -5.74265,4.06256 -9.13129,2.70521 -4.7365,-2.37299 -4.7365,-7.44172 -3.72086,-9.80522 1.34787,-2.36351 4.39479,-7.77393 7.44172,-17.58865" />
    <path
       id="path2994"
       d="m 919.51005,582.22501 c 0.68342,1.01564 0.68342,2.03128 0.68342,3.03743 0,4.40428 -3.38863,7.78343 -7.4512,7.78343 l -46.6626,0 c 3.72085,22.31566 22.98958,39.5626 46.33038,39.5626 26.03651,0 47.34602,-20.9583 47.67824,-47.00432 0,-26.03651 -20.95831,-47.00431 -46.99482,-47.00431 -4.40428,0 -8.79907,0.34171 -12.86164,1.68958 l 19.27822,41.93559 z" />
    <path
       id="path2998"
       d="m 886.7086,546.37758 c -10.82087,6.76778 -18.5948,17.92087 -20.63558,31.44695 l 35.1773,0 -14.54172,-31.44695 z" />
    <path
       id="path3002"
       d="m 770.37009,447.62486 21.3095,0 c 4.05308,0 7.43222,3.04694 7.43222,7.44172 0,4.05308 -3.37914,7.44171 -7.43222,7.44171 l -13.86779,0 c -0.67393,0 -2.70521,0.34171 -3.38863,3.37915 l -5.06872,15.88958 90.29725,0 3.72085,-11.49479 -7.44171,0 c -4.06257,0 -7.44172,-3.37914 -7.44172,-7.43223 0,-4.40427 3.37915,-7.78342 7.44172,-7.78342 l 30.09909,0 c 4.40427,0 7.77393,3.37915 7.77393,7.78342 0,4.05309 -3.71137,7.43223 -7.77393,7.43223 l -7.44173,0 -4.05307,13.8678 19.95215,43.62515 c 5.74266,-2.02179 12.17822,-3.04692 18.60429,-3.04692 33.47823,0.34171 60.8721,27.40336 60.53039,60.8721 0,33.81994 -27.73558,60.88158 -61.21381,60.88158 -31.11473,-0.34171 -56.47731,-23.673 -60.18867,-53.43038 l -9.14079,0 c -2.3635,3.37915 -6.42607,6.08437 -11.4948,6.08437 -7.78342,0 -13.52607,-6.43557 -13.52607,-13.86779 0,-0.33222 0,-1.01564 0.33222,-1.34786 L 759.20751,516.2804 c 0,0 -2.03128,6.08435 -4.39478,14.54171 20.29386,9.80522 34.49387,30.44079 34.49387,54.77825 -0.34171,33.48772 -27.72609,60.88158 -61.54603,60.53987 -33.48773,0 -60.8816,-27.38437 -60.53989,-61.20431 0.34171,-33.48772 27.73559,-60.53988 61.21382,-60.20766 4.39478,0 8.45736,0.34171 12.17822,1.35735 l 22.31565,-73.05031 c 1.01564,-3.72087 4.06257,-5.41044 7.44172,-5.41044 m 50.39295,288.81263 c 103.81383,0 188.03616,-84.2034 188.03616,-188.03623 0,-103.82333 -84.22233,-188.02672 -188.03616,-188.02672 -103.82334,0 -188.03623,84.20339 -188.03623,188.02672 0,103.83283 84.21289,188.03623 188.03623,188.03623" />
  </g>
  </Svg>
);

D21.displayName = 'D21';
