import { motion } from "framer-motion";
import React, {
  Dispatch,
  FC,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";
import cardsApi from "../../../api/cardsApi";
import { AuthContext } from "../../../contexts";
import { CardItem } from "../../../interfaces";
import { T } from "../../../styles/Theme";
import { TextArea } from "../../../styles/ui";
import { Button } from "../Button";

const dropIn = {
  hidden: {
    // opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
};

interface Props {
  item: CardItem;
  handleRefreshCardData: () => void;
}

export const DropdownItem: FC<Props> = ({ item, handleRefreshCardData }) => {
  const { configHeaders } = useContext(AuthContext);

  const [isDropdownOpen, setisDropdownOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const toggleDropdown = () => {
    setisDropdownOpen((prev) => !prev);
  };

  const handleDelete = async () => {
    setLoading(true);
    await cardsApi.delete(`carditem/${item.cardId}/${item.id}`, configHeaders);
    handleRefreshCardData();
    setLoading(false);
  };

  return (
    <div className="--block" key={item.id}>
      <div className="sidebar"></div>
      <div className="block-header noselect" onClick={toggleDropdown}>
        <h6>{item.title}</h6>
        <AiFillCaretDown />
      </div>
      {isDropdownOpen && (
        <motion.div
          className="block-hidden"
          variants={dropIn}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <TextArea disabled value={item.description}></TextArea>
          <Button
            color={T.red}
            darkColor="black"
            px="10px 15px"
            onClick={handleDelete}
            loading={loading}
          >
            <BsFillTrashFill />
          </Button>
        </motion.div>
      )}
    </div>
  );
};
