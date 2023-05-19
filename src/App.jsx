import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { Container, ToDoList } from "./styles.js";

function App() {
  const [list, setList] = useState([{ id: uuid(), task: "Estudar" }]);
  const [inputTask, setInputTask] = useState("");

  function digitarInput(e) {
    setInputTask(e.target.value);
  }

  function buttonClick() {
    setList([...list, { id: uuid(), task: inputTask }]);
  }

  return (
    <Container>
      <ToDoList>
        <input onChange={digitarInput} placeholder="O que tenho que fazer..." />
        <button onClick={buttonClick}>Adicionar</button>

        <ul>
          {list.map((item) => (
            <li key={item.id}>{item.task}</li>
          ))}
        </ul>
      </ToDoList>
    </Container>
  );
}

export default App;
