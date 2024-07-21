import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Catalog from "./components/Catalog";
import Cart from "./components/Cart";
import Root from "./Root";

function App(): JSX.Element {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { path: "/", element: <Catalog /> },

        { path: "/cart", element: <Cart /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
