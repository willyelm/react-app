import { type FunctionComponent } from 'react';
// Not Found Page Component
export const NotFound: FunctionComponent = () => {
  return <>
    {/* React will locate the next <title> and <meta> elements and place them in the <head> */}
    <title> App | Not Found </title>
    <meta name='description' content='Page not found' />
    <section className='flex flex-col m-auto my-32 border-2 border-white p-8'>
      <h1 className='text-4xl'>404</h1>
      <p className='text-xl'> Page Not Found</p>
    </section>
  </>;
}
