import { Button } from "../UI/Button";
import { ExpensesForm } from "../ExpensesForm/ExpensesForm";
import { useState } from "react";
import styled from "styled-components";
export const NewExpense = ({ createExpense }) => {
  const [state, setState] = useState(false);

  //   let state = false;

  function openAndCloseExpensesFormHandler() {
    setState(!state);

    // state = true;
  }

  return (
    <ContainerAll>
      {state ? (
        <ExpensesForm
          onClick={openAndCloseExpensesFormHandler}
          createExpense={createExpense}
        />
      ) : (
        <Button onClick={openAndCloseExpensesFormHandler}>
          ДОБАВИТЬ НОВЫЙ РАСХОД
        </Button>
      )}
    </ContainerAll>
  ); 
};
const ContainerAll = styled.div`
background-color: #AD9BE9;
width: 780px;
height: 200px;
padding-top: 20px;
display: flex;
justify-content: center;
border-radius: 12px;
`