import ApolloClient from 'apollo-client';
import { WebSocketLink } from "apollo-link-ws";
import { split } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-boost';
import {SubscriptionClient} from 'subscriptions-transport-ws'

// Create an http link:
const httpLink = new HttpLink({
  uri: 'https://w6tcrg3sb4.execute-api.us-east-1.amazonaws.com/example-example-graphql-api',
  headers: {
    Authorization: '5152fa08-1806-4514-9f66-730e9b59486e'
  }
});

// Create a WebSocket link:
// const wsLink = new WebSocketLink(new SubscriptionClient(`wss://156hxo0ega.execute-api.us-east-1.amazonaws.com/example`, {
//   reconnect: true,
//   connectionParams: async () => {
//     return {
//       Authorization: '5152fa08-1806-4514-9f66-730e9b59486e',
//     }
//   }
// }, undefined, []));

const gqlClient = new ApolloClient(
  {
      link: httpLink,
      cache: new InMemoryCache()
  }
);

export { gqlClient }