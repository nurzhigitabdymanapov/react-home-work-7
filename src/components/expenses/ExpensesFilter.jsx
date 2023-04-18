import React from "react";
import styled from "styled-components";
export function ExpensesFilter({ value, onChange,expenses,setExpenses }) {

  const vozrastani = () => {
    setExpenses([
      ...expenses.sort((a, b) => {
        return new Date(a.date) - new Date(b.date);
      }),
    ]);
  };
  const ubyvani = () => {
    setExpenses([
      ...expenses.sort((a, b) => {
        return new Date(b.date) - new Date(a.date)
      }),
    ]);
  };

  return (
    <ExpenFilter >
      <ExpenFilterButtonDiv >
        <ExpenFilterButton onClick={vozrastani}>По возрастанию</ExpenFilterButton>
        <ExpenFilterButton onClick={ubyvani}> По убыванию</ExpenFilterButton>
      </ExpenFilterButtonDiv>
      <ExpenFilterControl >
        <ExpenSelect onChange={onChange} value={value}>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020 </option>
          <option value="2019">2019</option>
        </ExpenSelect>
      </ExpenFilterControl>
    </ExpenFilter>
  );
}

const ExpenFilter = styled.div`
   display: flex;
  width: 100%;
  justify-content: space-between;
  height: 50px;
  gap: 50px;
  margin-bottom: 10px;
`
const ExpenFilterButtonDiv = styled.div`
    display: flex;
  align-items: center;
  gap: 50px;
`
const ExpenFilterButton = styled.button`
   width: 130px;
  height: 35px;
  border-radius: 5px;
  border: 0;
  &:hover{
    transition: 0.5s;
color: #fff;
background-color: #4A026B;
  }
`
const ExpenFilterControl = styled.div`
    display: flex;
  align-items: center;
`
const ExpenSelect = styled.select`
   width: 100px;
  height: 35px;
  border-radius: 5px;
  border: 0;
  text-align: center;
`