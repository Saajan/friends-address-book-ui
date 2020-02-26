import React, { useEffect } from "react";

export default ({ getUserList, setCurrentUser, userList }: any) => {
  useEffect(() => {
    getUserList();
  }, []);

  const handleUserClick = (id: any) => {
    console.log(id);
    setCurrentUser(id);
  };

  if (userList.data.length > 0) {
    return (
      <div>
        <ul className="list">
          {userList.data.map((user: any) => (
            <li className="list-item" key={user.id} onClick={() => handleUserClick(user.id)}>
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
