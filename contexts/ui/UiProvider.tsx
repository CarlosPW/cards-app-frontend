import { FC, useReducer } from "react";
import { UiContext, uiReducer } from "./";

export interface UiState {
  isMenuOpen: boolean;
  isNewCardModalOpen: boolean;
}

const UI_INITIAL_STATE: UiState = {
  isMenuOpen: false,
  isNewCardModalOpen: false,
};

interface Props {
  children: React.ReactNode;
}

export const UiProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

  const toggleSideMenu = () => {
    dispatch({ type: "[UI] - ToggleMenu" });
  };

  const toggleNewCardModal = () => {
    dispatch({ type: "[UI] - toggleNewCardModal" });
  };

  return (
    <UiContext.Provider
      value={{
        ...state,

        // Methods
        toggleSideMenu,
        toggleNewCardModal,
      }}
    >
      {children}
    </UiContext.Provider>
  );
};
