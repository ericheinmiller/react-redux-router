import React from 'react';
import { Link } from 'react-router-dom';

const Contact = props => {
  return (
    <div>
      <h3>Contact Info</h3>
      <Link to="/About">About Link</Link>
      <Link to="/Home">Home Link</Link>
    </div>
  );
};

export default Contact;
