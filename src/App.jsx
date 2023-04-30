import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function App() {
  const [list, setList] = useState([{ id: uuid(), task: "Estudar" }]);
  const [inputTask, setInputTask] = useState("");

  function digitarInput(e) {
    setInputTask(e.target.value);
  }

  function buttonClick() {
    setList([ ...list, { id: uuid(), task: inputTask }]);
    // Com o spread operator eu consigo pegar todos os itens da lista e acrescentar um novo item com o inputTask
  }

  return (
    <div>
      <input onChange={digitarInput} placeholder="O que tenho que fazer..." />
      <button onClick={buttonClick}>Adicionar</button>

      <ul>
        {list.map((item) => (
          <li key={item.id}>{item.task}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
