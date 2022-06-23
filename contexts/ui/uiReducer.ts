import { UiState } from "./";

type UiActionType =
  | { type: "[UI] - ToggleMenu" }
  | { type: "[UI] - toggleNewCardModal" };

export const uiReducer = (state: UiState, action: UiActionType): UiState => {
  switch (action.type) {
    case "[UI] - ToggleMenu":
      return {
        ...state,
        isMenuOpen: !state.isMenuOpen,
      };

    case "[UI] - toggleNewCardModal":
      return {
        ...state,
        isNewCardModalOpen: !state.isNewCardModalOpen,
      };

    default:
      return state;
  }
};
