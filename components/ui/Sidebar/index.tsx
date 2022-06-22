import { FC, useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { UiContext } from "../../../contexts/ui";
import { Button } from "../Button";

import { AiFillHome, AiFillHeart } from "react-icons/ai";
import { BiBarChart } from "react-icons/bi";
import { MdLogout, MdOutlineClose } from "react-icons/md";
import Backdrop from "./Backdrop";

import { SidebarStyled } from "../../../styles/ui/";

interface Props {}

const dropIn = {
  hidden: {
    opacity: 0,
    x: -120,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export const Sidebar: FC<Props> = () => {
  const { toggleSideMenu, isMenuOpen } = useContext(UiContext);

  return (
    <>
      <AnimatePresence>
        {isMenuOpen && (
          <Backdrop>
            <SidebarStyled isMenuOpen={isMenuOpen}>
              <motion.div
                className={`sidebar`}
                variants={dropIn}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                <div className="sidebar--header">
                  <span className="close" onClick={toggleSideMenu}>
                    <MdOutlineClose />
                  </span>

                  <hr />

                  <div className="avatar"></div>

                  <hr />
                </div>

                <ul className="sidebar--menu">
                  <li>
                    <Button px="5px 10px">
                      <AiFillHome />
                    </Button>
                  </li>
                  <li>
                    <Button px="5px 10px">
                      <AiFillHeart />
                    </Button>
                  </li>
                  <li>
                    <Button px="5px 10px">
                      <BiBarChart />
                    </Button>
                  </li>
                </ul>

                <div className="sidebar--logout">
                  <MdLogout />
                </div>
              </motion.div>
            </SidebarStyled>
          </Backdrop>
        )}
      </AnimatePresence>
    </>
  );
};
