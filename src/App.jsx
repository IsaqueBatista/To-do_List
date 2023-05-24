import React, { useState } from "react";
import { v4 as uuid } from "uuid";

import {
  H1,
  Container,
  ContainerInput,
  StyledIcon,
  ToDoList,
  DivInput,
  Input,
  Button,
  ContainerButtonFilter,
  List,
  Item,
  ContainerStyledIconItem,
  StyledIconFaTrash,
  StyledIconHiPencil,
  StyledIconAiOutlineBorder,
  ContainerButtonRed,
  ButtonRed,
  InputField
} from "./styles.js";

function App() {
  const [list, setList] = useState([
    { id: uuid(), task: "Estudar", finished: true },
  ]);
  const [inputTask, setInputTask] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editingTask, setEditingTask] = useState("");
  const [filter, setFilter] = useState("all");


  function digitarInput(e) {
    setInputTask(e.target.value);
  }

  function buttonClick() {
    setList([...list, { id: uuid(), task: inputTask, finished: false }]);
    setInputTask("");
  }

  function taskCompleted(id) {
    const newList = list.map((item) =>
      item.id === id ? { ...item, finished: !item.finished } : item
    );
    setList(newList);
  }

  function deleteTask(id) {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  }

  function startEditing(id, task) {
    setEditingId(id);
    setEditingTask(task);
  }

  function saveTask() {
    const newList = list.map((item) => {
      if (item.id === editingId) {
        return { ...item, task: editingTask };
      }
      return item;
    });
    setList(newList);
    setEditingId(null);
    setEditingTask("");
  }

  function showAll() {
    setFilter("all");
  }

  function showCompleted() {
    setFilter("completed");
  }

  function showUncompleted() {
    setFilter("uncompleted");
  }

  function filterList() {
    if (filter === "completed") {
      return list.filter(item => item.finished);
    } else if (filter === "uncompleted") {
      return list.filter(item => !item.finished);
    } else {
      return list;
    }
  }

  return (
    <Container>
      <ToDoList>
        <H1>TodoList</H1>

        <ContainerInput>
          <DivInput>
            <StyledIcon />
            <Input
              value={inputTask}
              onChange={digitarInput}
              placeholder="O que tenho que fazer..."
            />
          </DivInput>
          <Button onClick={buttonClick}>Adicionar</Button>
        </ContainerInput>

        <H1>Filtrar por</H1>

        <ContainerButtonFilter>
          <Button onClick={showAll}>Todos</Button>
          <Button onClick={showCompleted}>Concluído</Button>
          <Button onClick={showUncompleted}>A fazer</Button>
        </ContainerButtonFilter>

        <List>
          <ul>
          {filterList().map((item) => (
              <Item isFinished={item.finished} key={item.id} >
                {editingId === item.id ? (
                  <InputField
                    maxLength={40}
                    value={editingTask}
                    onChange={(e) => setEditingTask(e.target.value)
                    }
                  />
                ) : (
                  <span>{item.task}</span>
                )}

                <ContainerStyledIconItem>
                  <div>
                    <StyledIconAiOutlineBorder
                      onClick={() => taskCompleted(item.id)}
                    />
                  </div>
                  {editingId === item.id ? (
                    <div>
                      <StyledIconHiPencil onClick={saveTask} />
                    </div>
                  ) : (
                    <div>
                      <StyledIconHiPencil
                        onClick={() => startEditing(item.id, item.task)}
                      />
                    </div>
                  )}
                  <div>
                    <StyledIconFaTrash onClick={() => deleteTask(item.id)} />
                  </div>
                </ContainerStyledIconItem>
              </Item>
            ))}
          </ul>
        </List>

        <ContainerButtonRed>
          <ButtonRed onClick={buttonClick}>Deletar realizados</ButtonRed>
          <ButtonRed onClick={buttonClick}>Excluir tudo</ButtonRed>
        </ContainerButtonRed>

      </ToDoList>
    </Container>
  );
}

export default App;
