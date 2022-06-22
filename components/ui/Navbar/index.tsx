import { useContext } from "react";

import { Nav, SearchInput } from "../../../styles/ui";
import { BiBell, BiMenuAltLeft, BiSearch } from "react-icons/bi";
import { UiContext } from "../../../contexts/ui";

export const Navbar = () => {
  const { toggleSideMenu, isMenuOpen } = useContext(UiContext);
  return (
    <Nav>
      {!isMenuOpen ? (
        <BiMenuAltLeft className="navbar--icon" onClick={toggleSideMenu} />
      ) : (
        <div className="navbar--menu-hidden"></div>
      )}

      <SearchInput>
        <BiSearch />
        <input type="text" placeholder="Buscar..." />
      </SearchInput>
      <BiBell className="navbar--icon" />
    </Nav>
  );
};
