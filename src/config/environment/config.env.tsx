import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://calm-brushlands-33168.herokuapp.com',
  // uri: 'http://localhost:4000',
  cache: new InMemoryCache()
});