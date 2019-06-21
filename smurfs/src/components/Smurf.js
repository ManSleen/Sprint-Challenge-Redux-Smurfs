import React from "react";
import { connect } from "react-redux";
import { deleteSmurf } from "../actions";

const Smurf = props => {
  return (
    <div className="Smurf">
      <div className="smurf-card-top">
        <div className="smurf-info">
          <h3>{props.smurf.name}</h3>
          <strong>{props.smurf.height} tall</strong>
          <p>{props.smurf.age} smurf years old</p>
          <p>Smurf ID: {props.smurf.id}</p>
        </div>
      </div>
      <div className="smurf-card-bottom">
        <div className="edit-delete-container">
          <div
            onClick={e => props.setUpdateForm(e, props.smurf)}
            className="edit-button"
          >
            <i className="fas fa-edit" />
          </div>
          <div
            onClick={() => props.deleteSmurf(props.smurf.id)}
            className="delete-button"
          >
            <i className="fas fa-trash-alt" />
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    smurfs: [],
    fetchingSmurfs: false,
    isLoading: false,
    addingSmurf: false,
    updatingSmurf: false,
    deletingSmurf: false,
    error: null
  };
};

export default connect(
  mapStateToProps,
  { deleteSmurf }
)(Smurf);
