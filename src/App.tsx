import * as React from 'react';
import { AppContainer } from './AppStyles'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HeaderBar from "./common-components/header-bar";
import Categories from './components/categories';
import Joke from './components/joke';
import { ApolloProvider } from '@apollo/client';
import { client } from './config/environment/config.env';

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <AppContainer className="App">
          <HeaderBar companyName="SOVTECH" />
          <Route exact path="/" component={Categories} />
          <Route exact path="/joke/:category" component={Joke} />
        </AppContainer>
      </Router>
    </ApolloProvider>
  );
}
