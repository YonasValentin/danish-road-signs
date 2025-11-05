// Type declarations for react-native-svg peer dependency
// This allows TypeScript to compile without requiring react-native-svg to be installed

declare module 'react-native-svg' {
  import { Component } from 'react';

  export interface SvgProps {
    width?: number | string;
    height?: number | string;
    viewBox?: string;
    fill?: string;
    stroke?: string;
    [key: string]: any;
  }

  export default class Svg extends Component<SvgProps> {}

  // Re-export for convenience
  export { Svg };
}
