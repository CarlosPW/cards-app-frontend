import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import Backdrop from "./Backdrop";

import { IoCloseSharp } from "react-icons/io5";

interface ModalProps {
  handleClose: () => void;
  modalOpen: boolean;
  children: React.ReactNode;
}

const dropIn = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export const Modal = ({ handleClose, children }: ModalProps) => {
  return (
    <Backdrop>
      <ModalStyled
        onClick={(e) => e.stopPropagation()}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <IoCloseSharp className="close__icon" onClick={handleClose} />
        {children}
      </ModalStyled>
    </Backdrop>
  );
};

const ModalStyled = styled(motion.div)`
  position: relative;
  width: clamp(50%, 438px, 90%);
  max-width: 638px;
  min-height: 255px;
  overflow-y: auto;
  margin: auto;
  max-height: calc(100vh - 100px);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  background: white;
  padding: 10px 5px;

  & > .close__icon {
    position: absolute;
    right: 20px;
    top: 10px;
    cursor: pointer;
    width: 24px;
    height: 24px;
  }
`;
