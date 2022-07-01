import React, { FC } from "react";
import styled from "styled-components";
import { InputText } from "../../../../styles/ui/inputStyled";
import { Button } from "../../Button";

interface Props {
  onCancel: () => void;
}

export const NewCard: FC<Props> = ({ onCancel }) => {
  return (
    <NewCardStyled>
      <h6 className="newcard--title">Crear Baraja</h6>

      <InputText
        className="newcard--input"
        type="text"
        placeholder="Ingresar nombre..."
      />

      <div className="newcard--button-container">
        <Button
          color="white"
          darkColor="black"
          textColor="black"
          px="15px 35px"
          onClick={onCancel}
        >
          Cancelar
        </Button>
        <Button px="15px 50px">Crear</Button>
      </div>
    </NewCardStyled>
  );
};

const NewCardStyled = styled.div`
  padding: 20px;
  .newcard--title {
    display: flex;
    font-size: 20px;
    justify-content: center;
    margin: 0 auto;
  }

  .newcard--input {
    margin: 25px 0;
  }

  .newcard--button-container {
    display: flex;
    justify-content: center;
  }
`;
