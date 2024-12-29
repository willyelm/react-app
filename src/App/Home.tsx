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
    {/* React will locate the next <title> and <meta> elements and place them in the <head> */}
    <title> App | Home </title>
    <meta name='description' content='This is my home page'/>
    <section className='flex flex-col w-96 mx-auto mt-32 border border-gray-600'>
      <h1 className='text-4xl px-8 py-4 border-b border-gray-600'> Home Page </h1>
      <div className='flex items-center justify-center'>
        <div className='flex-auto px-8 py-4'>
          Counter: <span className='text-gray-500'>{count}</span>
        </div>
        <div className='p-4 border-l border-gray-600'>
          <button 
            className='h-full px-4 py-2 bg-white text-black'
            onClick={() => update()}>
              Increase
          </button>
        </div>
      </div>
    </section>
    <footer className='flex items-center justify-center space-x-4 my-8'>
      <span className='italic text-gray-500'>Built with </span>
      <React width={16} height={16}/>
      <ESbuild width={16} height={16}/>
    </footer>
  </>;
}
