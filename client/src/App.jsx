import { createBrowserRouter, RouterProvider } from "react-router-dom";
//import components
import Home from "./components/Home";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import { CheckUserExist } from "./components/CheckUserExist";
// React Routers
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/quiz",
    element: (
      <CheckUserExist>
        <Quiz></Quiz>
      </CheckUserExist>
    ),
  },
  {
    path: "/result",
    element: (
      <CheckUserExist>
        <Result></Result>
      </CheckUserExist>
    ),
  },
]);

export default function App() {
  return (
    <div
      className="flex items-center mx-auto justify-center mt-[10%] max-[900px]:w-[50%] w-[35%]  max-[500px]:w-[75%] max-[380px]:w-[90%]
    bg-[#36454F] relative shadow-xl overflow-hidden hover:shadow-2xl group rounded-xl p-5 transition-all duration-500 transform
    "
    >
      <div className="flex flex-col">
        <h1 className=" text-6xl mx-auto mb-8  ">Quiz App</h1>
        <hr className="mb-1" />
        <RouterProvider router={router} />
      </div>
    </div>
  );
}
