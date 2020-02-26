import React, { useEffect } from "react";

export default ({ getAddressList, addressList, currentUser }: any) => {
  console.log(addressList);
  useEffect(() => {
    getAddressList(currentUser);
  }, [currentUser]);

  if (addressList.data.length > 0) {
    return (
      <div>
        {addressList.data.map((user: any, index: number) => (
          <div key={index}>{user.address}</div>
        ))}
      </div>
    );
  } else {
    return <div>Loading</div>;
  }
};
