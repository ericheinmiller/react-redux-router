import React from 'react';
import { Link } from 'react-router-dom';

const About = props => {
  return (
    <div>
      <h3>About</h3>
      <Link to="/Contact">Contact Link</Link>
      <Link to="/Home">Home Link</Link>
    </div>
  );
};

export default About;
