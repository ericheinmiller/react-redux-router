import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Home = (props) => {
  return (
    <div>
      { props.greeting }
      <Link to="/Contact">Contact Link</Link>
      <Link to="/About">About Link</Link>
    </div>
  );
};

const mapStateToProps = state => ({ greeting: state.greeting });

export default connect(mapStateToProps)(Home);
