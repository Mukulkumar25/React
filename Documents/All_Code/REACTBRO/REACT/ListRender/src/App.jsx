import List from "./List";

function App(){
  const fruits = [
    {id: 1, name: "Apple", calorie: 325},
    {id: 2, name: "Banana", calorie: 925},
    {id: 3, name: "Orange", calorie: 295},
    {id: 4, name: "Guava", calorie: 425},
    {id: 5, name: "Berry", calorie: 255}
  ]
  const vegetables = [
    {id: 6, name: "Carrot", calorie: 725},
    {id: 7, name: "Brinjal", calorie: 525},
    {id: 8, name: "Potato", calorie: 125},
    {id: 9, name: "Tomato", calorie: 825},
    {id: 10, name: "Chilli", calorie: 655}
  ]
  return(
    <>
    <List items = {fruits} category = "Fruits"/>
    <List items = {vegetables} category = "Vegetables"/>
    </>
  
);
}
export default App;