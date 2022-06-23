import styled from "styled-components";

import { GoAlert } from "react-icons/go";
import { Button } from "../../Button";
import { T } from "../../../../styles/Theme";

export const DeleteCard = () => {
  return (
    <DeleteCardStyled>
      <div className="deletecard--icon">
        <GoAlert />
      </div>
      <h6 className="deletecard--title">
        ¿Segur@ que deseas eliminar esta tarjeta?
      </h6>
      <div className="deletecard--button-container">
        <Button
          color="white"
          darkColor="black"
          textColor="black"
          px="15px 25px"
        >
          Cancelar
        </Button>
        <Button px="15px 30px">Eliminar</Button>
      </div>
    </DeleteCardStyled>
  );
};

const DeleteCardStyled = styled.div`
  padding: 20px;

  .deletecard--icon {
    display: flex;
    justify-content: center;
    svg {
      color: ${T.red};
      width: 40px;
      height: 40px;
    }
  }

  .deletecard--title {
    display: flex;
    font-size: 20px;
    justify-content: center;
    margin: 25px auto;
    text-align: center;
  }
  .deletecard--button-container {
    display: flex;
    justify-content: center;
  }
`;
