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

  // SVG element components
  export class Path extends Component<any> {}
  export class G extends Component<any> {}
  export class Rect extends Component<any> {}
  export class Circle extends Component<any> {}
  export class Ellipse extends Component<any> {}
  export class Line extends Component<any> {}
  export class Polyline extends Component<any> {}
  export class Polygon extends Component<any> {}
  export class Text extends Component<any> {}
  export class TSpan extends Component<any> {}
  export class Defs extends Component<any> {}
  export class LinearGradient extends Component<any> {}
  export class RadialGradient extends Component<any> {}
  export class Stop extends Component<any> {}
  export class ClipPath extends Component<any> {}
  export class Mask extends Component<any> {}
  export class Pattern extends Component<any> {}
  export class Image extends Component<any> {}
  export class Use extends Component<any> {}
  export class Symbol extends Component<any> {}
  export class Marker extends Component<any> {}
  export class ForeignObject extends Component<any> {}
}
