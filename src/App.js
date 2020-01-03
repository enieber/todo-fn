import React, { useState } from "react";
import Item from "./Item";

function App() {
  const [item, setItem] = useState("");
  const [indexEdit, setIndexEdit] = useState(-1);
  const [tasks, setTasks] = useState([]);
  const [action, setAction] = useState(0);

  return (
    <div>
      <h1>Todo</h1>
      <div>
        <input
          value={item}
          onChange={event => {
            setItem(event.target.value);
          }}
        />
        {action === 0 ? (
          <button
            onClick={() => {
              const newTasks = [item, ...tasks];
              setTasks(newTasks);
              setItem("");
            }}
          >
            Adicionar
          </button>
        ) : (
          <button
            onClick={() => {
              let newTasks = [...tasks];
              newTasks[indexEdit] = item;
              setTasks(newTasks);
              setItem("");
              setIndexEdit(-1);
              setAction(0);
            }}
          >
            Editar
          </button>
        )}
      </div>
      <ul>
        {tasks.map((_item, index) => {
          return (
            <Item
              item={_item}
              remove={() => {
                const newTasks = tasks.filter(_i => _i !== _item);
                setTasks(newTasks);
              }}
              edit={() => {
                setItem(_item);
                setIndexEdit(index);
                setAction(1);
              }}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default App;
