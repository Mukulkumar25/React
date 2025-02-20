/* updater function = A function passed as an argument to setState() usually 
      ex: setYear(year+1) or setYear(updater-function usually an arrow function)
      Allow for safe updates based on the previous state
      Used with multiple state updates and asynchronous functions
      Good practice to use updater functions
 */

// import React, {useState} from "react";

// const MyComponent=()=>{
//   const [count, setCount] = useState(0);

//   const increment = () => {
//     // setCount(count+1);
//     // setCount(count+1);
//     //    updater function(arrow function)
//     setCount(c => c+1);
//     setCount(c => c+1);
//   }
//   const decrement = () => {
//     setCount(count-1);
//   }
//   const reset = () => {
//     setCount(0);
//   }
//   return(
//     <>
//     <p>Count: {count}</p>
//     <button onClick={decrement}>Decrement</button>
//     <button onClick={reset}>Reset</button>
//     <button onClick={increment}>Increment</button>
//     </>
//   )
// }
// export default MyComponent


// UPDATE OBJECT IN STATE
// import React,{useState} from "react";

// const MyComponent=()=>{

//   const [car, setCar] = useState({year:2024,
//                                   make:"Ford",
//                                   model:"Mustang"});

//   function handleYearChange(event){
//     //spread operator is used to retain other properties
//     // setCar({...car, year: event.target.value})
//     setCar(c => ({...c, year: event.target.value}))
//   }
//   function handleMakeChange(event){
//     setCar(c => ({...c, make: event.target.value}))

//   }
//   function handleModelChange(event){
//     setCar(c => ({...c, model: event.target.value}))

//   }
//   return(
//     <>
//       <div>
//         <p>your Favourite car is: {car.year} {car.make} {car.model}</p>
//         <input type="number" value = {car.year} onChange={handleYearChange}/><br/>
//         <input type="text" value = {car.make} onChange={handleMakeChange}/><br/>
//         <input type="text" value = {car.model} onChange={handleModelChange}/><br/>
//       </div>
//     </>
//   )
// }
// export default MyComponent


//UPDATE ARRAY IN STATE
// import React, {useState} from "react";

// const MyComponent=()=>{
//   const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);
//   function handleAddFood(){
//     const newFood = document.getElementById("foodInput").value;
//     document.getElementById("foodInput").value = "";
//     setFoods(f => [...f , newFood]);

//   }
//   function handleRemoveFood(index){
//     setFoods(foods.filter((element, i) => i!=index))
//   }
//   return(
//     <>
//     <div>
//       <h2>List of Food</h2>
//       <ul>
//         {foods.map((food, index) => <li key = {index} onClick={() => handleRemoveFood(index)}>{food}</li>)}
//       </ul>
//       <input type="text" id="foodInput" placeholder="Enter food name" />
//       <button onClick={handleAddFood}>Add Food</button>
//     </div>
//     </>
//   )
// }
// export default MyComponent



// UPDATE ARRAY OF OBJECT IN STATE
import React, {useState} from "react";

const MyComponent=()=>{

  const [cars, setCars] = useState([]);
  const [carYear, setCarYear] = useState(new Date().getFullYear());
  const [carMake, setCarMake] = useState("");
  const [carModel, setCarModel] = useState("");
  

  function handleAddCar(){
    const newCar = {year: carYear,
                    make: carMake,
                    model: carModel,}
    setCars(c =>[...c, newCar]);
    setCarYear(new Date().getFullYear())
    setCarMake("")
    setCarModel("")
  }
  function handleRemoveCar(index){
    const newList = (cars.filter((_, i)=>i!=index))
    setCars(newList);
  }
  function handleYearChange(event){
    setCarYear(event.target.value)
  }
  function handleMakeChange(event){
    setCarMake(event.target.value)
  }
  function handleModelChange(event){
    setCarModel(event.target.value)
  }

  return(
    <div>
      <h2>List of Car Objects</h2>
      <ul>
        {cars.map((car, index) => 
        <li key={index} onClick={() => handleRemoveCar(index)}>{car.year} {car.make} {car.model}</li>)}
      </ul>
      <input type="number" value={carYear} onChange={handleYearChange}/><br/>
      <input type="text" value={carMake} onChange={handleMakeChange} placeholder="Enter Car Make.."/><br/>
      <input type="text" value={carModel} onChange={handleModelChange} placeholder="Enter Car Model.."/><br/>
      <button onClick={handleAddCar}>Add Car</button>
    </div>
  )
}
export default MyComponent