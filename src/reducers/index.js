import { combineReducers } from "redux";
import userReducer from "./userReducer";
import articleReducer from "./articleReducer";

const rootReducer = combineReducers({
  articleState: articleReducer,
  userState: userReducer,
});

export default rootReducer;
