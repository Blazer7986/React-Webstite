function List(props) {
  const itemList = props.list;
  const category = props.category;
  // fruits.sort((a, b) => { a.name.localeCompare(b.name); }); //Alphabetically
  // fruits.sort((a, b) => { b.name.localeCompare(a.name); }); //Reverse Alphabetically
  itemList.sort((a, b) => a.calories - b.calories); // Numeric
  // fruits.sort((a, b) => b.calories - a.calories); // Reverse Numeric
  // const lowCalFruits = fruits.filter((fruit) => fruit.calories < 100);
  // const highCalFruits = fruits.filter((fruit) => fruit.calories >= 100);

  const listArray = itemList.map((item) => (
    <li key={item.id}>
      {item.name} : &nbsp; <b>{item.calories} </b>
    </li>
  ));

  return (
    <div className="list">
      <h3 className="list-category">{category}</h3>
      <ol className="list-items">{listArray}</ol>{" "}
    </div>
  );
}

export default List;
