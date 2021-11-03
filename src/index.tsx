import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: 'https://api.github.com/graphql'
})

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: process.env.REACT_APP_PERSONAL_GITHUB_API_TOKEN ? `Bearer ${process.env.REACT_APP_PERSONAL_GITHUB_API_TOKEN}` : null,
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(
    httpLink
  ),
  cache: new InMemoryCache(),
});


ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
