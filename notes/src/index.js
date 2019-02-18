import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import App from "./App";
import { createStore, combineReducers, applyMiddleware } from "redux";
import createHistory from "history/createBrowserHistory";
import {
  ConnectedRouter,
  routerReducer,
  routerMiddleware
} from "react-router-redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import { noteReducer } from "./reducers/noteReducer";
import { userReducer } from "./reducers/userReducer";
import { fetchUserData } from "./actions/userActions";

const history = createHistory();
const middleware = routerMiddleware(history);

const store = createStore(
  combineReducers({
    user: userReducer,
    note: noteReducer,
    router: routerReducer
  }),
  applyMiddleware(middleware, createLogger(), thunk)
);

store.dispatch(fetchUserData());

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
