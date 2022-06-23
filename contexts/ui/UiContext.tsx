import { createContext } from "react";

interface ContextProps {
  isMenuOpen: boolean;
  isNewCardModalOpen: boolean;

  // Methods
  toggleSideMenu: () => void;
  toggleNewCardModal: () => void;
}

export const UiContext = createContext({} as ContextProps);
