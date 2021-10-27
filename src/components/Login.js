import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { TextField, Button, Container } from "@material-ui/core";

class Login extends Component {
  state = {
    username: "",
    password: "",
  };

  handleTextChange = (e) => {
    const state = { ...this.state };
    console.log("🎾", e.target.value, state);
    state[e.target.name] = e.target.value;
    this.setState(state);
  };

  loginUser = (e) => {
    e.preventDefault();
    console.log("🏀", this.state.username);
    document.cookie =
      "loggedIn=true;username=" + this.state.username + ";max-age=60*1000";
    window.location.replace("/");

    console.log("🔑", this.state.username);
  };

  render() {
    return (
      <div>
        <Container maxWidth="sm">
          <form className="login" onSubmit={this.loginUser}>
            <TextField
              required
              onChange={this.handleTextChange}
              value={this.state.username}
              name="username"
              label="Username"
              type="text"
            />
            <TextField
              required
              onChange={this.handleTextChange}
              value={this.state.password}
              name="password"
              label="Password"
              type="password"
            />
            <Button
              type="submit"
              className="login-btn"
              variant="contained"
              color="primary"
              style={{ backgroundColor: "green" }}
            >
              Login
            </Button>
          </form>
        </Container>
      </div>
    );
  }
}

export default withRouter(Login);
