import { Client, cacheExchange, fetchExchange } from "urql";

const client = new Client({
  url: "http://api:12340/graphql",
  exchanges: [cacheExchange, fetchExchange],
  fetchOptions: () => {
    const token = "a";
    return {
      headers: { authorization: token ? `Bearer ${token}` : "" },
    };
  },
});
