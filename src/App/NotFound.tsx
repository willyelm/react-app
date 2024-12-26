import { type FunctionComponent } from 'react';
// Not Found Page Component
export const NotFound: FunctionComponent = () => {
  return <>
    {/* React will locate the next <title> and <meta> elements and place them in the <head> */}
    <title> App | Not Found </title>
    <meta name='description' content='Page not found' />
    <h1>404</h1>
    <p> Page Not Found</p>
  </>;
}
