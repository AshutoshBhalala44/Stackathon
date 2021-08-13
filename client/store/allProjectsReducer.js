import axios from "axios";

const SET_PROJECTS = "SET_PROJECTS";
const SET_PROJECT = "SET_PROJECT";
const UPDATED_PROJECT = "UPDATED_PROJECT";

const initialState = {
  projects: [],
  singleProject: {},
};

const setProjects = (projects) => ({
  type: SET_PROJECTS,
  projects,
});

const setProject = (project) => ({
  type: SET_PROJECT,
  project,
});

const updatedProject = (project) => ({
  type: UPDATED_PROJECT,
  project,
});

export const _updatedProject = (project, history) => {
  return async (dispatch) => {
    try {
      const { data: updated } = await axios.put(
        `/api/projects/${project.id}`,
        project
      );
      dispatch(updatedProject(updated));
      history.push(`/projects/${project.id}`);
    } catch (e) {
      console.log(e);
    }
  };
};

export const getSingleProject = (id) => {
  return async (dispatch) => {
    try {
      const { data: project } = await axios.get(`/api/projects/${id}`);
      dispatch(setProject(project));
    } catch (e) {
      console.log(e);
    }
  };
};

export const fetchProjects = () => {
  return async (dispatch) => {
    try {
      const { data: projects } = await axios.get("/api/projects");
      dispatch(setProjects(projects));
    } catch (e) {
      console.log(e);
    }
  };
};

export default function allProjectsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PROJECTS: {
      return { ...state, projects: action.projects };
    }
    case SET_PROJECT: {
      return { ...state, singleProject: action.project };
    }
    case UPDATED_PROJECT: {
      let projectos = state.projects.map((project) =>
      project.id === action.project.id ? action.project : project
      );
      return { ...state, projects: projectos };
    }
    default:
      return state;
  }
}
