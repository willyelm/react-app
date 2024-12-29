import { type FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
// Not Found Page Component
export const NotFound: FunctionComponent = () => {
  return <>
    {/* React will locate the next <title> and <meta> elements and place them in the <head> */}
    <title> App | Not Found </title>
    <meta name='description' content='Page not found' />
    <section className='flex flex-col w-96 mx-auto mt-32 border border-gray-600'>
      <h1 className='text-4xl px-8 py-4 border-b border-gray-600'>404</h1>
      <div className='px-8 py-4'>
        <p className='text-gray-500 mb-4'> Page Not Found </p>
        <Link to={"/"} className='mt-4 underline border-white'>
          Back to home
        </Link>
      </div>
    </section>
  </>;
}
