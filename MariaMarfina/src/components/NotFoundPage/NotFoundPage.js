import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div className="container text-center">
    <h1 className="display-4">404 Not Found</h1>
    <p className="lead">Sorry, an error has occured, requested page not found</p>
    <Link to="/pokemons" className="btn btn-lg btn-info">Back to Home</Link>
  </div>
);

export default NotFoundPage;
