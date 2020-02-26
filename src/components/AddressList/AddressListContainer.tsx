import { bindActionCreators, Dispatch, AnyAction } from "redux";
import { connect } from "react-redux";

import AddressList from "./AddressList";
import { getAddressList } from "../../actions";

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
  return bindActionCreators(
    {
      getAddressList
    },
    dispatch
  );
};

export default connect(null, mapDispatchToProps)(AddressList);
