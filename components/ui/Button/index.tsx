import React, { FC } from "react";
import styled from "styled-components";

import { T } from "../../../styles/Theme";
import { ButtonStyled } from "../../../styles/ui";

interface Props {
  children: React.ReactNode;
  color?: string;
  textColor?: string;
  px?: string;
}

export const Button: FC<Props> = ({
  color = T.purple,
  textColor = "white",
  children = "Button",
  px = "60px",
}) => {
  return (
    <ButtonStyled
      whileHover={{
        scale: 1.05,
      }}
      whileTap={{ scale: 0.95 }}
    >
      <UpLayer color={color} textColor={textColor} px={px}>
        {children}
      </UpLayer>
    </ButtonStyled>
  );
};

const UpLayer = styled.div<Props>`
  background-color: ${({ color }) => color};
  border-radius: 12px;
  color: ${({ textColor }) => textColor};
  font-size: 16px;
  font-weight: 600;
  height: 100%;
  /* min-width: 100px; */
  padding: ${({ px }) => `15px ${px}`};
  text-align: center;
  transition: 0.3s;

  &:active {
    opacity: 0.8;
    transition: 0.3s;
  }
`;
