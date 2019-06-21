import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import { fetchSmurfs } from "../actions";
import Smurf from "./Smurf";
import SmurfForm from "./SmurfForm";
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  componentDidMount() {
    this.props.fetchSmurfs();
  }

  addSmurf = props => {};

  render() {
    console.log("Props in APP: ", this.props);
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <div className="Smurfs">
          <SmurfForm />
          <div className="smurfs-container">
            {this.props.smurfs.map(smurf => {
              return <Smurf key={smurf.name} smurf={smurf} />;
            })}
          </div>
        </div>
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
  { fetchSmurfs }
)(App);
