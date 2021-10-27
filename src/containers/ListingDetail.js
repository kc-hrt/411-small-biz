import { connect } from "react-redux";
import ListingDetail from "../components/ListingDetail";

const mapStateToProps = (state) => {
  console.log("🧀", state.username);
  return {
    listings: state.listings,
    user: state.username,
  };
};

export default connect(mapStateToProps)(ListingDetail);
