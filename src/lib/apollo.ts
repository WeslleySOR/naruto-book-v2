import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.hygraph.com/v2/cl9enyi8p0c3701ta9umvhcu1/master",
  cache: new InMemoryCache(),
});