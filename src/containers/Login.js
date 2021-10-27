import { connect } from "react-redux";
import Login from "../components/Login";
import { login } from "../redux/actions";

const mapStateToProps = (state) => {
  console.log("🧀🦋", state);
  return {
    user: state.username,
  };
};

const mapDispatchToProps = (dispatch) => {
  console.log("🧀🧀🦋", dispatch);
  return {
    login: (username) => dispatch(login(username)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
