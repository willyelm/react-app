declare module '*.{jpeg|png}' {
  const content: string;
  export default content;
}

declare module '*.svg' {
  import { FunctionComponent, SVGProps } from 'react';
  const svg: FunctionComponent<SVGProps<SVGElement> & { title?: string }>;
  export default svg;
}