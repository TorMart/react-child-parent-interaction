import React, { useState } from "react";
import Button from "./components/Button";


interface AppProps {

}

const App: React.FC<AppProps> = () => {
  const [counter, setCounter] = useState(0);
  const [arrItems, setArrItems] = useState<Array<string>>([]);
  
  const increment = () => {
    setCounter(counter + 1);
  }

  const decrement = () => {
    setCounter(counter - 1);
  }

  // The form has two items, a text box and a submit button.
  // To get the value from the text box use e.target[0].value.
  // The button is e.target[1].
  const addItem = (e: any) => {
    e.preventDefault();
    setArrItems([...arrItems, e.target[0].value])
  }

  return (
    <>
      <Button handleClick={increment}>Increase</Button>
      <span style={{margin: "0px 5px 0px 5px"}}>{counter}</span>
      <Button handleClick={decrement}>Decrease</Button>
      
      <form onSubmit={addItem} style={{marginTop: "10px"}}>
        <input type="text"/>
        <input type="submit" style={{alignContent: "inherit"}} />
      </form>
      {arrItems.map(val => <p>{val}</p>)}
    </>
  );
}

export default App