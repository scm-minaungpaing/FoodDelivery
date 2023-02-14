import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import CreateContainer from "../components/CreateContainer";
import MainContainer from "../components/MainContainer";
import Home from "../pages/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <MainContainer/>
            },
            {
                path: "/createItem",
                element: <CreateContainer/>
            }
        ]
    },
   
])

export default router;