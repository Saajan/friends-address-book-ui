import React, { useEffect } from "react";

interface User {
  id: number;
  name: string;
  age: number;
  sex: string;
}

export default ({ getUserList, setCurrentUser, userList }: any) => {
  useEffect(() => {
    getUserList();
  }, []);

  const handleUserClick = (id: number) => {
    setCurrentUser(id);
  };

  if (userList.data.length > 0) {
    return (
      <div>
        <ul className="list">
          {userList.data.map((user: User) => (
            <li
              className="list-item"
              key={user.id}
              onClick={() => handleUserClick(user.id)}
            >
              <div>{user.name}</div>
              <div>{user.age}</div>
              <div>{user.sex}</div>
            </li>
          ))}
        </ul>
      </div>
    );
  } else {
    return <div>Loading</div>;
  }
};
