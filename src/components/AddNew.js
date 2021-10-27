import React, { Component, Fragment } from "react";
import { Button, TextField, Paper } from "@material-ui/core";
import uuid from "react-uuid";

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

class AddNew extends Component {
  state = {
    businessName: "",
    businessDescription: "",
    businessHours: "",
    businessAddress: "",
  };

  toggleDialog = () => this.setState({ open: !this.state.open });

  handleTextChange = (e) => {
    const newState = { ...this.state };
    newState[e.target.id] = e.target.value;
    this.setState(newState);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const payload = { ...this.state };
    // console.log("🚀🦷", uuid());
    payload.id = uuid();
    this.props.addListings(payload);
    console.log("🚀", payload);
    this.setState({ open: false });
    alert("Listing added: " + payload.businessName);
  };

  componentDidUpdate = (prevProps, prevState) => {
    console.log("🍄", prevState.open, this.state.open);
    if (prevState.open !== this.state.open) {
      this.setState({
        businessName: "",
        businessDescription: "",
        businessHours: "",
        businessAddress: "",
      });
    }
  };

  render() {
    return (
      <Fragment>
        <div style={{ display: "block ruby", textAlign: "center" }}>
          <Paper
            open={this.state.open}
            elevation={3}
            style={{
              width: "50%",
              height: "600px",
              margin: "80px",

              alignContent: "center",
            }}
          >
            <h1 style={{ marginTop: "10px" }}>Add New Business</h1>
            <form
              onSubmit={this.handleSubmit}
              style={{
                display: "flex",
                flexDirection: "column",
                width: "450px",
                margin: "50px",
              }}
            >
              <TextField
                id="businessName"
                placeholder="Name"
                value={this.state.businessName}
                onChange={this.handleTextChange}
                required
              />
              <TextField
                id="businessAddress"
                placeholder="Address"
                value={this.state.businessAddress}
                onChange={this.handleTextChange}
                required
              />
              <TextField
                id="businessHours"
                placeholder="Hours of Business (ex. 8AM - 9PM)"
                value={this.state.businessHours}
                onChange={this.handleTextChange}
                required
              />
              <TextField
                id="businessDescription"
                placeholder="Description"
                value={this.state.businessDescription}
                onChange={this.handleTextChange}
                required
              />
              <br />
              <Button
                id="add-btn"
                variant="contained"
                color="primary"
                type="submit"
              >
                Add New Business
              </Button>
            </form>
          </Paper>
        </div>
      </Fragment>
    );
  }
}

export default AddNew;
