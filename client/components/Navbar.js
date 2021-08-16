import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

const Navbar = ({ handleClick, isLoggedIn }) => (
  <div id="nav-bar">
    <h1 className="site-title">Project Portfolio</h1>
    <nav>
      {isLoggedIn ? (
        <div>
          <Link to="/home" className="nav-text">
            Home
          </Link>
          <a className="nav-text" href="#" onClick={handleClick}>
            Logout
          </a>
        </div>
      ) : (
        <div>
          <Link to="/home" className="nav-text">
            Home
          </Link>
          <Link to="/login" className="nav-text">
            Login
          </Link>
          <Link to="/signup" className="nav-text">
            Sign Up
          </Link>
        </div>
      )}
    </nav>
  </div>
);

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    isLoggedIn: !!state.auth.id,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleClick() {
      dispatch(logout());
    },
  };
};

export default connect(mapState, mapDispatch)(Navbar);
