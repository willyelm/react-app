import { type FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
// Not Found Page Component
export const NotFound: FunctionComponent = () => {
  return <>
    {/* React will locate the next <title> and <meta> elements and place them in the <head> */}
    <title> App | Not Found </title>
    <meta name='description' content='Page not found' />
    <div className='flex flex-col w-full min-h-screen divide-y divide-gray-700'>
      <div className="flex divide-x divide-gray-700">
        <div className='w-32'></div>
        <div className='flex-auto p-8'>
          <h1 className='text-4xl'> 404 </h1>
        </div>
        <div className='w-32'></div>
      </div>
      <div className="flex divide-x divide-gray-700">
        <div className='w-32'></div>
        <div className='flex-auto p-8'>
          <p className='mb-4'>
            Page Not Found 
          </p>
          <Link to={"/"} className='mt-4 underline border-white'>
            Back to home
          </Link>
        </div>
        <div className='w-32'></div>
      </div>
      <div className="flex-auto flex divide-x divide-gray-700 min-h-16">
        <div className='w-32'></div>
        <div className='flex-auto'></div>
        <div className='w-32'></div>
      </div>
    </div>
  </>;
}
