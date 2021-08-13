import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { fetchProjects } from "../store/allProjectsReducer";

class AllProjects extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // fetch all products from db and setstate
    this.props.getProjects();
  }

  render() {
    return (
      <div>
        <div id="all-projects">
          {this.props.projects.map((project) => (
            <div key={project.id} className="single-project">
              <div>
                <Link to={`/project/${project.id}`}>
                  <img
                    src={project.imageURL}
                  />
                  <h3 className="project-name">{project.name}</h3>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapState = (state) => ({
  isLoggedIn: !!state.auth.id,
  user: state.auth,
  projects: state.allProjectsReducer.projects,
});

const mapDispatch = (dispatch) => ({
  getProjects: () => dispatch(fetchProjects()),
});

export default withRouter(connect(mapState, mapDispatch)(AllProjects));
