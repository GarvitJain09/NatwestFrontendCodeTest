import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore,applyMiddleware  } from "redux";
import thunk from "redux-thunk";
import App from "./app";
import APIData from "./reducer/apiData.reducer";
const store = createStore(APIData,applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
<App />
  </Provider> 
, 
document.getElementById("app"));
