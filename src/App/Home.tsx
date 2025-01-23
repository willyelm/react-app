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

    <header>
      <nav className='flex justify-center items-center p-8'>
        <h1>App</h1>
      </nav>
    </header>

    <div className='flex flex-col w-full max-w-3xs mx-auto my-32 border border-gray-700'>
      <div className="flex-auto flex flex-col items-center p-8 space-y-4">
        <h1 className='mb-4'>
          Counter
        </h1>
        <p className='text-4xl'>
          {count}
        </p>
        <button className='px-4 py-2 bg-white text-black' onClick={() => update()}>
          Increase
        </button>
      </div>
    </div>

    <footer className='flex justify-center items-center space-x-4 px-8 py-4'>
      <span className='italic text-gray-500'>Built with </span>
      <React width={16} height={16}/>
      <ESbuild width={16} height={16}/>
    </footer>
  </>;
}
