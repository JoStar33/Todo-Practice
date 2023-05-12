import type { Preview } from "@storybook/react";
import { initialize, mswDecorator } from 'msw-storybook-addon';
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import { handlers } from '../src/mocks/handlers';

// if (typeof global.process === "undefined") {
//   //checks to make sure that this is not a node process
//   const worker = setupWorker(
//     //create service worker
//     ...handlers
//   );
//   worker.start(); // worker starts!
// }
const queryClient = new QueryClient();


// Initialize MSW
initialize({
  onUnhandledRequest: 'bypass'
});

// Provide the MSW addon decorator globally
export const decorators = [(Story) => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Story />
    </BrowserRouter>
  </QueryClientProvider>
), mswDecorator];

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    //msw Mocking
    msw: {
      handlers: handlers
    }
  },
};

export default preview;
