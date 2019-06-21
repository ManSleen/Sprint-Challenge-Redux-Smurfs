import React from "react";
import { connect } from "react-redux";
import { addSmurf } from "../actions";

class SmurfForm extends React.Component {
  state = {
    name: "",
    age: "",
    height: ""
  };

  onChange = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  addSmurf = e => {
    e.preventDefault();
    const smurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    };
    this.props.addSmurf(smurf);
    this.setState({
      name: "",
      age: "",
      height: ""
    });
    this.props.history.push("/");
  };

  render() {
    console.log("Props in SmurfForm: ", this.props);
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
          <input
            type="text"
            placeholder="name"
            value={this.state.name}
            name="name"
            onChange={this.onChange}
          />
          <input
            type="text"
            placeholder="age"
            value={this.state.age}
            name="age"
            onChange={this.onChange}
          />
          <input
            type="text"
            placeholder="height"
            value={this.state.height}
            name="height"
            onChange={this.onChange}
          />
          <button type="submit">Add Smurf</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs,
    addingSmurf: state.addingSmurf,
    updatingSmurf: state.updatingSmurf,
    deletingSmurf: state.deletingSmurf,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { addSmurf }
)(SmurfForm);
