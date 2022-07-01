import styled from "styled-components";

export const SignupStyled = styled.div`
  display: grid;
  height: 100vh;
  place-items: center;
`;

export const Form = styled.form`
  width: clamp(50%, 438px, 90%);

  & > input {
    margin: 5px 0;
  }

  .signup--button-container {
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
  }
`;
