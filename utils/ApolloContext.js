import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  // uri: `http://localhost:8888/ecomscience/graphql`,
  uri: "https://wordpress-458085-1434452.cloudwaysapps.com/graphql",
  cache: new InMemoryCache(),
});
