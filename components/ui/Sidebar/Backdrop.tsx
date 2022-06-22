import { motion } from "framer-motion";
import styled from "styled-components";

interface BackdropProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const Backdrop = ({ children, onClick }: BackdropProps) => {
  return (
    <BackdropStyled
      onClick={() => {}}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </BackdropStyled>
  );
};

export default Backdrop;

const BackdropStyled = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgb(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  z-index: 10000;
`;
