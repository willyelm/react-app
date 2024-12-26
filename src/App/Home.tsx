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
    <meta name='description' content='This is my home page' />
    <h1> Home Page </h1>
    <p> Counter: {count} </p>
    <button onClick={() => update()}>Update</button>
  </>;
}
