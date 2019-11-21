import { createStore } from "redux";

import readerReducer from "./state/Reader/reducer";

const store = createStore(readerReducer);

export default store;
