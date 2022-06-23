import { FC, useContext, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { UiContext } from "../../../contexts/ui";
import { Button } from "../Button";

import { AiFillHome, AiFillHeart } from "react-icons/ai";
import { BiBarChart } from "react-icons/bi";
import { MdLogout, MdOutlineClose } from "react-icons/md";
import Backdrop from "./Backdrop";

import { SidebarStyled } from "../../../styles/ui/";
import { useMediaQuery } from "../../../helpers/size";

interface Props {}

export const Sidebar: FC<Props> = () => {
  const { toggleSideMenu, isMenuOpen } = useContext(UiContext);

  const isMedium = useMediaQuery("(min-width: 768px)");
  const dropIn = isMedium
    ? {
        hidden: {
          x: 0,
        },
        visible: {
          x: 0,
          transition: {
            duration: 0.5,
          },
        },
      }
    : {
        hidden: {
          x: -120,
        },
        visible: {
          x: 0,
          transition: {
            duration: 0.5,
          },
        },
      };

  return (
    <>
      <AnimatePresence>
        {(isMenuOpen || isMedium) && (
          <Backdrop>
            <SidebarStyled isMenuOpen={isMenuOpen || isMedium}>
              <motion.div
                className={`sidebar`}
                variants={dropIn}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                <div className="sidebar--header">
                  {!isMedium ? (
                    <span className="close" onClick={toggleSideMenu}>
                      <MdOutlineClose />
                    </span>
                  ) : (
                    <div className="logo">asd</div>
                  )}

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
