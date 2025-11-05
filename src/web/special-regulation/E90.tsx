import React from 'react';

export interface E90Props extends React.SVGProps<SVGSVGElement> {
  width?: number | string;
  height?: number | string;
}

export const E90: React.FC<E90Props> = ({
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
    
    <clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath3188">
      <path
         d="m 191.402,664.161 42.185,0 0,42.185 -42.185,0 0,-42.185 z"
         id="path3190" />
    </clipPath>
    
    <clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath3008">
      <path
         d="m 248.509,664.161 42.185,0 0,42.185 -42.185,0 0,-42.185 z"
         id="path3010" />
    </clipPath>
    
    <clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath3308">
      <path
         d="m 305.658,664.161 42.185,0 0,42.185 -42.185,0 0,-42.185 z"
         id="path3310" />
    </clipPath>
    
    <clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath2948">
      <path
         d="m 362.788,664.161 42.185,0 0,42.185 -42.185,0 0,-42.185 z"
         id="path2950" />
    </clipPath>
    
    <clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath2948-0">
      <path
         d="m 362.788,664.161 42.185,0 0,42.185 -42.185,0 0,-42.185 z"
         id="path2950-2" />
    </clipPath>
    
    <clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath3208">
      <path
         d="m 419.863,664.161 42.185,0 0,42.185 -42.185,0 0,-42.185 z"
         id="path3210" />
    </clipPath>
    
    <clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath3108">
      <path
         d="m 476.952,664.161 42.185,0 0,42.185 -42.185,0 0,-42.185 z"
         id="path3110" />
    </clipPath>
    
    <clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath3048">
      <path
         d="m 534.061,664.161 42.185,0 0,42.185 -42.185,0 0,-42.185 z"
         id="path3050" />
    </clipPath>
    
    <clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath3248">
      <path
         d="m 20.078,601.897 42.185,0 0,42.186 -42.185,0 0,-42.186 z"
         id="path3250" />
    </clipPath>
    
    <clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath2928">
      <path
         d="m 77.188,601.897 42.185,0 0,42.186 -42.185,0 0,-42.186 z"
         id="path2930" />
    </clipPath>
    
    <clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath3168">
      <path
         d="m 134.299,601.897 42.185,0 0,42.186 -42.185,0 0,-42.186 z"
         id="path3170" />
    </clipPath>
    
    <clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath3348">
      <path
         d="m 191.416,601.897 42.185,0 0,42.185 -42.185,0 0,-42.185 z"
         id="path3350" />
    </clipPath>
    
    <clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath2876">
      <path
         d="m 248.528,601.897 42.185,0 0,42.185 -42.185,0 0,-42.185 z"
         id="path2878" />
    </clipPath>
    
    
    <clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath4202-0">
      <path
         d="m 20.045,731.714 42.114,0 0,37.012 -42.114,0 0,-37.012 z"
         id="path4204-9" />
    </clipPath>
    
    
    <clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath2840-6">
      <path
         d="m 77.057,731.714 42.114,0 0,37.012 -42.114,0 0,-37.012 z"
         id="path2842-1" />
    </clipPath>
    
    <clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath3036-8">
      <path
         d="m 134.072,731.751 42.114,0 0,36.975 -42.114,0 0,-36.975 z"
         id="path3038-9" />
    </clipPath>
    
    <clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath2952-4">
      <path
         d="m 191.084,731.751 42.113,0 0,36.975 -42.113,0 0,-36.975 z"
         id="path2954-4" />
    </clipPath>
    <clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath2936-6">
      <path
         d="m 191.084,731.751 42.113,0 0,36.975 -42.113,0 0,-36.975 z"
         id="path2938-0" />
    </clipPath>
    
    
    
    <clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath3216-8">
      <path
         d="m 248.098,731.74 42.114,0 0,36.986 -42.114,0 0,-36.986 z"
         id="path3218-4" />
    </clipPath>
    
    <clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath2880-6">
      <path
         d="m 305.111,731.751 42.114,0 0,36.975 -42.114,0 0,-36.975 z"
         id="path2882-3" />
    </clipPath>
    
    <clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath3316-82">
      <path
         d="m 77.057,409.341 42.114,0 0,42.114 -42.114,0 0,-42.114 z"
         id="path3318-91" />
    </clipPath>
    
    <clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath3802-5">
      <path
         d="m 134.072,409.341 42.114,0 0,56.174 -42.114,0 0,-56.174 z"
         id="path3804-98" />
    </clipPath>
    
    <clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath3564-0">
      <path
         d="m 191.084,409.341 42.113,0 0,42.113 -42.113,0 0,-42.113 z"
         id="path3566-7" />
    </clipPath>
    
    <clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath3420-36">
      <path
         d="m 305.125,409.34 42.114,0 0,42.114 -42.114,0 0,-42.114 z"
         id="path3422-15" />
    </clipPath>
    
    <clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath3822-2">
      <path
         d="m 362.126,409.341 42.114,0 0,42.114 -42.114,0 0,-42.114 z"
         id="path3824-0" />
    </clipPath>
    
    
    <clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath4098-3">
      <path
         d="m 20.045,328.96 42.113,0 0,42.115 -42.113,0 0,-42.115 z"
         id="path4100-72" />
    </clipPath>
    
    <clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath3336-0">
      <path
         d="m 77.057,328.96 42.114,0 0,42.115 -42.114,0 0,-42.115 z"
         id="path3338-1" />
    </clipPath>
    
    <clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath3692-5">
      <path
         d="m 134.072,328.96 42.114,0 0,42.115 -42.114,0 0,-42.115 z"
         id="path3694-7" />
    </clipPath>
    
    <clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath3584-4">
      <path
         d="m 191.084,328.96 42.113,0 0,42.115 -42.113,0 0,-42.115 z"
         id="path3586-1" />
    </clipPath>
    
    <clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath3990-0">
      <path
         d="m 248.098,328.96 42.114,0 0,42.115 -42.114,0 0,-42.115 z"
         id="path3992-0" />
    </clipPath>
    
    <clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath4006-4">
      <path
         d="m 20.046,204.305 42.114,0 0,42.47 -42.114,0 0,-42.47 z"
         id="path4008-6" />
    </clipPath>
    
    <clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath3464-7">
      <path
         d="m 77.053,204.662 42.113,0 0,42.114 -42.113,0 0,-42.114 z"
         id="path3466-1" />
    </clipPath>
    
    <clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath3866-7">
      <path
         d="m 134.068,204.642 42.114,0 0,42.115 -42.114,0 0,-42.115 z"
         id="path3868-7" />
    </clipPath>
    
    <clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath4178-3">
      <path
         d="m 191.081,204.642 42.114,0 0,42.115 -42.114,0 0,-42.115 z"
         id="path4180-3" />
    </clipPath>
    
    <clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath3400-9">
      <path
         d="m 248.093,204.642 42.114,0 0,42.115 -42.114,0 0,-42.115 z"
         id="path3402-9" />
    </clipPath>
    
    <clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath3778-1">
      <path
         d="m 305.108,204.642 42.114,0 0,42.115 -42.114,0 0,-42.115 z"
         id="path3780-8" />
    </clipPath>
    
    <clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath4062-6">
      <path
         d="m 419.135,204.668 42.113,0 0,42.114 -42.113,0 0,-42.114 z"
         id="path4064-6" />
    </clipPath>
    
    <clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath4138-3">
      <path
         d="m 134.077,142.502 42.114,0 0,42.115 -42.114,0 0,-42.115 z"
         id="path4140-8" />
    </clipPath>
    
    <clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath3548-1">
      <path
         d="m 20.039,142.502 42.114,0 0,42.115 -42.114,0 0,-42.115 z"
         id="path3550-2" />
    </clipPath>
    
    
    <clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath4202-2-9">
      <path
         d="m 20.045,731.714 42.114,0 0,37.012 -42.114,0 0,-37.012 z"
         id="path4204-4-4" />
    </clipPath>
    
    
    <clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath2840-1-3">
      <path
         d="m 77.057,731.714 42.114,0 0,37.012 -42.114,0 0,-37.012 z"
         id="path2842-7-5" />
    </clipPath>
    
    <clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath3036-1-2">
      <path
         d="m 134.072,731.751 42.114,0 0,36.975 -42.114,0 0,-36.975 z"
         id="path3038-5-0" />
    </clipPath>
    
    <clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath2952-7-6">
      <path
         d="m 191.084,731.751 42.113,0 0,36.975 -42.113,0 0,-36.975 z"
         id="path2954-6-4" />
    </clipPath>
    <clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath2936-1-0">
      <path
         d="m 191.084,731.751 42.113,0 0,36.975 -42.113,0 0,-36.975 z"
         id="path2938-4-6" />
    </clipPath>
    
    
    
    <clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath3216-2-8">
      <path
         d="m 248.098,731.74 42.114,0 0,36.986 -42.114,0 0,-36.986 z"
         id="path3218-1-4" />
    </clipPath>
    
    <clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath2880-8-4">
      <path
         d="m 305.111,731.751 42.114,0 0,36.975 -42.114,0 0,-36.975 z"
         id="path2882-5-3" />
    </clipPath>
    
    <clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath3316-6-8">
      <path
         d="m 77.057,409.341 42.114,0 0,42.114 -42.114,0 0,-42.114 z"
         id="path3318-1-8" />
    </clipPath>
    
    <clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath3802-9-8">
      <path
         d="m 134.072,409.341 42.114,0 0,56.174 -42.114,0 0,-56.174 z"
         id="path3804-2-7" />
    </clipPath>
    
    <clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath3564-9-8">
      <path
         d="m 191.084,409.341 42.113,0 0,42.113 -42.113,0 0,-42.113 z"
         id="path3566-5-3" />
    </clipPath>
    
    <clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath3420-3-3">
      <path
         d="m 305.125,409.34 42.114,0 0,42.114 -42.114,0 0,-42.114 z"
         id="path3422-1-7" />
    </clipPath>
    
    <clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath3822-3-0">
      <path
         d="m 362.126,409.341 42.114,0 0,42.114 -42.114,0 0,-42.114 z"
         id="path3824-3-7" />
    </clipPath>
    
    
    <clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath3954-9">
      <path
         d="m 77.054,142.502 42.114,0 0,42.115 -42.114,0 0,-42.115 z"
         id="path3956-6" />
    </clipPath>
    
    <clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath6742">
      <path
         d="m 20.048,400.441 42.109,0 0,42.109 -42.109,0 0,-42.109 z"
         id="path6744" />
    </clipPath>
    
    
    <clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath3400-7">
      <path
         d="m 418.791,262.182 42.11,0 0,42.063 -42.11,0 0,-42.063 z"
         id="path3402-6" />
    </clipPath>
    
    
    <clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath3314">
      <path
         d="m 191.389,180.359 42.11,0 0,61.743 -42.11,0 0,-61.743 z"
         id="path3316" />
    </clipPath>
    
    <clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath6686">
      <path
         d="m 147.731,106.796 69.223,0 0,34.612 -69.223,0 0,-34.612 z"
         id="path6688" />
    </clipPath>
    
    <clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath5134">
      <path
         d="m 247.954,107.605 41.982,0 0,52.513 -41.982,0 0,-52.513 z"
         id="path5136" />
    </clipPath>
    
    <clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath3104">
      <path
         d="m 304.981,107.605 41.981,0 0,52.513 -41.981,0 0,-52.513 z"
         id="path3106" />
    </clipPath>
    
    <clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath4450">
      <path
         d="m 361.991,107.605 41.982,0 0,52.513 -41.982,0 0,-52.513 z"
         id="path4452" />
    </clipPath>
    
    <clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath6224">
      <path
         d="m 419.001,107.605 42.109,0 0,52.673 -42.109,0 0,-52.673 z"
         id="path6226" />
    </clipPath>
    
    <clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath3902">
      <path
         d="m 476.02,107.605 41.981,0 0,52.513 -41.981,0 0,-52.513 z"
         id="path3904" />
    </clipPath>
    
    
    <clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath6376">
      <path
         d="m 248.381,180.342 42.109,0 0,52.673 -42.109,0 0,-52.673 z"
         id="path6378" />
    </clipPath>
    
    <clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath4850">
      <path
         d="m 362.373,180.348 42.109,0 0,52.673 -42.109,0 0,-52.673 z"
         id="path4852" />
    </clipPath>
    
    
    <clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath4806">
      <path
         d="m 304.706,26.003 42.109,0 0,42.108 -42.109,0 0,-42.108 z"
         id="path4808" />
    </clipPath>
  </defs>
  
  
  <g
     id="layer1"
     transform="translate(-418.28945,-330.28805)">
    <g
       transform="translate(-501.54702,586.32528)"
       id="layer1-0" />
    <g
       transform="translate(1020.1781,-23.824068)"
       id="layer1-09">
      <g
         transform="translate(-501.547,586.325)"
         id="layer1-0-9" />
    </g>
    <path
       id="path4812"
       d="m 804.82702,728.51602 c 6.45999,0 11.69041,-5.23987 11.69041,-11.69041 l 0,-374.19713 c 0,-6.45998 -5.23042,-11.69041 -11.69041,-11.69041 l -374.19713,0 c -6.45999,0 -11.69041,5.23043 -11.69041,11.69041 l 0,374.19713 c 0,6.45054 5.23042,11.69041 11.69041,11.69041 l 374.19713,0 z" />
    <path
       id="path4816"
       d="m 804.82697,728.51597 c 6.45998,0 11.69041,-5.23987 11.69041,-11.69042 l 0,-374.19709 c 0,-6.45998 -5.23043,-11.69041 -11.69041,-11.69041 l -374.1971,0 c -6.46,0 -11.69042,5.23043 -11.69042,11.69041 l 0,374.19709 c 0,6.45055 5.23042,11.69042 11.69042,11.69042 l 374.1971,0 z" />
    <path
       id="path4820"
       d="m 800.15086,716.82277 c 2.58208,0 4.67238,-2.09027 4.67238,-4.67238 l 0,-364.8429 c 0,-2.58211 -2.0903,-4.68184 -4.67238,-4.68184 l -364.84291,0 c -2.5821,0 -4.67238,2.09973 -4.67238,4.68184 l 0,364.8429 c 0,2.58211 2.09028,4.67238 4.67238,4.67238 l 364.84291,0 z" />
    <path
       id="path4824"
       d="m 736.48354,599.19324 c -24.14695,39.87602 -67.94815,66.51994 -117.96343,66.51994 -50.06256,0 -93.88269,-26.68175 -118.02016,-66.60507 L 479.077,607.6773 c 28.53556,47.14942 80.31008,78.66435 139.44311,78.66435 59.09521,0 110.84135,-31.47708 139.38638,-78.56976 l -21.42295,-8.57865 z" />
    <path
       id="path4828"
       d="m 693.58276,570.617 c -15.36967,25.37652 -43.24317,42.33518 -75.06075,42.33518 -31.82704,0 -59.68162,-16.94921 -75.06075,-42.31625 l -21.56484,8.33271 c 19.72994,32.72559 55.62403,54.60254 96.62559,54.60254 40.93535,0 76.78215,-21.82021 96.54045,-54.47012 l -21.4797,-8.48406 z" />
    <path
       id="path4832"
       d="m 650.61577,542.15236 c -6.60187,10.8108 -18.50982,18.01799 -32.10135,18.01799 -13.66717,0 -25.62241,-7.29232 -32.20535,-18.19769 l -20.6474,8.05843 c 11.12292,17.44104 30.63531,28.99903 52.85275,28.99903 22.208,0 41.71095,-11.54852 52.83385,-28.96119 l -20.7325,-7.91657 z" />
    <path
       id="path4836"
       d="m 718.38893,402.70641 -13.27939,0 0,-6.05329 c 0,-0.99311 -0.81342,-1.79707 -1.80653,-1.79707 l -30.69205,0 c -0.99311,0 -1.79708,0.80396 -1.79708,1.79707 l 0,6.05329 -10.35678,0 -14.14011,-17.12891 c 0,-0.66208 -1.43765,-1.2012 -2.10919,-1.2012 l -50.91382,0 c -0.66207,0 -2.10919,0.53912 -2.10919,1.2012 l -13.83742,17.12891 -10.79188,0 0,-5.78847 c 0,-0.9931 -0.80395,-1.80651 -1.80652,-1.80651 l -30.67315,0 c -1.00258,0 -1.80651,0.81341 -1.80651,1.80651 l 0,5.78847 -14.11174,0 c -4.1427,0 -7.50985,3.36714 -7.50985,7.50986 l 0,96.92824 c 0,4.15216 3.36715,7.50985 7.50985,7.50985 l 200.23136,0 c 4.14273,0 7.50987,-3.35769 7.50987,-7.50985 l 0,-96.92824 c 0,-4.14272 -3.36714,-7.50986 -7.50987,-7.50986" />
    <path
       id="path4840"
       d="m 618.08787,497.51127 c -22.49174,0 -40.73672,-18.23552 -40.73672,-40.73673 0,-22.49173 18.24498,-40.72726 40.73672,-40.72726 22.49175,0 40.73673,18.23553 40.73673,40.72726 0,22.50121 -18.24498,40.73673 -40.73673,40.73673 m -0.0101,-91.69782 c -28.07211,0 -50.81923,22.74711 -50.81923,50.80976 0,28.06266 22.74712,50.80977 50.81923,50.80977 28.0532,0 50.80032,-22.74711 50.80032,-50.80977 0,-28.06265 -22.74712,-50.80976 -50.80032,-50.80976" />
    <path
       id="path4844"
       d="m 649.3389,456.83507 c 0,17.2897 -14.01714,31.30686 -31.30685,31.30686 -17.28969,0 -31.30682,-14.01716 -31.30682,-31.30686 0,-17.28969 14.01713,-31.29738 31.30682,-31.29738 17.28971,0 31.30685,14.00769 31.30685,31.29738" />
  </g>
  </svg>
);

E90.displayName = 'E90';
