import React, { useState } from "react";
import { Provider } from "react-redux";
import store from "./store";
import "./App.scss";

import { UserList, AddressList } from "./components";

function App() {
  let [userList] = useState([]);

  return (
    <Provider store={store}>
      <div className="App">
        <UserList userList={userList} />
        <AddressList />
      </div>
    </Provider>
  );
}

export default App;
