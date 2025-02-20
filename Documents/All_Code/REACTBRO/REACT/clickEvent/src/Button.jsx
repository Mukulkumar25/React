function Button(){

  const handleClick = (e) => e.target.textContent = "OUCH! 😂";
  // const handleClick = (e) => console.log(e)
  // const handleClick2 = (name) => console.log(`${name} stop clicking me!`);
  return(
    // <button onClick={()=>handleClick2("Bro")}>Click Me 😊</button>
    <button onClick={(e) => handleClick(e)}>Click Me 😊</button>
  );
}
export default Button;