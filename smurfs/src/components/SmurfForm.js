import React from "react";

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

  addSmurf = props => {};

  render() {
    return (
      <div>
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

export default SmurfForm;
