import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import reducer from "../reducers/index";

import Header from "./Header";
import Form from "./Form";

const store = createStore(reducer, applyMiddleware(thunk));

function App() {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Form />
      </Provider>
    </>
  );
}

export default App;
