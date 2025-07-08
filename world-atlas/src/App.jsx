import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {Home} from "./pages/Home";
import {About} from "./pages/About";
import {Country} from "./pages/Country";
import {Contact} from "./pages/Contact";
import { AppLayout } from "./components/layout/AppLayout";
import { ErrorPage } from "./pages/ErrorPage";

import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    errorElement: <ErrorPage />,
    children: [
  {
    path: "/",
    element: <Home />,
  },
    {
    path: "about",
    element: <About />,
  },
    {
    path: "country",
    element: <Country />,
  },
    {
    path: "contact",
    element: <Contact />,
  },
  ],
},
]);
const App = () =>{
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;

