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
    <section className='flex flex-col w-72 mx-auto mt-32 border-2 border-white p-8'>
      <h1 className='text-4xl'> Home Page </h1>
      <p> Counter: {count} </p>
      <button 
        className='mt-4 px-4 py-2 bg-white text-black'
        onClick={() => update()}>
          Update Counter
      </button>
    </section>
    
    <div className='flex items-center justify-center space-x-4 my-8'>
        <React width={32} height={32}/>
        <ESbuild width={32} height={32}/>
    </div>
  </>;
}
