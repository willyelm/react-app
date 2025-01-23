import { useState, type FunctionComponent } from 'react';
import React from 'public/react.svg';
import ESbuild from 'public/esbuild.svg';
// Home Page Component
export const Home: FunctionComponent = () => {
  const [count, setCount] = useState(0);
  const update = () => {
    setCount((prev) => prev + 1);
  };
  return <>
    {/* React will locate the <title> and <meta> elements and place them in the <head> */}
    <title> App </title>
    <meta name='description' content='This is my home page'/>

    <div className='flex flex-col w-full min-h-screen border-x border-gray-700 divide-y divide-gray-700 max-w-3xl mx-auto'>
      <div className="flex divide-x divide-gray-700 p-8">
        <h1 className='text-4xl'> App </h1>
      </div>
      <div className="flex flex-col divide-gray-700 p-8">
        <h2 className='mb-4'>
          Counter: {count}
        </h2>
        <button className='px-4 py-2 bg-white text-black' onClick={() => update()}>
          Increase
        </button>
      </div>
      <div className="flex-auto flex divide-x divide-gray-700 min-h-16 p-8">
        <footer className='flex items-center space-x-4 px-8 py-4'>
          <span className='italic text-gray-500'>Built with </span>
          <React width={16} height={16}/>
          <ESbuild width={16} height={16}/>
        </footer>
      </div>
    </div>
  </>;
}
