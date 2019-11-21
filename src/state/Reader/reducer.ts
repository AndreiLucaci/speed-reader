import { SET_TEXT, SET_WPM, SET_READER } from "./constants";
import { initialState } from "./intitialstate";

export default (state = initialState, action: any) => {
  switch (action.type) {
    case SET_TEXT:
      return {
        ...state,
        text: action.payload.text
      };
    case SET_WPM:
      return {
        ...state,
        wpm: action.payload.wpm
      };
    case SET_READER:
      return {
        ...state,
        text: action.payload.text,
        wpm: action.payload.wpm
      };
    default:
      return state;
  }
};
