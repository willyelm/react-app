import { type FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
// Not Found Page Component
export const NotFound: FunctionComponent = () => {
  return <>
    {/* React will locate the next <title> and <meta> elements and place them in the <head> */}
    <title> App | Not Found </title>
    <meta name='description' content='Page not found' />

    <header>
      <nav className='flex justify-center items-center p-8'>
        <h1>404</h1>
      </nav>
    </header>

    <main className='flex flex-col items-center max-w-3xs mx-auto my-32 border border-gray-700 p-8 space-y-4'>
      <h1 className='mb-4'>
        Page Not Found 
      </h1>
      <Link to={"/"} className='mt-4 underline border-white'>
        Back to home
      </Link>
    </main>

  </>;
}
