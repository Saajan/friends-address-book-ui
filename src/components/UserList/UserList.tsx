import React, { Fragment, useEffect } from "react";

interface User {
  id: number;
  name: string;
  age: number;
  sex: string;
}

export default ({ getUserList, setCurrentUser, currentUser, loading, error, data }: any) => {
  useEffect(() => {
    getUserList();
  }, []);

  const handleUserClick = (id: number) => {
    setCurrentUser(id);
  };

  if (loading) {
    return <div>Loading</div>;
  }

  if (error) {
    return <div> Error : {error}</div>;
  }

  return (
    <Fragment>
      <ul className="list user-list">
        {data.length > 0 ? (
          data.map((user: User) => (
            <li
              className={currentUser == user.id ? 'list-item selected' : "list-item"}
              key={user.id}
              onClick={() => handleUserClick(user.id)}
            >
              <div>
                {user.name} ({` ${user.age} Yr. `})
              </div>
              <div>{user.sex}</div>
            </li>
          ))
        ) : (
          <li className="list-item">No Users Present</li>
        )}
      </ul>
    </Fragment>
  );
};
