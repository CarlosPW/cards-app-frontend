import React, { FC } from "react";
import styled from "styled-components";

import { T } from "../../../styles/Theme";
import { ButtonStyled } from "../../../styles/ui";

interface Props {
  children: React.ReactNode;
  color?: string;
  darkColor?: string;
  textColor?: string;
  px?: string;
}

export const Button: FC<Props> = ({
  color = T.purple,
  darkColor = T.darkPurple,
  textColor = "white",
  children = "Button",
  px = "15px 60px",
}) => {
  return (
    <ButtonStyled
      darkColor={darkColor}
      whileHover={{
        scale: 1.03,
      }}
      whileTap={{ scale: 1 }}
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
  padding: ${({ px }) => px};
  text-align: center;

  & > svg {
    width: 35px;
    height: 35px;
  }

  &:active {
    opacity: 0.7;
    transition: 0.3s;
  }
`;
