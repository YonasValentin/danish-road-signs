import React from 'react';

export interface US6Props extends React.SVGProps<SVGSVGElement> {
  width?: number | string;
  height?: number | string;
}

export const US6: React.FC<US6Props> = ({
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
    <path d="m107.36 0.092072c-66.805 0-106.91 41.166-106.91 101.51l-0.45139 486.85s217.14-0.0914 366.15-0.17833c0-0.11785-8e-3 -0.23342-8e-3 -0.35013 0-70.271 57.557-127.83 127.83-127.83 70.271 0 127.83 57.558 127.83 127.83 0 0.077-7e-3 0.15414-7e-3 0.2312 127.91-0.055 175.2-0.13102 271.3-0.13102 70.585 1.1824 106.91-37.153 106.91-101.51v-384.9c0-61.928-39.601-101.51-106.91-101.51z"/>
 <path d="m594.26 587.92a100.31 100.31 0 0 1-100.31 100.31 100.31 100.31 0 0 1-100.31-100.31 100.31 100.31 0 0 1 100.31-100.31 100.31 100.31 0 0 1 100.31 100.31z"/>
 <rect x="137.99" y="110.58" width="165.61" height="426.27" rx=".26507" ry=".26507" fill="#fff"/>
 <rect x="496.62" y="110.58" width="376.41" height="213.13" rx=".26507" ry=".26507" fill="#fff"/>
  </svg>
);

US6.displayName = 'US6';
