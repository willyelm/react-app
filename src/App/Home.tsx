import { useState, type FunctionComponent } from 'react';
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
    <section className='flex flex-col m-auto my-32 border-2 border-white p-8'>
      <h1 className='text-4xl'> Home Page </h1>
      <p className='text-center'> Counter: {count} </p>
      <button 
        className='m-auto mt-4 px-4 py-2 bg-white text-black'
        onClick={() => update()}>
          Update
      </button>
    </section>
  </>;
}
