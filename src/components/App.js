import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import React, {useState} from "react";

function App() {
  const [onDarkMode, setOnDarkMode] = useState(false);

  function handleDarkModeClick() {
  setOnDarkMode((onDarkMode) => !onDarkMode);
  
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  }
  const appClass = onDarkMode ? "App dark" : "App light";

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDarkModeClick}>{onDarkMode ? "Dark" : "Light"} Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
    );
}

export default App;
