import styled from "styled-components";
import { HiOutlineNewspaper } from "react-icons/hi";
import { FaTrash } from "react-icons/fa"
import { HiPencil } from "react-icons/hi"


export const Container = styled.div`
  background: linear-gradient(90deg, #383838 0%, #000000 81.25%);
  height: 100vh;
  width: 100vw;

  display: flex;
  align-items: center;
  justify-content: center;
  font-family: roboto;
`;

export const ToDoList = styled.div`
  top: 100px;
  background: #f5f5f5;
  border-radius: 5px;
  padding: 30px 20px;
  width: 70%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ContainerInput = styled.div`
  padding: 15px;
  width: 75%;

  border: 1px solid rgba(209, 211, 212, 0.9);
  border-radius: 5px;
`;

export const H1 = styled.h1`
  font-weight: 500;
  font-size: x-large;
`;

export const Input = styled.input`
  border-radius: 0 4px 4px 0;
  border: none;
  height: 40px;
  width: 100%;

  font-size: 15px;
  padding: 0px 2px;
`;

export const Button = styled.button`
  background: #16a3b7;
  border-radius: 5px;
  width: 100%;
  height: 35px;
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #ffffff;
  font-weight: 400;
  font-size: 16px;
  line-height: 2px;
`;

export const DivInput = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border: 1px solid rgba(209, 211, 212, 0.9);
  border-radius: 4px;
  margin-bottom: 10px;
`;

export const StyledIcon = styled(HiOutlineNewspaper)`
  padding: 2px;
  background: #16a3b7;

  color: white;
  font-size: 15px;
  height: 40px;
  width: 30px;
  border-radius: 3px 0 0 3px;
  padding: 0px 5px;
`;

//Até aqui input e botão enviar parte superior

export const ContainerButtonFilter = styled.div`
  display: inline-flex;
  width: 75%;
  gap: 25px;
  padding: 5px 15px;
  font-weight: 600;
`;

export const List = styled.div`
  padding: 5px;
  border-radius: 4px;
  width: 75%;
  margin-top: 10px;

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;

    display: flex;
    flex-direction: column;
    gap: 5px;
  }

`;

export const Item = styled.li`
  border: 1px solid rgba(209, 211, 212, 0.9);
  padding: 5px;
  border-radius: 4px;
  margin-bottom: 2px;

  font-weight: 400;
  font-size: 15px;  

  display: flex;
  justify-content: flex-start;
  align-items: center;
  justify-content:space-between;
`;


export const ContainerStyledIconItem = styled.div`
  padding: 2px 3px;
  height: 15px;

  display: flex;
  justify-content: center;
  align-items: center;

`; 

export const StyledIconFaTrash = styled(FaTrash)`
  padding: 2px 3px;
  color: red;
  height: 15px;

  display: flex;
  justify-content: center;
  align-items: center;

`; 

export const StyledIconHiPencil = styled(HiPencil)`
  padding: 0 3px;
  color: #F4C433;
  /* height: 15px; */

  height: 30px;
  width: 22px;

  display: flex;
  justify-content: center;
  align-items: center;

`;