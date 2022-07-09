import React, { ChangeEvent, FC, useState } from "react";
import styled from "styled-components";
import cardsApi from "../../../../api/cardsApi";
import { configHeaders } from "../../../../helpers/headersConfig";
import { InputText } from "../../../../styles/ui/inputStyled";
import { Button } from "../../Button";

interface Props {
  onCancel: () => void;
  getData: () => void;
}

export const NewCard: FC<Props> = ({ onCancel, getData }) => {
  const [title, setTitle] = useState<string>("");

  const handleSubmit = async () => {
    if (title.trim() === "") return;

    await cardsApi.post("/cards", { title }, configHeaders);
    getData();
    onCancel();
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  return (
    <NewCardStyled>
      <h6 className="newcard--title">Crear Baraja</h6>

      <InputText
        className="newcard--input"
        type="text"
        placeholder="Ingresar nombre..."
        onChange={handleChange}
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
        <Button px="15px 50px" onClick={handleSubmit}>
          Crear
        </Button>
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
