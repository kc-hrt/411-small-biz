import { connect } from "react-redux";
import ListingDetail from "../components/ListingDetail";

const mapStateToProps = (state) => {
  console.log("🧀", state);
  return {
    listings: state.listings,
    user: state.user,
  };
};

export default connect(mapStateToProps)(ListingDetail);
