import "./form.css";
import React, { useState } from "react";

const Form = ({ addDataitems }) => {
  const [details, setDetails] = useState(" ");
  const [numbers, setNumbers] = useState(1);

  const getValues = (event) => {
    event.preventDefault();
    const newObj = { numbers, details, packed: false, id: Date.now() };
    addDataitems(newObj);
    setNumbers(1);
    setDetails("");
  };
  return (
    <form className="form-container" onSubmit={getValues}>
      <p className="para-form">what do you need 👀 for your trip?</p>
      <select
        className="select-cont"
        value={numbers}
        onChange={(e) => setNumbers(e.target.value)}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option className="number" value={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        className="iput-box"
        placeholder="item"
        value={details}
        onChange={(e) => setDetails(e.target.value)}
      ></input>
      <button className="add-btn">ADD</button>
    </form>
  );
};

export default Form;
