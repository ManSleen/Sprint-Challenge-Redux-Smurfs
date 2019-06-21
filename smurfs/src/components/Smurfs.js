import React from "react";
import Smurf from "./Smurf";
import { connect } from "react-redux";
import { fetchSmurfs, setUpdateForm } from "../actions";

class Smurfs extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className="smurfs-container">
        {this.props.smurfs.map(smurf => {
          return <Smurf key={smurf.name} smurf={smurf} />;
        })}
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
  { fetchSmurfs, setUpdateForm }
)(Smurfs);
