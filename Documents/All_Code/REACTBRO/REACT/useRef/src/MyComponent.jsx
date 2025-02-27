/*
useState() = Re-renders the component when the state value changes.

useRef() = "use Reference" Does not cause re-renders when its value changes.
    When you want a component to "remember" some information,
    but you don't want that information to trigger new renders.

    1. Accessing/Interacting with DOM elements
    2. Handle Focus, Animations, and Transitions
    3. Managing Timers and intervals
*/

import React, {useState, useEffect, useRef} from "react";

function MyComponent(){

  // let [number, setNumber] = useState(0);
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3= useRef(null);

  // console.log(ref);

  useEffect(() => {
    console.log("COMPONENT RENDERED");
    // console.log(inputRef);
  });

  function handleClick1(){
    // setNumber(n => n+1);
    // ref.current = ref.current+1;
    // console.log(ref.current);
    inputRef1.current.focus();
    inputRef1.current.style.backgroundColor = "yellow";
    inputRef2.current.style.backgroundColor = "";
    inputRef3.current.style.backgroundColor = "";
  }
  function handleClick2(){
    inputRef2.current.focus();
    inputRef1.current.style.backgroundColor = "";
    inputRef2.current.style.backgroundColor = "yellow";
    inputRef3.current.style.backgroundColor = "";
  }
  function handleClick3(){
    inputRef3.current.focus();
    inputRef1.current.style.backgroundColor = "";
    inputRef2.current.style.backgroundColor = "";
    inputRef3.current.style.backgroundColor = "yellow";
  }

  return(
    <>
      <button onClick = {handleClick1}>
        Click me 1!
      </button>
      <input ref={inputRef1}/>
      <button onClick = {handleClick2}>
        Click me 2!
      </button>
      <input ref={inputRef2}/>
      <button onClick = {handleClick3}>
        Click me 3!
      </button>
      <input ref={inputRef3}/>
    </>
  )
}
export default MyComponent