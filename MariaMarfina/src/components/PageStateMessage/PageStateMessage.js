import React from 'react';

const PageStateMessage = ( props ) => (
  <React.Fragment>
    { props.dataFetching && 
      <p className="h1 text-center">Loading...</p> }
    { !props.dataFetching && 
      props.error && 
      <p className="h1 text-center">Sorry, an error occurred while processing your request</p> }
    { props.pokemonsNum === 0 && 
      !props.error 
      && <p className="h1 text-center font-weight-normal">We don't have items here yet</p> }
  </React.Fragment>
);

export default PageStateMessage;