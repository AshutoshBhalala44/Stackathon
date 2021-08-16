import React from 'react'
import {connect} from 'react-redux'
import { Link } from "react-router-dom";
/**
 * COMPONENT
 */
export const Home = props => {
  const {username} = props;

  return (
    <div className="welcome">
      <h3>Welcome to the Project Portfolio of {username}</h3>
      <Link to={"/"}>
        <button className="auth-button" type="button">
          Show Projects
        </button>
      </Link>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    username: state.auth.username
  }
}

export default connect(mapState)(Home)
