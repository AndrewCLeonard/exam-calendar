import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";
const client = new ApolloClient({
  uri: 'https://localhost:3004/graphql',
  cache: new InMemoryCache()
});


ReactDOM.render(
<ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);


