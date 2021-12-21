import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { authReducer } from "./features/Auth";
import { logger } from "redux-logger/src";
import { userReducer } from "./features/User";
import { profileReducer } from "./features/ProfileReducer";


export const store = createStore(
  combineReducers({
    auth: authReducer,
    user: userReducer,
    userProfile: profileReducer,
  }),
  composeWithDevTools(applyMiddleware(thunk, logger))
);
