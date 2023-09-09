import "./App.css";
import Footer from "./Footer";
import Form from "./Form";
import Header from "./Header";
import List from "./List";
import React, { useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  const [originalData, setOriginalData] = useState([]);

  // ...

  let manageData = (item) => {
    setItems((items) => [...items, item]);
    setOriginalData((data) => [...data, item]); // Store original data
  };
  //for clearlist button to delete all item
  let clearItem = () => {
    setItems([]);
  };
  // for seperate delete button
  let deleteItem = (id) => {
    setItems((items) =>
      items.filter((value) => {
        return value.id !== id;
      })
    );
  };

  // when i click a checbox btn this func will happen
  let handleCheckboxClick = (id) => {
    let updatedItems = [...items];
    const itemIndex = updatedItems.findIndex((item) => item.id === id);

    if (itemIndex !== -1) {
      // intha method la ena value kututhu erukoma atha athku oposite ah change pantrom
      updatedItems[itemIndex].packed = !updatedItems[itemIndex].packed;
      setItems(updatedItems);
    }
  };
  // this func is for get the values from the slect option in sort
  // change the arrays form the values
  let selectSort = (value) => {
    if (value == 1) {
      setItems([...originalData]);
    } else {
      let packedSort = originalData.filter((arr) => arr.packed === true);
      setItems([...packedSort]);
    }
  };

  return (
    <div className="App">
      <Header />
      <Form addDataitems={manageData} />
      <List
        item={items}
        clearArray={clearItem}
        handleCheckbox={handleCheckboxClick}
        del={deleteItem}
        sort={selectSort}
      />
      <Footer allItems={items} />
    </div>
  );
}

export default App;
