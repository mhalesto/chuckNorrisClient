import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://calm-brushlands-33168.herokuapp.com',
  // uri: 'https://48p1r2roz4.sse.codesandbox.io',
  cache: new InMemoryCache()
});