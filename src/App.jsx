import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function App() {
  const [list, setList] = useState([{ id: uuid(), task: "Estudar" }]);
  const [inputTask, setInputTask] = useState("");
  // Eu poderia deixar apenas task e setTask

  function digitarInput(e) {
    setInputTask(e.target.value);
  }

  function buttonClick() {
    // E aqui chamar apenas o task, já que é o mesmo nome
    setList([{ id: uuid(), task: inputTask }]);
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
