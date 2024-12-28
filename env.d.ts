declare module '*.{mdx|jpeg|png}' {
  const content: string;
  export default content;
}

declare module '*.svg' {
  import { FunctionComponent, SVGProps } from 'react';
  const svg: FunctionComponent<SVGProps<SVGElement> & { title?: string }>;
  export default svg;
}

declare module '*.module.css' {
  const styleMap: { [key: string]: string };
  export default styleMap;
}