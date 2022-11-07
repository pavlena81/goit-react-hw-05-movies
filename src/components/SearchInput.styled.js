import styled from "styled-components";

import { HiSearch } from "react-icons/hi";

export const Wrapper = styled.div`
  display: inline-flex;
  align-items: center;
  position: relative;
  margin-bottom: 16px;
  border-radius: 4px;
  outline: 1px solid black;
  text-transform: uppercase;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
`;

export const Input = styled.input`
  
  padding: 8px 30px 8px 8px;
  margin-right: 20px;
  border: none;
  font: inherit;
  outline: none;
  &:focus {
    border-bottom: 2px  solid  #5972E8;    
  }
`;

export const Icon = styled(HiSearch)`
  width: 20px;
  height: 20px;
  position: absolute;
  right: 6px;
  top:10px;
`;

export const Button = styled.button`
border: 0;
outline: none;
`
export const Form = styled.form`

`