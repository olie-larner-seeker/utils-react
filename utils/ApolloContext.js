import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://url-to-your-wordpress-site/graphql",
  cache: new InMemoryCache(),
});
