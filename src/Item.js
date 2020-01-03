import React from "react";

const Item = props => {
  return (
    <div
      style={{
        display: "flex"
      }}
    >
      <li>{props.item}</li>
      <button onClick={props.remove}>Remover</button>
      <button onClick={props.edit}>Editar</button>
    </div>
  );
};

export default Item;
