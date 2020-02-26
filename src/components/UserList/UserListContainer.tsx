import { bindActionCreators, Dispatch, AnyAction } from "redux";
import { connect } from "react-redux";

import UserList from "./UserList";
import { getUserList } from "../../actions";

const mapStateToProps = (state: any) => {
  return {
    userList: state.userList
  };
};

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
  return bindActionCreators(
    {
      getUserList
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
