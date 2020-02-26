import { bindActionCreators, Dispatch, AnyAction } from "redux";
import { connect } from "react-redux";

import UserList from "./UserList";
import { getUserList, setCurrentUser } from "../../actions";

const mapStateToProps = (state: any) => {
  return {
    currentUser: state.currentUser,
    loading: state.userList.loading,
    data: state.userList.data,
    error: state.userList.error
  };
};

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
  return bindActionCreators(
    {
      getUserList,
      setCurrentUser
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
