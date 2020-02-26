import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import "./App.scss";

import { UserList, AddressList } from "./components";

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <div className="user-container">
          <UserList />
        </div>
        <div className="address-container">
          <AddressList />
        </div>
      </div>
    </Provider>
  );
}

export default App;
