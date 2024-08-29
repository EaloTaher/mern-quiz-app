import { createBrowserRouter, RouterProvider } from "react-router-dom";

//import components
import Home from "./components/Home";
import Quiz from "./components/Quiz";
import Result from "./components/Result";

// React Routers
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/quiz",
    element: <Quiz></Quiz>,
  },
  {
    path: "/result",
    element: <Result></Result>,
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
