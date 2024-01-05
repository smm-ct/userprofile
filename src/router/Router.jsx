import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../Layouts/Layout";
import Home from "../Pages/Home";
import { NotFound } from "../Pages/NotFound";
import Profile from "../Pages/Profile";

export const Router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children:[
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "home",
                element: <Home/>
            },
            {
                path: "/contact",
                element: <h1>Contact Page</h1>
            },
            {
                path: "profileDetails/:user_id",
                element: <Profile />
            },
            {
                path: "*",
                element: <NotFound />
            }
        ]
    }
    
])