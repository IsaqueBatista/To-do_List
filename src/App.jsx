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
} from "./styles.js";

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
        <H1>TodoList</H1>

        <ContainerInput>
          <DivInput>
            <StyledIcon />
            <Input
              onChange={digitarInput}
              placeholder="O que tenho que fazer..."
            />
          </DivInput>
          <Button onClick={buttonClick}>Adicionar</Button>
        </ContainerInput>

        <H1>Filter by</H1>

        <ContainerButtonFilter>
          <Button onClick={buttonClick}>All</Button>
          <Button onClick={buttonClick}>Done</Button>
          <Button onClick={buttonClick}>Todo</Button>
        </ContainerButtonFilter>

        <List>
          <ul>
            {list.map((item) => (
              <Item key={item.id}>
                {item.task}
                <ContainerStyledIconItem>
                  <div>
                    <StyledIconHiPencil />
                  </div>
                  <div>
                    <StyledIconFaTrash />
                  </div>
                </ContainerStyledIconItem>
              </Item>
            ))}
          </ul>
        </List>
      </ToDoList>
    </Container>
  );
}

export default App;
