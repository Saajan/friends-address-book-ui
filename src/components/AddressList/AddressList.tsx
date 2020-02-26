import React, { Fragment, useEffect } from "react";

export default ({ getAddressList, loading, data, error, currentUser }: any) => {
  useEffect(() => {
    getAddressList(currentUser);
  }, [currentUser]);

  if (currentUser == null) {
    return <div className="not-selected">User Not Selected</div>;
  }

  if (loading) {
    return <div>Loading</div>;
  }

  if (error) {
    return <div> Error : {error}</div>;
  }

  return (
    <Fragment>
      <ul className="list address-list">
        {data.length > 0 ? (
          data.map((user: any, index: number) => (
            <li className="list-item" key={index}>
              <div>{user.address}</div>
            </li>
          ))
        ) : (
          <li className="list-item not-found">Address Not Found.</li>
        )}
      </ul>
    </Fragment>
  );
};
