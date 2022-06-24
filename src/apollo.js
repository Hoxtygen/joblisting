import {ApolloClient, InMemoryCache} from "@apollo/client";

const {
  REACT_APP_GRAPHQL_URL: GRAPHQL_URL,
  REACT_APP_REALTIME_GRAPHQL_URL: REALTIME_GRAPHQL_URL,
} = process.env;

const client = new ApolloClient({
  uri: GRAPHQL_URL,
  cache: new InMemoryCache(),
  fetchOptions: {
    mode: "no-cors"
  }
});

export default client;
