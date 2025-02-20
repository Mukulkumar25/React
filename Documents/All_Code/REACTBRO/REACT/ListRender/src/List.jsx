
function List(props){
  const heading = props.category;
  const itemList = props.items;
  // fruits.sort((a, b) => a.name.localeCompare(b.name));
  // fruits.sort((a, b) => b.name.localeCompare(a.name));
  // fruits.sort((a, b) => a.calorie - b.calorie);
  // const lowCalFruits = fruits.filter(fruit => fruit.calorie < 400);



  const listItem = itemList.map(item => 
    <li key = {item.id}>{item.name}: &nbsp;
    <b>{item.calorie}</b>
    </li>
  );
  return(
    <>
    <h2 className="list-category">{heading}</h2>
    <ol className="list-item">{listItem}</ol>
    </>
);

}
export default List;