import styled from "styled-components";

export const InputText = styled.input`
  background: #ffffff;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.3);
  border-radius: 12px;
  border: none;
  outline: none;
  height: 35px;
  padding: 10px 10px 10px 30px;
  width: 100%;

  font-size: 16px;
  line-height: 15px;

  color: black;

  &::placeholder {
    color: #d9d9d9;
  }
`;

export const TextArea = styled.textarea`
  background: #ffffff;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  border: none;
  outline: none;
  padding: 10px 10px 10px 30px;
  width: 100%;

  font-size: 16px;
  line-height: 15px;
  font-family: "Poppins", sans-serif;
  color: black;
  resize: none;

  &::placeholder {
    color: #d9d9d9;
  }
`;
