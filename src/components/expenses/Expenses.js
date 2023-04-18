import { ExpensesList } from "../ExpensesList/ExpensesList";
import { ExpensesFilter } from "./ExpensesFilter";
import { useState } from "react";
import {Chart} from "../Chart/Chart.jsx"
import styled from "styled-components";

export const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2023");
  const getSelectValue = (event) => {
    setSelectedYear(event.target.value);
  };
  const filteredYear = props.expenses.filter((element) => {
    const stringifiedYear = new Date(element.date).getFullYear().toString();

    return stringifiedYear === selectedYear;
  });

  return (
    <SecondContainer > 
      <ExpensesFilter 
      expenses={props.expenses}
      setExpenses={props.setExpenses}
      onChange={getSelectValue}
      value={selectedYear}
       />
<Chart items={filteredYear} />

      {filteredYear.map((el,index) => {
        return <ExpensesList el={el} key={index} />
      })}
    </SecondContainer>
  );
};

const SecondContainer = styled.div`
 background-color: #1F1F1F;
  width: 762px;
  border-radius: 10px;
  margin-top: 10px;
  padding: 10px;
`