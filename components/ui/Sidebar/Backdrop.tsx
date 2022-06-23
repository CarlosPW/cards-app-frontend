import { motion } from "framer-motion";
import styled from "styled-components";
import { useMediaQuery } from "../../../helpers/size";

interface BackdropProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const Backdrop = ({ children }: BackdropProps) => {
  const isMedium = useMediaQuery("(min-width: 768px)");

  return (
    <>
      {!isMedium ? (
        <BackdropStyled
          onClick={() => {}}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {children}
        </BackdropStyled>
      ) : (
        <div>{children}</div>
      )}
    </>
  );
};

export default Backdrop;

const BackdropStyled = styled(motion.div)`
  @media (min-width: 768px) {
    background: rgb(0, 0, 0, 0);
  }

  position: fixed;
  top: 0;
  bottom: 0;
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
