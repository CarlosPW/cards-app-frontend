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
  onClick?: () => void;
}

export const Button: FC<Props> = ({
  children = "Button",
  color = T.purple,
  darkColor = T.darkPurple,
  onClick,
  px = "15px 60px",
  textColor = "white",
}) => {
  return (
    <ButtonStyled
      className="noselect"
      darkcolor={darkColor}
      whileHover={{
        scale: 1.03,
      }}
      whileTap={{ scale: 1 }}
      onClick={onClick}
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
