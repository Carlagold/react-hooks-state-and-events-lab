import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectCategory, setSelectCategory] = useState("All");
  
  function handlefilterlist(event) {
    setSelectCategory(event.target.value);
  }
  const displayItems = items.filter((item) => {
    if (selectCategory === "All") return true;
      return item.category === selectCategory;
    
});

 return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handlefilterlist}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {displayItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
