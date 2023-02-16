import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import About from "../../Pages/Cto-services/About/About";
import Contact from "../../Pages/Cto-services/Contact/Contact";
import Home from "../../Pages/Cto-services/Home/Home";
import NotFound from "../../Pages/Shared/NotFound/NotFound";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '*',
                element: <NotFound></NotFound>
            },
        ]
    }
])