import { SET_TEXT, SET_WPM, SET_READER } from "./constants";

export const setText = (text: string) => ({
  type: SET_TEXT,
  payload: { text }
});

export const setWPM = (value: number) => ({
  type: SET_WPM,
  payload: { wpm: value }
});

export const setReader = (text: string, wpm: number) => ({
  type: SET_READER,
  payload: {
    text,
    wpm
  }
});
