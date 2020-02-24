import React from "react";

interface IUser {
  id: number;
  name: string;
  age: number;
  sex: string;
}

interface IUsers {
  userList: IUser[];
}

export default ({ userList }: IUsers) => {
  console.log(userList);
  return <div>user list</div>;
};
