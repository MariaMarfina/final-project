import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Favicon from 'react-favicon';
import Nav from '../Nav/Nav';
import PokemonsPage from '../../containers/PokemonsPage';
import CaughtPokemonsPage from '../../containers/CaughtPokemonsPage';
import PokemonPage from '../../containers/PokemonPage';
import NotFoundPage from '../NotFoundPage/NotFoundPage';

const App = () => (
  <React.Fragment>
    <Favicon url="https://freepngimg.com/save/20920-pokemon-go-image/16x16"/>
    <Nav/>
    <Switch>
      <Route exact path="/pokemons" exact={ true } component={ PokemonsPage }/>
      <Route exact path="/pokemons/:id" component={ PokemonPage }/>
      <Route exact path="/caught-pokemons" component={ CaughtPokemonsPage }/>
      <Redirect path="/" exact={ true } to="/pokemons"/>
      <Route component={ NotFoundPage }/>
    </Switch>
  </React.Fragment>
);

export default App;