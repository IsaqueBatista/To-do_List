import React from "react";
import { v4 as uuid } from "uuid";

function App() {
  const list = [
    { id: uuid(), task: "Estudar" },
    { id: uuid(), task: "Candidatar nas vagas" },
    {
      id: uuid(),
      task: "Conversar e fechar com várias pessoas na Amakha Paris",
    },
  ];

  function digitarInput(e) {
    console.log(e.target.value);
  }
  function buttonClick() {
    console.log("buttin click ok");
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
