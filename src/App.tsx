import * as React from 'react';
import { AppContainer } from './AppStyles'
import HeaderBar from "./common-components/header-bar";
import Categories from './components/categories';
import { ApolloProvider } from '@apollo/client';
import { client } from './config/environment/config.env';

export default function App() {
  return (
    <ApolloProvider client={client}>
      <AppContainer className="App">
        <HeaderBar companyName="SOVTECH" />
        <Categories />
      </AppContainer>
    </ApolloProvider>
  );
}
