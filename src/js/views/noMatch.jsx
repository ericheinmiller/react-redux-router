import React from 'react';
import { Link } from 'react-router-dom';

const NoMatch = props => {
  return (
    <div>
      <h3>404: Whatever not found</h3>
      <Link to="/Home">Home Link</Link>
    </div>
  );
};

export default NoMatch;
