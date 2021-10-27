import { connect } from "react-redux";
import AddNew from "../components/AddNew";
import { addListings } from "../redux/actions";

const mapDispatchToProps = (dispatch) => {
  return {
    addListings: (listing) => dispatch(addListings(listing)),
  };
};

export default connect(null, mapDispatchToProps)(AddNew);
