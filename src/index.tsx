import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss';
import App from './components/App';
// context
import { GlobalProvider } from './context/AppContext';
// apollo/client
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from "@apollo/client/link/context";
// react-router
import {
  BrowserRouter as Router,
} from 'react-router-dom';

const httpLink = createHttpLink({
  uri: 'https://api.github.com/graphql'
})

// authentication
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
      <GlobalProvider>
        <Router>
          <App />
        </Router>
      </GlobalProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
