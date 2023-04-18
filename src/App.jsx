import React from "react";

function App() {
  const lista = [
    { id: 123456789, task: "Estudar" },
    { id: 987654321, task: "Candidatar nas vagas" },
    {
      id: 1234598765,
      task: "Conversar e fechar com várias pessoas na Amakha Paris",
    },
  ];
  // "Estudar", "Candidatar nas vagas", "Conversar e fechar com várias pessoas na Amakha Paris"
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
        {lista.map((item) => (
          <li>{item.task}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
