import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../Layouts/Layout";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
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
                path: "/about",
                element: <About/>
            },
            {
                path: "/contact",
                element: <Contact/>
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