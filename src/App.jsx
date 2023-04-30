import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function App() {

  const [list, setList] = useState([{ id: uuid(), task: "Estudar" }])


  function digitarInput(e) {
    setList([{ id: uuid(), task: e.target.value }])

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
