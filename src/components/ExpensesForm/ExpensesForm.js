import { useState } from "react";
import { Button } from "../UI/Button";
import { Input } from "../UI/Input";
import styled from "styled-components";
export const ExpensesForm = ({ onClick, createExpense }) => {
  const [inputText, setInputText] = useState("");
  const [inputNumber, setInputNumber] = useState("");
  const [inputDate, setInputDate] = useState("");

  function getInputValue(e) {
    setInputText(e.target.value);
  }
  function getNumberValue(e) {
    setInputNumber(e.target.value);
  }
  function getDateValue(e) {
    setInputDate(e.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();

    const product = {
      id: Date.now().toString(),
      title: inputText,
      price: +inputNumber,
      date: new Date(inputDate),
    };
    if (inputText && inputNumber && inputDate  !== "") {
      createExpense(product);
    } else {
    alert("Баардык инпуттарды толтуруп чыгыныз")
    }

    setInputText("");
    setInputDate("");
    setInputNumber("");
  }

  // console.log(inputText, inputNumber, inputDate);
  return (
    <FormContainer
      onSubmit={submitHandler}
    >
      <div>
        <Input
          children="Заголовок"
          id="1"
          type="text"
          value={inputText}
          onChange={getInputValue}
        />
        <Input
          children="Датировать"
          id="3"
          type="date"
          value={inputDate}
          onChange={getDateValue}
        />
      </div>
      <div>
        <Input
          children="Количество"
          id="2"
          type="number"
          value={inputNumber}
          onChange={getNumberValue}
        />

        <Button onClick={onClick}>ОТМЕНА</Button>
        <Button>ДОБАВИТЬ РАСХОД</Button>
      </div>
    </FormContainer>
  );
};
const FormContainer = styled.form`
display: flex;
justify-content: center;
`