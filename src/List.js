import React from "react";
import "./list.css";

const List = ({ item, clearArray, handleCheckbox, del, sort }) => {
  return (
    <div className="row">
      {item.map((item, int) => (
        <Item
          props={item}
          key={int}
          clickAble={handleCheckbox}
          deleteItem={del}
        />
      ))}
      <select className="sort-pro" onChange={(e) => sort(e.target.value)}>
        <option value={1}>Sort by description</option>
        <option value={2}>sort by packed status</option>
      </select>
      <button className="clear" onClick={() => clearArray()}>
        Clearlist
      </button>
    </div>
  );
};
export default List;

const Item = ({ props, key, clickAble, deleteItem }) => {
  return (
    <div>
      <input
        type="checkbox"
        className="check"
        onClick={() => clickAble(props.id)} // Use the index prop
      />

      <span className={props.packed ? "line" : ""}>
        {props.numbers}
        {props.details}
      </span>

      <button className="close" onClick={() => deleteItem(props.id)}>
        &times;
      </button>
    </div>
  );
};
