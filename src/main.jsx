import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import ItemsOutlet from "./components/ItemsOutlet/ItemsOutlet.jsx";
import { Provider } from "react-redux";
import store from "./store.js";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        path: "subreddit/:subredditId",
        Component: ItemsOutlet,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
