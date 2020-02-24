import React, { useState } from "react";
import "./App.scss";

import { UserList, AddressList } from "./components";

function App() {
  let [userList] = useState([]);

  return (
    <div className="App">
      <UserList userList={userList} />
      <AddressList />
    </div>
  );
}

export default App;
