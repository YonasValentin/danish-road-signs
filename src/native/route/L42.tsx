import React from 'react';
import Svg, { SvgProps } from 'react-native-svg';

export interface L42Props extends Omit<SvgProps, 'viewBox'> {
  width?: number | string;
  height?: number | string;
}

export const L42: React.FC<L42Props> = ({
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


	
		 
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
	
<clipPath
   clipPathUnits="userSpaceOnUse"
   id="clipPath10921">
  <path
     d="m 134.558,443.431 99.48,0 0,64.647 -99.48,0 0,-64.647 z"
     id="path10923" />
</clipPath>
<clipPath
   clipPathUnits="userSpaceOnUse"
   id="clipPath10905">
  <path
     d="m 134.558,443.596 99.48,0 0,64.316 -99.48,0 0,-64.316 z"
     id="path10907" />
</clipPath>


<clipPath
   clipPathUnits="userSpaceOnUse"
   id="clipPath4202-20">
  <path
     d="m 20.045,731.714 42.114,0 0,37.012 -42.114,0 0,-37.012 z"
     id="path4204-1" />
</clipPath>


<clipPath
   clipPathUnits="userSpaceOnUse"
   id="clipPath2840-61">
  <path
     d="m 77.057,731.714 42.114,0 0,37.012 -42.114,0 0,-37.012 z"
     id="path2842-8" />
</clipPath>

<clipPath
   clipPathUnits="userSpaceOnUse"
   id="clipPath3036-84">
  <path
     d="m 134.072,731.751 42.114,0 0,36.975 -42.114,0 0,-36.975 z"
     id="path3038-1" />
</clipPath>

<clipPath
   clipPathUnits="userSpaceOnUse"
   id="clipPath2952-3">
  <path
     d="m 191.084,731.751 42.113,0 0,36.975 -42.113,0 0,-36.975 z"
     id="path2954-9" />
</clipPath>
<clipPath
   clipPathUnits="userSpaceOnUse"
   id="clipPath2936-8">
  <path
     d="m 191.084,731.751 42.113,0 0,36.975 -42.113,0 0,-36.975 z"
     id="path2938-8" />
</clipPath>



<clipPath
   clipPathUnits="userSpaceOnUse"
   id="clipPath3216-7">
  <path
     d="m 248.098,731.74 42.114,0 0,36.986 -42.114,0 0,-36.986 z"
     id="path3218-83" />
</clipPath>

<clipPath
   clipPathUnits="userSpaceOnUse"
   id="clipPath2880-3">
  <path
     d="m 305.111,731.751 42.114,0 0,36.975 -42.114,0 0,-36.975 z"
     id="path2882-7" />
</clipPath>

<clipPath
   clipPathUnits="userSpaceOnUse"
   id="clipPath3316-7">
  <path
     d="m 77.057,409.341 42.114,0 0,42.114 -42.114,0 0,-42.114 z"
     id="path3318-3" />
</clipPath>

<clipPath
   clipPathUnits="userSpaceOnUse"
   id="clipPath3802-96">
  <path
     d="m 134.072,409.341 42.114,0 0,56.174 -42.114,0 0,-56.174 z"
     id="path3804-5" />
</clipPath>

<clipPath
   clipPathUnits="userSpaceOnUse"
   id="clipPath3564-09">
  <path
     d="m 191.084,409.341 42.113,0 0,42.113 -42.113,0 0,-42.113 z"
     id="path3566-9" />
</clipPath>



<clipPath
   clipPathUnits="userSpaceOnUse"
   id="clipPath4202-3">
  <path
     d="m 20.045,731.714 42.114,0 0,37.012 -42.114,0 0,-37.012 z"
     id="path4204-3" />
</clipPath>


<clipPath
   clipPathUnits="userSpaceOnUse"
   id="clipPath2840-4">
  <path
     d="m 77.057,731.714 42.114,0 0,37.012 -42.114,0 0,-37.012 z"
     id="path2842-3" />
</clipPath>

<clipPath
   clipPathUnits="userSpaceOnUse"
   id="clipPath3036-0">
  <path
     d="m 134.072,731.751 42.114,0 0,36.975 -42.114,0 0,-36.975 z"
     id="path3038-8" />
</clipPath>

<clipPath
   clipPathUnits="userSpaceOnUse"
   id="clipPath2952-0">
  <path
     d="m 191.084,731.751 42.113,0 0,36.975 -42.113,0 0,-36.975 z"
     id="path2954-68" />
</clipPath>
<clipPath
   clipPathUnits="userSpaceOnUse"
   id="clipPath2936-19">
  <path
     d="m 191.084,731.751 42.113,0 0,36.975 -42.113,0 0,-36.975 z"
     id="path2938-89" />
</clipPath>



<clipPath
   clipPathUnits="userSpaceOnUse"
   id="clipPath3216-28">
  <path
     d="m 248.098,731.74 42.114,0 0,36.986 -42.114,0 0,-36.986 z"
     id="path3218-9" />
</clipPath>

<clipPath
   clipPathUnits="userSpaceOnUse"
   id="clipPath2880-78">
  <path
     d="m 305.111,731.751 42.114,0 0,36.975 -42.114,0 0,-36.975 z"
     id="path2882-1" />
</clipPath>

<clipPath
   clipPathUnits="userSpaceOnUse"
   id="clipPath3316-86">
  <path
     d="m 77.057,409.341 42.114,0 0,42.114 -42.114,0 0,-42.114 z"
     id="path3318-12" />
</clipPath>

<clipPath
   clipPathUnits="userSpaceOnUse"
   id="clipPath3802-58">
  <path
     d="m 134.072,409.341 42.114,0 0,56.174 -42.114,0 0,-56.174 z"
     id="path3804-6" />
</clipPath>

<clipPath
   clipPathUnits="userSpaceOnUse"
   id="clipPath3564-6">
  <path
     d="m 191.084,409.341 42.113,0 0,42.113 -42.113,0 0,-42.113 z"
     id="path3566-53" />
</clipPath>

<clipPath
   clipPathUnits="userSpaceOnUse"
   id="clipPath3420-24">
  <path
     d="m 305.125,409.34 42.114,0 0,42.114 -42.114,0 0,-42.114 z"
     id="path3422-6" />
</clipPath>

<clipPath
   clipPathUnits="userSpaceOnUse"
   id="clipPath9761">
  <path
     d="m 363.396,584.356 99.531,0 0,60.865 -99.531,0 0,-60.865 z"
     id="path9763" />
</clipPath>

<clipPath
   clipPathUnits="userSpaceOnUse"
   id="clipPath10659">
  <path
     d="m 363.548,684.003 99.472,0 0,83.556 -99.472,0 0,-83.556 z"
     id="path10661" />
</clipPath>

<clipPath
   clipPathUnits="userSpaceOnUse"
   id="clipPath10477">
  <path
     d="m 20.132,684.003 99.477,0 0,14.814 -99.477,0 0,-14.814 z"
     id="path10479" />
</clipPath>
<clipPath
   clipPathUnits="userSpaceOnUse"
   id="clipPath10465">
  <path
     d="m 20.132,684.003 99.41,0 0,13.182 -99.41,0 0,-13.182 z"
     id="path10467" />
</clipPath>
<clipPath
   clipPathUnits="userSpaceOnUse"
   id="clipPath10453">
  <path
     d="m 20.132,684.003 99.477,0 0,14.814 -99.477,0 0,-14.814 z"
     id="path10455" />
</clipPath>

<clipPath
   clipPathUnits="userSpaceOnUse"
   id="clipPath9323">
  <path
     d="m 134.188,733.508 99.961,0 0,23.658 -99.961,0 0,-23.658 z"
     id="path9325" />
</clipPath>

<clipPath
   clipPathUnits="userSpaceOnUse"
   id="clipPath11543">
  <path
     d="m 20.126,732.845 99.531,0 0,11.952 -99.531,0 0,-11.952 z"
     id="path11545" />
</clipPath>

<clipPath
   clipPathUnits="userSpaceOnUse"
   id="clipPath10889">
  <path
     d="m 20.139,584.548 99.53,0 0,57.701 -99.53,0 0,-57.701 z"
     id="path10891" />
</clipPath>

<clipPath
   clipPathUnits="userSpaceOnUse"
   id="clipPath7601">
  <path
     d="m 249.157,346.22 99.483,0 0,68.707 -99.483,0 0,-68.707 z"
     id="path7603" />
</clipPath>

<clipPath
   clipPathUnits="userSpaceOnUse"
   id="clipPath9657">
  <path
     d="m 420.851,517.626 61.589,0 0,17.359 -61.589,0 0,-17.359 z"
     id="path9659" />
</clipPath>
<clipPath
   clipPathUnits="userSpaceOnUse"
   id="clipPath9635">
  <path
     d="m 426.875,520.672 9.844,0 0,9.649 -9.844,0 0,-9.649 z"
     id="path9637" />
</clipPath>
<clipPath
   clipPathUnits="userSpaceOnUse"
   id="clipPath9623">
  <path
     d="m 420.851,517.626 61.589,0 0,17.359 -61.589,0 0,-17.359 z"
     id="path9625" />
</clipPath>
<clipPath
   clipPathUnits="userSpaceOnUse"
   id="clipPath9563">
  <path
     d="m 420.851,517.626 61.589,0 0,16.333 -61.589,0 0,-16.333 z"
     id="path9565" />
</clipPath>
<clipPath
   clipPathUnits="userSpaceOnUse"
   id="clipPath9507">
  <path
     d="m 420.851,517.626 61.589,0 0,17.359 -61.589,0 0,-17.359 z"
     id="path9509" />
</clipPath>

<clipPath
   clipPathUnits="userSpaceOnUse"
   id="clipPath11107">
  <path
     d="m 420.851,480.747 61.59,0 0,16.753 -61.59,0 0,-16.753 z"
     id="path11109" />
</clipPath>
<clipPath
   clipPathUnits="userSpaceOnUse"
   id="clipPath11095">
  <path
     d="m 420.851,480.747 61.59,0 0,15.425 -61.59,0 0,-15.425 z"
     id="path11097" />
</clipPath>
<clipPath
   clipPathUnits="userSpaceOnUse"
   id="clipPath11083">
  <path
     d="m 420.851,480.747 61.59,0 0,16.753 -61.59,0 0,-16.753 z"
     id="path11085" />
</clipPath>

<clipPath
   clipPathUnits="userSpaceOnUse"
   id="clipPath8317">
  <path
     d="m 478.656,440.72 99.475,0 0,66.843 -99.475,0 0,-66.843 z"
     id="path8319" />
</clipPath>
<clipPath
   clipPathUnits="userSpaceOnUse"
   id="clipPath8305">
  <path
     d="m 494.971,440.72 66.844,0 0,66.843 -66.844,0 0,-66.843 z"
     id="path8307" />
</clipPath>
<clipPath
   clipPathUnits="userSpaceOnUse"
   id="clipPath8289">
  <path
     d="m 478.656,440.72 99.475,0 0,66.843 -99.475,0 0,-66.843 z"
     id="path8291" />
</clipPath>

<clipPath
   clipPathUnits="userSpaceOnUse"
   id="clipPath22470">
  <path
     d="m 19.865,721.147 41.666,0 0,41.667 -41.666,0 0,-41.667 z"
     id="path22472" />
</clipPath>

<clipPath
   clipPathUnits="userSpaceOnUse"
   id="clipPath22936">
  <path
     d="m 132.787,721.147 41.666,0 0,41.667 -41.666,0 0,-41.667 z"
     id="path22938" />
</clipPath>

<clipPath
   clipPathUnits="userSpaceOnUse"
   id="clipPath22668">
  <path
     d="m 358.582,721.147 98.078,0 0,20.204 -98.078,0 0,-20.204 z"
     id="path22670" />
</clipPath>

<clipPath
   clipPathUnits="userSpaceOnUse"
   id="clipPath21708">
  <path
     d="m 20.041,623.901 98.074,0 0,25.961 -98.074,0 0,-25.961 z"
     id="path21710" />
</clipPath>

<clipPath
   clipPathUnits="userSpaceOnUse"
   id="clipPath21866">
  <path
     d="m 246.156,623.897 98.072,0 0,52.834 -98.072,0 0,-52.834 z"
     id="path21868" />
</clipPath>
<clipPath
   clipPathUnits="userSpaceOnUse"
   id="clipPath21854">
  <path
     d="m 246.156,623.922 98.072,0 0,52.808 -98.072,0 0,-52.808 z"
     id="path21856" />
</clipPath>
<clipPath
   clipPathUnits="userSpaceOnUse"
   id="clipPath21838">
  <path
     d="m 246.156,623.897 98.072,0 0,52.834 -98.072,0 0,-52.834 z"
     id="path21840" />
</clipPath>

<clipPath
   clipPathUnits="userSpaceOnUse"
   id="clipPath21588">
  <path
     d="m 359.037,623.897 98.093,0 0,77.119 -98.093,0 0,-77.119 z"
     id="path21590" />
</clipPath>
<clipPath
   clipPathUnits="userSpaceOnUse"
   id="clipPath21576">
  <path
     d="m 359.037,623.93 98.093,0 0,77.086 -98.093,0 0,-77.086 z"
     id="path21578" />
</clipPath>
<clipPath
   clipPathUnits="userSpaceOnUse"
   id="clipPath21560">
  <path
     d="m 359.037,623.897 98.093,0 0,77.119 -98.093,0 0,-77.119 z"
     id="path21562" />
</clipPath>

<clipPath
   clipPathUnits="userSpaceOnUse"
   id="clipPath20974">
  <path
     d="m 358.292,539.5 41.888,0 0,19.111 -41.888,0 0,-19.111 z"
     id="path20976" />
</clipPath>
<clipPath
   clipPathUnits="userSpaceOnUse"
   id="clipPath20946">
  <path
     d="m 358.288,539.5 41.891,0 0,19.111 -41.891,0 0,-19.111 z"
     id="path20948" />
</clipPath>



</defs>
  
  
  <g
     id="layer1"
     transform="translate(-853.93726,-250.79938)"><g
   transform="translate(-501.54702,586.32528)"
   id="layer1-0" />
<g
   transform="translate(1020.1781,-23.824068)"
   id="layer1-09">
  <g
     transform="translate(-501.547,586.325)"
     id="layer1-0-9" />
</g>

	
	
<g
   transform="translate(435.43861,855.95538)"
   id="layer1-3">
  <g
     transform="translate(-501.547,586.325)"
     id="layer1-0-4" />
</g>
<g
   transform="translate(525.54069,1094.4912)"
   id="layer1-2">
  <g
     transform="translate(-501.547,586.325)"
     id="layer1-0-1" />
</g>
<g
   id="g19110"
   transform="matrix(2.4936232,0,0,-2.4936232,860.42317,364.49288)">
  <path
     d="m 0,0 36.515,0 0,-0.05 0.5,0.05 0.451,0.15 0.449,0.25 0.401,0.301 0.299,0.4 0.251,0.449 0.151,0.451 0.049,0.5 0,13.756 -0.049,0.5 -0.151,0.45 -0.251,0.45 -0.299,0.401 -0.401,0.299 -0.449,0.251 -0.451,0.15 -0.5,0.05 -36.565,0 -0.5,-0.05 -0.45,-0.15 -0.45,-0.251 -0.401,-0.299 -0.299,-0.401 -0.251,-0.45 -0.15,-0.45 -0.05,-0.5 0.05,0 0,-13.756 -0.05,0 0.05,-0.5 0.15,-0.451 0.251,-0.449 0.299,-0.4 L -1.45,0.4 -1,0.15 -0.55,0 l 0.5,-0.05"
     id="path19112" />
</g>
<g
   id="g19114"
   transform="matrix(2.4936232,0,0,-2.4936232,860.42317,360.8754)">
  <path
     d="m 0,0 36.515,0 0,-0.05 0.2,0.05 0.2,0.049 0.2,0.101 0.15,0.15 0.151,0.15 0.1,0.2 0.099,0.4 0,13.756 -0.099,0.4 -0.1,0.2 -0.151,0.15 -0.15,0.151 -0.2,0.1 -0.2,0.049 -0.2,0.051 -36.565,0 -0.2,-0.051 -0.2,-0.049 -0.2,-0.1 -0.15,-0.151 -0.151,-0.15 -0.099,-0.2 -0.1,-0.4 0.05,0 0,-13.756 -0.05,0 0.1,-0.4 0.099,-0.2 L -0.8,0.3 -0.65,0.15 -0.45,0.049 -0.25,0 l 0.2,-0.05"
     id="path19116" />
</g>
<g
   id="g19118"
   transform="matrix(2.4936232,0,0,-2.4936232,909.44541,344.16187)">
  <path
     d="m 0,0 -0.251,-0.35 -0.25,-0.25 -0.45,-0.45 -0.45,-0.3 -0.4,-0.201 -0.45,-0.2 -0.451,-0.15 -0.4,-0.1 -0.451,-0.1 -0.399,0 0.6,-1.851 0.65,0.101 0.451,0.149 0.45,0.1 0.4,0.201 0.45,0.2 0.45,0.25 0.4,0.25 0.45,0.35 0.401,0.4 L 1.2,-1.5 1.5,-1.05 1.75,-0.6 2,-0.2 2.15,0.25 2.3,0.65 2.4,1.1 2.501,1.55 2.55,2.051 2.6,2.652 2.55,3.002 2.501,3.552 2.451,3.851 2.3,4.302 2.15,4.802 1.9,5.252 1.65,5.602 1.2,6.153 l -0.45,0.25 -0.401,0.25 -0.45,0.15 -0.4,0.1 -0.45,0.05 -0.85,0 -0.45,-0.05 -0.451,-0.1 -0.4,-0.15 -0.451,-0.2 -0.399,-0.3 -0.301,-0.2 -0.249,-0.301 -0.25,-0.35 -0.151,-0.3 -0.2,-0.45 -0.15,-0.5 -0.1,-0.35 0,-0.901 0.1,-0.399 0.05,-0.401 0.201,-0.451 0.25,-0.45 0.35,-0.45 0.45,-0.4 0.399,-0.25 0.451,-0.2 0.4,-0.15 0.451,-0.05 0.45,-0.05 0.4,0.05 0.45,0.05 0.45,0.15 L 0,0 z m 0,1.951 -0.251,-0.25 -0.25,-0.151 -0.3,-0.099 -0.25,-0.05 -0.25,-0.05 -0.25,0 -0.25,0.05 -0.3,0.05 -0.251,0.099 -0.25,0.201 -0.25,0.2 -0.2,0.25 -0.151,0.451 -0.099,0.149 -0.05,0.201 0,0.599 0.05,0.201 0.099,0.3 0.151,0.3 0.2,0.2 0.25,0.25 0.25,0.15 0.251,0.1 0.3,0.1 0.25,0.05 0.25,0 0.25,-0.05 0.25,-0.049 0.3,-0.1 0.25,-0.201 0.251,-0.2 0.25,-0.35 0.199,-0.4 0.05,-0.35 0,-0.501 L 0.449,2.652 0.25,2.301 0,1.951 z"
     id="path19120" />
</g>
<g
   id="g19122"
   transform="matrix(2.4936232,0,0,-2.4936232,860.42317,297.69994)">
  <path
     d="m 0,0 36.515,0 0,-0.05 0.5,0.05 0.451,0.149 0.449,0.251 0.401,0.3 0.299,0.4 0.251,0.45 0.151,0.451 0.049,0.5 0,13.756 -0.049,0.5 -0.151,0.45 -0.251,0.449 -0.299,0.401 -0.401,0.3 -0.449,0.25 -0.451,0.151 -0.5,0.05 -36.565,0 -0.5,-0.05 -0.45,-0.151 -0.45,-0.25 -0.401,-0.3 -0.299,-0.401 -0.251,-0.449 -0.15,-0.45 -0.05,-0.5 0.05,0 0,-13.756 -0.05,0 0.05,-0.5 L -2.401,1.55 -2.15,1.1 -1.851,0.7 -1.45,0.4 -1,0.149 -0.55,0 l 0.5,-0.05"
     id="path19124" />
</g>
<g
   id="g19126"
   transform="matrix(2.4936232,0,0,-2.4936232,860.42317,294.20937)">
  <path
     d="m 0,0 36.515,0 0.2,0.05 0.2,0.05 0.2,0.1 0.15,0.151 0.151,0.15 0.1,0.2 0.099,0.4 0,13.756 -0.099,0.4 -0.1,0.2 -0.151,0.15 -0.15,0.15 -0.2,0.1 -0.2,0.05 -0.2,0.05 -36.565,0 -0.2,-0.05 -0.2,-0.05 -0.2,-0.1 -0.15,-0.15 -0.151,-0.15 -0.099,-0.2 -0.1,-0.4 0.05,0 0,-13.756 -0.05,0 0.1,-0.4 0.099,-0.2 L -0.8,0.351 -0.65,0.2 -0.45,0.1 -0.25,0.05 -0.05,0"
     id="path19128" />
</g>
<path
   d="m 854.06104,279.74037 3.61574,0 0,-10.85225 -3.61574,0 0,10.85225 z"
   id="path19130" />
<path
   d="m 954.22245,279.74037 3.6182,0 0,-10.85225 -3.6182,0 0,10.85225 z"
   id="path19132" />
<path
   d="m 872.0225,297.69945 12.84735,0 0,-3.49107 -12.84735,0 0,3.49107 z"
   id="path19134" />
<path
   d="m 899.58961,297.69945 12.72246,0 0,-3.49107 -12.72246,0 0,3.49107 z"
   id="path19136" />
<path
   d="m 926.90715,297.69945 12.84974,0 0,-3.49107 -12.84974,0 0,3.49107 z"
   id="path19138" />
<path
   d="m 872.0225,254.41763 12.84735,0 0,-3.61825 -12.84735,0 0,3.61825 z"
   id="path19140" />
<path
   d="m 899.58961,254.41763 12.72246,0 0,-3.61825 -12.72246,0 0,3.61825 z"
   id="path19142" />
<path
   d="m 926.90715,254.41763 12.84974,0 0,-3.61825 -12.84974,0 0,3.61825 z"
   id="path19144" />
<g
   id="g19146"
   transform="matrix(2.4936232,0,0,-2.4936232,888.48899,287.09856)">
  <path
     d="m 0,0 7.253,0 0,1.9 -4.352,0 0.6,0.501 0.45,0.35 0.402,0.35 0.349,0.351 0.55,0.45 0.3,0.299 0.4,0.401 0.3,0.35 0.301,0.3 0.25,0.451 0.149,0.349 0.1,0.2 0.101,0.401 0.05,0.4 0.05,0.3 -0.05,0.4 -0.05,0.451 -0.201,0.449 -0.35,0.551 -0.35,0.4 -0.3,0.25 -0.4,0.2 -0.3,0.2 -0.35,0.1 -0.351,0.1 -0.35,0.05 -1.4,0 -0.35,-0.1 -0.299,-0.1 -0.351,-0.2 L 1.45,9.904 1.1,9.654 0.85,9.454 0.601,9.154 0.3,8.803 0.05,8.453 l -0.201,-0.35 1.851,-1 0.101,0.25 0.05,0.15 0.301,0.4 0.499,0.5 0.25,0.15 0.25,0.1 0.251,0.051 0.549,0 0.25,-0.101 0.35,-0.15 0.251,-0.199 0.15,-0.201 0.15,-0.3 0.1,-0.4 0,-0.1 -0.05,-0.2 L 5.102,6.803 4.952,6.553 4.802,6.252 4.652,6.052 4.353,5.753 4.201,5.552 3.851,5.202 3.501,4.902 3.201,4.602 0,1.951 0,0 z"
     id="path19148" />
</g>
<g
   id="g19150"
   transform="matrix(2.4936232,0,0,-2.4936232,917.67556,287.09856)">
  <path
     d="m 0,0 2.002,0 0,10.304 -1.952,0 -0.05,-0.3 -0.1,-0.3 -0.25,-0.2 -0.35,-0.15 -0.45,-0.05 -0.6,0 0,-1.651 1.75,0 L 0,0 z"
     id="path19152" />
</g>
</g>
  </Svg>
);

L42.displayName = 'L42';
