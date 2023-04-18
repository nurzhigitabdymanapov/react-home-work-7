import styled from "styled-components";
export const Input = (props) => {
  return (
    <div>
      <div>
        <AllLabel  htmlFor={props.id}>
          {props.children}
        </AllLabel>
      </div>
      <AllInput className="input" id={props.id} type={props.type} value={props.value} onChange={props.onChange}/>
    </div>
  );
};
const AllLabel = styled.label`
  font-size: 14px;
  font-weight: 500;
  color: #000000;
  width: 83px;
  height: 17px;
  display: flex;
  margin-left: 23px;
  margin-bottom: 5px;
`
const AllInput = styled.input`
 width: 340px;
  height: 39px;
  border-radius: 10px;
  border: 0;
  font-size: 14px;
  margin-left: 20px;
  margin-bottom: 10px;
`