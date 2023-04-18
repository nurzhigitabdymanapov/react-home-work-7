import "./App.css";
import { NewExpense } from "./components/newExpense/NewExpense";
import { Expenses } from "./components/expenses/Expenses";
import { useState } from "react";
import styled from "styled-components";

function App() {
  const [expenses, setExpenses] = useState([
    {
      title: "Apple Watch",
      price: 450,
      date: new Date(2023, 2, 19),
    },
    {
      title: "Телевизор LG",
      price: 800,
      date: new Date(2022, 11, 21),
    },
    {
      title: "Iphone 14",
      price: 1500,
      date: new Date(2020, 8, 5),
    },
    {
      title: "Nike Кроссовка",
      price: 990,
      date: new Date(2019, 1, 17),
    },
    {
      title: "Туалетная бумага",
      price: 100,
      date: new Date(2019, 8, 9),
    },
    {
      title: "Двойка",
      price: 780,
      date: new Date(2020, 1, 27),
    },
    {
      title: "Стол",
      price: 500,
      date: new Date(2021, 7, 14),
    },
    {
      title: "MacBook M1 Air",
      price: 1650,
      date: new Date(2022, 1, 31),
    },
    {
      title: "MacBook M1 Air",
      price: 1650,
      date: new Date(2021, 7, 31),
    },


    {
      title: "Шоколады",
      price: 340,
      date: new Date(2020, 0, 16),
    },
  ]);

  const createExpense = (data) => {
    const updatedExpenses=[...expenses]
    updatedExpenses.push(data)
    setExpenses(updatedExpenses)
  };

  return (
    <DivApp>
      <NewExpense createExpense={createExpense} />
     
      <Expenses setExpenses={setExpenses} expenses={expenses} />
    </DivApp>
  );
}

export default App;

const DivApp = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 20px;
`