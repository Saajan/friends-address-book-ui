import { bindActionCreators, Dispatch, AnyAction } from "redux";
import { connect } from "react-redux";

import AddressList from "./AddressList";
import { getAddressList } from "../../actions";

const mapStateToProps = (state: any) => {
  return {
    currentUser: state.currentUser,
    addressList: state.addressList
  };
};

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
  return bindActionCreators(
    {
      getAddressList
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(AddressList);
