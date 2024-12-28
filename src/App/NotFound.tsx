import { type FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
// Not Found Page Component
export const NotFound: FunctionComponent = () => {
  return <>
    {/* React will locate the next <title> and <meta> elements and place them in the <head> */}
    <title> App | Not Found </title>
    <meta name='description' content='Page not found' />
    <section className='flex flex-col w-72 mx-auto mt-32 border-2 border-white p-8'>
      <h1 className='text-4xl'>404</h1>
      <p className='text-xl'> Page Not Found</p>
      <Link to={"/"} className='mt-4 px-4 py-2 border-2 border-white'>
        Back to home
      </Link>
    </section>
  </>;
}
