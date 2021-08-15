import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getSingleProject } from "../store/allProjectsReducer";

class SingleProject extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    this.props.getSingleProject(this.props.match.params.id);
  }

  render() {
    return (
      <div>
          <div className="single-project-view">
            <div>
              <img src={this.props.project.imageURL} />
            </div>
            <h1 className="single-name">{this.props.project.name}</h1>
            <h2>{this.props.project.role} </h2>
            <h2>
                <a href={this.props.project.link}>{this.props.project.link}</a> 
            </h2>
            <h2>{this.props.project.description} </h2>
          </div>
      </div>
    );
  }
}

const mapState = (state) => ({
  project: state.allProjectsReducer.singleProject,
  isLoggedIn: !!state.auth.id,
  user: state.auth,
});

const mapDispatch = (dispatch) => ({
  getSingleProject: (id) => dispatch(getSingleProject(id)),
});

export default withRouter(connect(mapState, mapDispatch)(SingleProject));
