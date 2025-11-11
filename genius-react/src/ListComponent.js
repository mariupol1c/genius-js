import React from "react";
import { useState } from "react";
import ListItemComponent from "./ListItemComponent";

const ListComponent = () => {
  const [item, setItem] = useState(["First elemet"]);
  const [inp, setInp] = useState("");

  const onClickHandler = () => {
    const updatedElement = [...item, inp];
    setItem(updatedElement);
    setInp("");
  };
  const onChangekHandler = (e) => {
    setInp(e.target.value);
  };
  return (
    <React.Fragment>
      <input onChange={onChangekHandler} value={inp} />

      <ul>
        {item.map((el, ind) => (
          <ListItemComponent element={el} index={ind} />
        ))}
      </ul>
      <button onClick={onClickHandler}>Add new element</button>
    </React.Fragment>
  );
};

export default ListComponent;
