
import {useState} from "react";

function Item({ name, category }) {
  const [addItem, setAddItem] = useState(false);
  
  function addToCartClick() {
    setAddItem((addItem) => !addItem);
    }
  return (
  <li className={addItem ?"in-cart" : ""}>
    <span>{name}</span>
    <span className="category">{category}</span>
    <button className={addItem ? "remove" : "add"} onClick={addToCartClick}>{addItem ? "Remove From Cart" : "add to Cart"}</button>
  </li>
  );
}

export default Item;
