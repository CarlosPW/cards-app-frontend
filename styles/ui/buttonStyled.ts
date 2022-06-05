import { motion } from "framer-motion";
import styled from "styled-components";

const ButtonStyled = styled(motion.button)`
  background-color: black;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  padding: 1px 1px 5px 1px;
  margin: 5px;
`;

export { ButtonStyled };
