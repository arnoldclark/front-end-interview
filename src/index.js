import React from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
//

// const cache = {
//   cars: {
//     data: [{}, {}, {}],
//     fetchAt: "17th Feb, 10:46",
//     keepFor: "10 mins"
//   }
// }

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      retryDelay: 500,
      refetchOnReconnect: true,
    },
  },
});

import App from "./App";

const container = document.getElementById("app");

const root = createRoot(container);
root.render(
  <QueryClientProvider client={queryClient}>
    <App />
    <ReactQueryDevtools initialIsOpen={false}></ReactQueryDevtools>
  </QueryClientProvider>
);
