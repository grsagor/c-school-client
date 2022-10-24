import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Course from "../../Pages/Course/Course";
import Courses from "../../Pages/Courses/Courses";
import Home from "../../Pages/Home/Home";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/Courses',
                element: <Courses></Courses>
            },
            {
                path: '/course/:id',
                element: <Course></Course>
            }
        ]
    }
])